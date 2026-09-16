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

export interface ShopifyAddress {
  id?: string;
  address1?: string;
  address2?: string;
  city?: string;
  province?: string;
  zip?: string;
  country?: string;
  formatted?: string[];
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export interface ShopifyOrderLineItem {
  title: string;
  quantity: number;
  variant?: {
    id: string;
    title: string;
    image?: ShopifyImage | null;
    price: ShopifyPrice;
  } | null;
}

export interface ShopifyOrder {
  id: string;
  name: string;
  orderNumber: number;
  processedAt: string;
  financialStatus?: string;
  fulfillmentStatus?: string;
  totalPrice: ShopifyPrice;
  successfulFulfillments?: Array<{
    trackingCompany?: string;
    trackingInfo?: Array<{
      number?: string;
      url?: string;
    }>;
  }>;
  lineItems: {
    edges: Array<{
      node: ShopifyOrderLineItem;
    }>;
  };
}

export interface ShopifyCustomer {
  id: string;
  firstName?: string;
  lastName?: string;
  displayName: string;
  email: string;
  phone?: string | null;
  defaultAddress?: ShopifyAddress | null;
  addresses?: {
    edges: Array<{
      node: ShopifyAddress;
    }>;
  };
  orders?: {
    edges: Array<{
      node: ShopifyOrder;
    }>;
  };
}

export interface ShopifyCustomerAccessToken {
  accessToken: string;
  expiresAt: string;
}

export interface CartBuyerIdentityInput {
  customerAccessToken?: string;
  email?: string;
  phone?: string;
  countryCode?: string;
  companyLocationId?: string;
}

export interface CartBuyerIdentity {
  email?: string | null;
  phone?: string | null;
  countryCode?: string | null;
  customer?: {
    id: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
  } | null;
}

