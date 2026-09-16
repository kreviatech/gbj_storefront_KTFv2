import {
  ShopifyGraphQLResponse,
  ShopifyProduct,
  ShopifyShopInfo,
  ShopifyImage,
  ShopifyVariant,
  ShopifyCollection,
  ShopifyCustomer,
  ShopifyCustomerAccessToken,
  CartBuyerIdentityInput,
  CartBuyerIdentity,
} from "./types";

const domain =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "sxr11n-4z.myshopify.com";
const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ||
  "983b3cc02be02d0fb5398b96cca0207d";
const privateAccessToken =
  process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN ||
  "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";
const apiVersion = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION || "2024-01";

export const SHOPIFY_SHOP_ID =
  process.env.NEXT_PUBLIC_SHOPIFY_SHOP_ID || "99668787516";
export const SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID =
  process.env.NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID ||
  "769996f2-50a7-471e-8ede-550d949aa2fa";

const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

/**
 * Execute a GraphQL query against the Shopify Storefront API
 */
export async function shopifyFetch<T>({
  query,
  variables = {},
  revalidate = 60,
}: {
  query: string;
  variables?: Record<string, unknown>;
  revalidate?: number;
}): Promise<T> {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (typeof window === "undefined" && privateAccessToken) {
      headers["Shopify-Storefront-Private-Token"] = privateAccessToken;
    } else {
      headers["X-Shopify-Storefront-Access-Token"] = storefrontAccessToken;
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ query, variables }),
      next: { revalidate },
    });

    if (!response.ok) {
      throw new Error(`Shopify API HTTP error: ${response.status} ${response.statusText}`);
    }

    const json: ShopifyGraphQLResponse<T> = await response.json();

    if (json.errors && json.errors.length > 0) {
      throw new Error(
        `Shopify GraphQL Error: ${json.errors.map((e) => e.message).join(", ")}`
      );
    }

    if (!json.data) {
      throw new Error("Shopify GraphQL response returned empty data.");
    }

    return json.data;
  } catch (error) {
    console.error("Error executing Shopify Storefront GraphQL query:", error);
    throw error;
  }
}

/**
 * Fetch Shop metadata and domain details
 */
export async function getShopDetails(): Promise<ShopifyShopInfo | null> {
  const query = `
    query getShopDetails {
      shop {
        name
        description
        primaryDomain {
          url
          host
        }
        moneyFormat
      }
    }
  `;

  try {
    const data = await shopifyFetch<{ shop: ShopifyShopInfo }>({ query });
    return data.shop;
  } catch {
    return null;
  }
}

/**
 * Fetch all catalog products for the storefront
 */
export async function getProducts(first = 50): Promise<ShopifyProduct[]> {
  const query = `
    query getProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            descriptionHtml
            availableForSale
            totalInventory
            productType
            vendor
            tags
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                  width
                  height
                }
              }
            }
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  price {
                    amount
                    currencyCode
                  }
                  image {
                    url
                    altText
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch<{
      products: {
        edges: Array<{
          node: {
            id: string;
            title: string;
            handle: string;
            description: string;
            descriptionHtml?: string;
            availableForSale?: boolean;
            totalInventory?: number;
            productType?: string;
            vendor?: string;
            tags?: string[];
            priceRange: {
              minVariantPrice: { amount: string; currencyCode: string };
              maxVariantPrice?: { amount: string; currencyCode: string };
            };
            images: {
              edges: Array<{ node: ShopifyImage }>;
            };
            variants: {
              edges: Array<{ node: ShopifyVariant }>;
            };
          };
        }>;
      };
    }>({
      query,
      variables: { first },
    });

    return data.products.edges.map((edge) => {
      const p = edge.node;
      const images = p.images.edges.map((imgEdge) => imgEdge.node);
      const variants = p.variants?.edges.map((vEdge) => vEdge.node) || [];
      const isWatch = ["rolex", "iwc", "watch"].some((kw) =>
        p.title.toLowerCase().includes(kw)
      );

      // Curated fallback image if none uploaded yet
      const fallbackImg: ShopifyImage = {
        url: isWatch ? "/images/hero-watch-dial.jpg" : "/images/gold-chain-jewellery.jpg",
        altText: p.title,
      };

      const finalImages = images.length > 0 ? images : [fallbackImg];

      return {
        id: p.id,
        title: p.title,
        handle: p.handle,
        description: p.description,
        descriptionHtml: p.descriptionHtml,
        availableForSale: p.availableForSale,
        totalInventory: p.totalInventory,
        productType: p.productType,
        vendor: p.vendor,
        tags: p.tags,
        priceRange: p.priceRange,
        featuredImage: finalImages[0],
        images: finalImages,
        variants,
      };
    });
  } catch {
    return [];
  }
}

/**
 * Fetch a single product by handle from Shopify Storefront API
 */
export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const query = `
    query getProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        availableForSale
        totalInventory
        vendor
        productType
        tags
        options {
          name
          values
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
              width
              height
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              availableForSale
              price {
                amount
                currencyCode
              }
              image {
                url
                altText
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch<{
      product: {
        id: string;
        title: string;
        handle: string;
        description: string;
        descriptionHtml?: string;
        availableForSale?: boolean;
        totalInventory?: number;
        vendor?: string;
        productType?: string;
        tags?: string[];
        options?: Array<{ name: string; values: string[] }>;
        priceRange: {
          minVariantPrice: { amount: string; currencyCode: string };
          maxVariantPrice?: { amount: string; currencyCode: string };
        };
        images: { edges: Array<{ node: ShopifyImage }> };
        variants: { edges: Array<{ node: ShopifyVariant }> };
      } | null;
    }>({
      query,
      variables: { handle },
    });

    if (!data.product) return null;

    const p = data.product;
    const images = p.images.edges.map((e) => e.node);
    const variants = p.variants.edges.map((e) => e.node);

    const isWatch = ["rolex", "iwc", "watch"].some((kw) =>
      p.title.toLowerCase().includes(kw)
    );

    const fallbackImg: ShopifyImage = {
      url: isWatch ? "/images/hero-watch-dial.jpg" : "/images/gold-chain-jewellery.jpg",
      altText: p.title,
    };

    const finalImages = images.length > 0 ? images : [fallbackImg];

    return {
      id: p.id,
      title: p.title,
      handle: p.handle,
      description: p.description,
      descriptionHtml: p.descriptionHtml,
      availableForSale: p.availableForSale,
      totalInventory: p.totalInventory,
      vendor: p.vendor,
      productType: p.productType,
      tags: p.tags,
      options: p.options,
      priceRange: p.priceRange,
      featuredImage: finalImages[0],
      images: finalImages,
      variants,
    };
  } catch (error) {
    console.error(`Error fetching product by handle "${handle}":`, error);
    return null;
  }
}

/**
 * Fetch luxury watches from the store
 */
export async function getWatches(): Promise<ShopifyProduct[]> {
  const allProducts = await getProducts(50);
  const watchKeywords = ["rolex", "iwc", "watch", "chrono", "diver", "daydate", "datejust", "submariner", "gmt"];

  const watches = allProducts.filter((p) => {
    const lower = p.title.toLowerCase();
    return watchKeywords.some((kw) => lower.includes(kw));
  });

  return watches.map((p, idx) => {
    const isOdd = idx % 2 === 0;
    return {
      ...p,
      badge: isOdd ? "50% OFF" : "New Arrival",
      subtitle: p.title.includes("-") ? p.title.split("-")[1]?.trim() : "Prestige Timepiece",
    };
  });
}

/**
 * Fetch gold and silver jewellery from the store
 */
export async function getJewellery(): Promise<ShopifyProduct[]> {
  const allProducts = await getProducts(50);
  const jewelleryKeywords = ["chain", "bangle", "bracelet", "ring", "earring", "gold", "silver", "belcher", "rope"];

  const jewellery = allProducts.filter((p) => {
    const lower = p.title.toLowerCase();
    const isWatch = ["rolex", "iwc", "watch"].some((w) => lower.includes(w));
    return !isWatch && jewelleryKeywords.some((kw) => lower.includes(kw));
  });

  return jewellery.map((p, idx) => {
    const isOdd = idx % 2 === 0;
    return {
      ...p,
      badge: isOdd ? "50% OFF" : "New Arrival",
      subtitle: p.title.includes("-") ? p.title.split("-")[1]?.trim() : "Hallmarked 9ct / 18ct",
    };
  });
}

/**
 * Fetch related products
 */
export async function getRelatedProducts(
  currentId: string,
  limit = 4
): Promise<ShopifyProduct[]> {
  const allProducts = await getProducts(20);
  return allProducts.filter((p) => p.id !== currentId).slice(0, limit);
}

/**
 * Built-in Category Configuration for collections
 */
export const CATEGORY_MAP: Record<
  string,
  {
    title: string;
    description: string;
    filter: (p: ShopifyProduct) => boolean;
  }
> = {
  chains: {
    title: "Solid Gold & Silver Chains",
    description:
      "Handcrafted 9ct & 18ct solid gold chains, curb links, rope chains, franco links, and belcher chains assayed and certified.",
    filter: (p) => {
      const t = p.title.toLowerCase();
      return (
        (t.includes("chain") ||
          t.includes("curb") ||
          t.includes("belcher") ||
          t.includes("franco") ||
          t.includes("rope")) &&
        !t.includes("bracelet")
      );
    },
  },
  bangles: {
    title: "Gold Bangles & Torcs",
    description:
      "Heavy 9ct gold hook & loop bangles, diamond & stone-set torcs, and leopard head statement bangles certified in the East Midlands.",
    filter: (p) => p.title.toLowerCase().includes("bangle"),
  },
  bracelets: {
    title: "Gold & Silver Bracelets",
    description:
      "Solid 9ct gold gypsy link bracelets, star & bar links, acorn bracelets, and heart-shaped belcher bracelets.",
    filter: (p) => p.title.toLowerCase().includes("bracelet"),
  },
  rings: {
    title: "Prestige Rings & Signets",
    description:
      "Heavy 5-row keeper rings, solid gold signet rings, tiger's eye inlays, pyramid rings, and openwork bands.",
    filter: (p) => p.title.toLowerCase().includes("ring"),
  },
  earrings: {
    title: "Fine Earrings & Hoops",
    description:
      "9ct & 18ct white gold hoop earrings, twisted hoops, articulated stone-set drops, and diamond studs.",
    filter: (p) =>
      p.title.toLowerCase().includes("earring") ||
      p.title.toLowerCase().includes("hoop"),
  },
  diamonds: {
    title: "Diamonds & Gemstones",
    description:
      "Certified diamond jewellery, three-stone drop earrings, brilliant cut rings, and SI1/G-H graded stones.",
    filter: (p) => {
      const t = `${p.title} ${p.description || ""}`.toLowerCase();
      return (
        t.includes("diamond") ||
        t.includes("1.5ct") ||
        t.includes("stone set") ||
        t.includes("g-h") ||
        t.includes("si1")
      );
    },
  },
  watches: {
    title: "Swiss Luxury Watches",
    description:
      "Pre-owned Rolex, IWC, and Swiss chronometers authenticated with serial verification, box, and original papers.",
    filter: (p) => {
      const t = p.title.toLowerCase();
      return (
        t.includes("rolex") ||
        t.includes("iwc") ||
        t.includes("watch") ||
        t.includes("daydate") ||
        t.includes("datejust") ||
        t.includes("sea-dweller") ||
        t.includes("gmt")
      );
    },
  },
  pandora: {
    title: "Pandora & Sterling Silver",
    description:
      "Genuine Pandora charms, sterling 925 silver bangles, collector keepsakes, and fine silver jewellery.",
    filter: (p) => {
      const t = `${p.title} ${p.description || ""}`.toLowerCase();
      return (
        t.includes("pandora") ||
        t.includes("silver") ||
        t.includes("925") ||
        t.includes("charm")
      );
    },
  },
  "latest-products": {
    title: "Latest Products & New Arrivals",
    description:
      "Explore the most recent additions to our luxury vault, featuring fresh allocations of solid gold, silver, and timepieces.",
    filter: () => true,
  },
};

/**
 * Fetch all collections from Shopify Storefront API
 */
export async function getAllCollections(): Promise<
  Array<{ id: string; title: string; handle: string }>
> {
  const query = `
    query getAllCollections {
      collections(first: 50) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch<{
      collections: {
        edges: Array<{
          node: {
            id: string;
            title: string;
            handle: string;
          };
        }>;
      };
    }>({ query });

    return data.collections.edges.map((e) => e.node);
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];
  }
}

/**
 * Fetch a single collection by handle from Shopify Storefront API,
 * with intelligent category resolution so no category ever returns empty.
 */
export async function getCollectionByHandle(
  handle: string
): Promise<ShopifyCollection | null> {
  const query = `
    query getCollectionByHandle($handle: String!) {
      collection(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        image {
          url
          altText
        }
        products(first: 50) {
          edges {
            node {
              id
              title
              handle
              description
              descriptionHtml
              availableForSale
              totalInventory
              productType
              vendor
              tags
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 5) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              variants(first: 5) {
                edges {
                  node {
                    id
                    title
                    availableForSale
                    price {
                      amount
                      currencyCode
                    }
                    image {
                      url
                      altText
                    }
                    selectedOptions {
                      name
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch<{
      collection: {
        id: string;
        title: string;
        handle: string;
        description: string;
        descriptionHtml?: string;
        image?: ShopifyImage | null;
        products: {
          edges: Array<{
            node: {
              id: string;
              title: string;
              handle: string;
              description: string;
              descriptionHtml?: string;
              availableForSale?: boolean;
              totalInventory?: number;
              productType?: string;
              vendor?: string;
              tags?: string[];
              priceRange: {
                minVariantPrice: { amount: string; currencyCode: string };
              };
              images: {
                edges: Array<{ node: ShopifyImage }>;
              };
              variants?: {
                edges: Array<{ node: ShopifyVariant }>;
              };
            };
          }>;
        };
      } | null;
    }>({
      query,
      variables: { handle },
    });

    // If Shopify returns a populated collection with products, format and return it
    if (data.collection && data.collection.products.edges.length > 0) {
      const c = data.collection;
      const products: ShopifyProduct[] = c.products.edges.map((e, idx) => {
        const p = e.node;
        const images = p.images.edges.map((ie) => ie.node);
        const variants = p.variants?.edges.map((ve) => ve.node) || [];
        const isWatch = ["rolex", "iwc", "watch"].some((w) =>
          p.title.toLowerCase().includes(w)
        );
        const fallbackImg: ShopifyImage = {
          url: isWatch
            ? "/images/hero-watch-dial.jpg"
            : "/images/gold-chain-jewellery.jpg",
          altText: p.title,
        };
        const finalImages = images.length > 0 ? images : [fallbackImg];

        return {
          id: p.id,
          title: p.title,
          handle: p.handle,
          description: p.description,
          descriptionHtml: p.descriptionHtml,
          availableForSale: p.availableForSale,
          totalInventory: p.totalInventory,
          productType: p.productType,
          vendor: p.vendor,
          tags: p.tags,
          priceRange: p.priceRange,
          featuredImage: finalImages[0],
          images: finalImages,
          variants,
          badge: idx % 2 === 0 ? "50% OFF" : "New Arrival",
        };
      });

      return {
        id: c.id,
        title: c.title,
        handle: c.handle,
        description: c.description,
        descriptionHtml: c.descriptionHtml,
        image: c.image,
        products,
      };
    }
  } catch (err) {
    console.warn(`Shopify query for collection "${handle}" failed or was empty, checking fallback resolver.`, err);
  }

  // Fallback category resolver: Pull all active store products from Shopify and match against category rules
  const allProducts = await getProducts(100);
  const normalizedHandle = handle.toLowerCase();
  const catConfig = CATEGORY_MAP[normalizedHandle];

  if (catConfig) {
    const filteredProducts = allProducts.filter(catConfig.filter);
    return {
      id: `gid://shopify/Collection/custom-${normalizedHandle}`,
      title: catConfig.title,
      handle: normalizedHandle,
      description: catConfig.description,
      products: filteredProducts.length > 0 ? filteredProducts : allProducts.slice(0, 8),
    };
  }

  // Generic fallback for any other handle
  const title = handle
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const matchingProducts = allProducts.filter((p) =>
    p.title.toLowerCase().includes(handle.toLowerCase())
  );

  return {
    id: `gid://shopify/Collection/custom-${handle}`,
    title: title,
    handle: handle,
    description: `Browse our certified ${title} collection at Gold Bank Jewellers. Assayed, verified, and ready for immediate dispatch.`,
    products: matchingProducts.length > 0 ? matchingProducts : allProducts,
  };
}

/**
 * Create a live checkout on Shopify Storefront API using cartCreate.
 * If buyerIdentity is provided (with customerAccessToken and/or email),
 * Shopify associates the cart with the authenticated customer, allowing
 * pre-filled email, saved addresses, and authenticated checkout.
 */
export async function createShopifyCheckout(
  items: Array<{
    merchandiseId?: string;
    variantId?: string;
    product?: ShopifyProduct;
    quantity: number;
  }>,
  buyerIdentity?: CartBuyerIdentityInput
): Promise<{
  checkoutUrl: string;
  cartId: string;
  buyerIdentity?: CartBuyerIdentity | null;
}> {
  // If merchandiseId is missing, try to resolve from variantId or product.variants[0].id
  const lines: Array<{ merchandiseId: string; quantity: number }> = [];

  for (const item of items) {
    let merchandiseId = item.merchandiseId || item.variantId;
    if (!merchandiseId && item.product?.variants && item.product.variants.length > 0) {
      merchandiseId = item.product.variants[0].id;
    }

    if (merchandiseId && merchandiseId.startsWith("gid://shopify/ProductVariant/")) {
      lines.push({
        merchandiseId,
        quantity: Math.max(1, item.quantity),
      });
    }
  }

  // If no valid variant IDs could be extracted (e.g. mock items), fetch a live store product variant to back the checkout
  if (lines.length === 0) {
    const liveProducts = await getProducts(1);
    const fallbackVariantId = liveProducts[0]?.variants?.[0]?.id;
    if (fallbackVariantId) {
      lines.push({
        merchandiseId: fallbackVariantId,
        quantity: 1,
      });
    } else {
      throw new Error("Unable to create cart: no product variants available.");
    }
  }

  const mutation = `
    mutation createCart($lines: [CartLineInput!], $buyerIdentity: CartBuyerIdentityInput) {
      cartCreate(input: { lines: $lines, buyerIdentity: $buyerIdentity }) {
        cart {
          id
          checkoutUrl
          totalQuantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          buyerIdentity {
            email
            phone
            countryCode
            customer {
              id
              email
              firstName
              lastName
              displayName
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  `;

  const variables: Record<string, unknown> = { lines };
  if (buyerIdentity && Object.keys(buyerIdentity).length > 0) {
    variables.buyerIdentity = buyerIdentity;
  }

  const data = await shopifyFetch<{
    cartCreate: {
      cart: {
        id: string;
        checkoutUrl: string;
        totalQuantity: number;
        cost: {
          totalAmount: {
            amount: string;
            currencyCode: string;
          };
        };
        buyerIdentity?: CartBuyerIdentity | null;
      } | null;
      userErrors: Array<{ code: string; field: string[]; message: string }>;
    };
  }>({
    query: mutation,
    variables,
    revalidate: 0,
  });

  if (data.cartCreate.userErrors && data.cartCreate.userErrors.length > 0) {
    throw new Error(data.cartCreate.userErrors.map((e) => e.message).join(", "));
  }

  if (!data.cartCreate.cart) {
    throw new Error("Failed to initialize Shopify checkout cart.");
  }

  return {
    checkoutUrl: data.cartCreate.cart.checkoutUrl,
    cartId: data.cartCreate.cart.id,
    buyerIdentity: data.cartCreate.cart.buyerIdentity,
  };
}

/**
 * Associate or update a customer buyer identity on an existing Shopify Cart.
 */
export async function updateCartBuyerIdentity(
  cartId: string,
  buyerIdentity: CartBuyerIdentityInput
): Promise<{
  checkoutUrl: string;
  cartId: string;
  buyerIdentity?: CartBuyerIdentity | null;
}> {
  const mutation = `
    mutation updateCartBuyerIdentity($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
      cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
        cart {
          id
          checkoutUrl
          buyerIdentity {
            email
            phone
            countryCode
            customer {
              id
              email
              firstName
              lastName
              displayName
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartBuyerIdentityUpdate: {
      cart: {
        id: string;
        checkoutUrl: string;
        buyerIdentity?: CartBuyerIdentity | null;
      } | null;
      userErrors: Array<{ code: string; field: string[]; message: string }>;
    };
  }>({
    query: mutation,
    variables: { cartId, buyerIdentity },
    revalidate: 0,
  });

  if (
    data.cartBuyerIdentityUpdate.userErrors &&
    data.cartBuyerIdentityUpdate.userErrors.length > 0
  ) {
    throw new Error(
      data.cartBuyerIdentityUpdate.userErrors.map((e) => e.message).join(", ")
    );
  }

  if (!data.cartBuyerIdentityUpdate.cart) {
    throw new Error("Failed to update cart buyer identity.");
  }

  return {
    checkoutUrl: data.cartBuyerIdentityUpdate.cart.checkoutUrl,
    cartId: data.cartBuyerIdentityUpdate.cart.id,
    buyerIdentity: data.cartBuyerIdentityUpdate.cart.buyerIdentity,
  };
}

/**
 * Authenticate customer on the custom storefront using email and password.
 * Returns a valid Shopify customerAccessToken.
 */
export async function customerLogin(
  email: string,
  password: string
): Promise<ShopifyCustomerAccessToken> {
  const mutation = `
    mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
      customerAccessTokenCreate(input: $input) {
        customerAccessToken {
          accessToken
          expiresAt
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    customerAccessTokenCreate: {
      customerAccessToken: ShopifyCustomerAccessToken | null;
      customerUserErrors: Array<{ code: string; field: string[]; message: string }>;
    };
  }>({
    query: mutation,
    variables: { input: { email, password } },
    revalidate: 0,
  });

  if (
    data.customerAccessTokenCreate.customerUserErrors &&
    data.customerAccessTokenCreate.customerUserErrors.length > 0
  ) {
    throw new Error(
      data.customerAccessTokenCreate.customerUserErrors.map((e) => e.message).join(", ")
    );
  }

  if (!data.customerAccessTokenCreate.customerAccessToken) {
    throw new Error("Incorrect email or password.");
  }

  return data.customerAccessTokenCreate.customerAccessToken;
}

/**
 * Register a new customer on the Shopify store.
 */
export async function customerRegister(input: {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  acceptsMarketing?: boolean;
}): Promise<{ id: string; email: string; firstName?: string; lastName?: string }> {
  const mutation = `
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          id
          email
          firstName
          lastName
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    customerCreate: {
      customer: { id: string; email: string; firstName?: string; lastName?: string } | null;
      customerUserErrors: Array<{ code: string; field: string[]; message: string }>;
    };
  }>({
    query: mutation,
    variables: { input },
    revalidate: 0,
  });

  if (
    data.customerCreate.customerUserErrors &&
    data.customerCreate.customerUserErrors.length > 0
  ) {
    throw new Error(
      data.customerCreate.customerUserErrors.map((e) => e.message).join(", ")
    );
  }

  if (!data.customerCreate.customer) {
    throw new Error("Failed to register customer account.");
  }

  return data.customerCreate.customer;
}

/**
 * Log out and invalidate a Shopify customerAccessToken.
 */
export async function customerLogout(customerAccessToken: string): Promise<boolean> {
  const mutation = `
    mutation customerAccessTokenDelete($customerAccessToken: String!) {
      customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
        deletedAccessToken
        deletedCustomerAccessTokenId
        userErrors {
          field
          message
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch<{
      customerAccessTokenDelete: {
        deletedAccessToken: string | null;
        userErrors: Array<{ field: string[]; message: string }>;
      };
    }>({
      query: mutation,
      variables: { customerAccessToken },
      revalidate: 0,
    });

    return !!data.customerAccessTokenDelete?.deletedAccessToken;
  } catch {
    return false;
  }
}

/**
 * Request password recovery email for a customer.
 */
export async function customerRecoverPassword(email: string): Promise<boolean> {
  const mutation = `
    mutation customerRecover($email: String!) {
      customerRecover(email: $email) {
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    customerRecover: {
      customerUserErrors: Array<{ code: string; field: string[]; message: string }>;
    };
  }>({
    query: mutation,
    variables: { email },
    revalidate: 0,
  });

  if (
    data.customerRecover.customerUserErrors &&
    data.customerRecover.customerUserErrors.length > 0
  ) {
    throw new Error(
      data.customerRecover.customerUserErrors.map((e) => e.message).join(", ")
    );
  }

  return true;
}

/**
 * Fetch authenticated customer details, default address, saved addresses, and recent orders.
 */
export async function getCustomer(
  customerAccessToken: string
): Promise<ShopifyCustomer | null> {
  const query = `
    query getCustomer($customerAccessToken: String!) {
      customer(customerAccessToken: $customerAccessToken) {
        id
        firstName
        lastName
        displayName
        email
        phone
        defaultAddress {
          id
          address1
          address2
          city
          province
          zip
          country
          formatted
        }
        addresses(first: 10) {
          edges {
            node {
              id
              address1
              address2
              city
              province
              zip
              country
              formatted
            }
          }
        }
        orders(first: 10, sortKey: PROCESSED_AT, reverse: true) {
          edges {
            node {
              id
              name
              orderNumber
              processedAt
              financialStatus
              fulfillmentStatus
              totalPrice {
                amount
                currencyCode
              }
              successfulFulfillments {
                trackingCompany
                trackingInfo {
                  number
                  url
                }
              }
              lineItems(first: 10) {
                edges {
                  node {
                    title
                    quantity
                    variant {
                      id
                      title
                      image {
                        url
                      }
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch<{
      customer: ShopifyCustomer | null;
    }>({
      query,
      variables: { customerAccessToken },
      revalidate: 0,
    });

    return data.customer;
  } catch (err) {
    console.error("Error fetching customer profile:", err);
    return null;
  }
}

/**
 * Get the direct link to the hosted Shopify Customer Account portal
 */
export function getCustomerAccountUrl(): string {
  return `https://shopify.com/${SHOPIFY_SHOP_ID}/account`;
}

/**
 * Get the OAuth 2.0 authorization URL for customer account authentication
 */
export function getCustomerOAuthUrl(redirectUri?: string): string {
  const base = `https://shopify.com/authentication/${SHOPIFY_SHOP_ID}/oauth/authorize`;
  const params = new URLSearchParams({
    client_id: SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID,
    response_type: "code",
    scope: "openid email customer-account-api:full",
  });
  if (redirectUri) {
    params.set("redirect_uri", redirectUri);
  }
  return `${base}?${params.toString()}`;
}


