export interface ShopifyPrice {
  amount: string;
  currencyCode: string;
}

export interface ShopifyImage {
  url: string;
  altText: string | null;
  width?: number;
  height?: number;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: ShopifyPrice;
  image?: ShopifyImage | null;
  selectedOptions?: Array<{
    name: string;
    value: string;
  }>;
}

export interface ShopifyOption {
  name: string;
  values: string[];
}

export interface ShopifyProduct {
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
  options?: ShopifyOption[];
  priceRange: {
    minVariantPrice: ShopifyPrice;
    maxVariantPrice?: ShopifyPrice;
  };
  featuredImage?: ShopifyImage | null;
  images?: ShopifyImage[];
  variants?: ShopifyVariant[];
  badge?: string; // e.g. "50% OFF", "New Arrival"
  subtitle?: string;
}

export interface ShopifyShopInfo {
  name: string;
  description?: string | null;
  primaryDomain: {
    url: string;
    host: string;
  };
  moneyFormat: string;
}

export interface ShopifyGraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}

export interface CartItem {
  product: ShopifyProduct;
  quantity: number;
  variantId?: string;
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml?: string;
  image?: ShopifyImage | null;
  products: ShopifyProduct[];
}
