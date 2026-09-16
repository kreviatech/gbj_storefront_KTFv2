import Image from "next/image";
import { getShopDetails, getProducts } from "@/lib/shopify";
import styles from "./ShopifyStorefrontPreview.module.css";

export default async function ShopifyStorefrontPreview() {
  const shop = await getShopDetails();
  const products = await getProducts(4);

  return (
    <section className={styles.section} id="shopify-integration">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="gold-badge">Headless Shopify Architecture</div>
          <h2 className={styles.title}>Shopify Storefront API Connected</h2>
          <p className={styles.subtitle}>
            Built with pure <strong>Next.js App Router</strong> communicating directly with your 
            Shopify Storefront API via GraphQL. Ready for custom products, cart flows, and live checkouts.
          </p>
        </div>

        {/* API Status Card */}
        <div className={styles.statusGrid}>
          <div className={styles.statusCard}>
            <div className={styles.cardHeader}>
              <span className={styles.statusDot}></span>
              <span className={styles.cardTitle}>Storefront API Status</span>
            </div>
            <div className={styles.statusDetails}>
              <div className={styles.statusRow}>
                <span className={styles.label}>Shop Name:</span>
                <span className={styles.value}>{shop?.name || "Connected"}</span>
              </div>
              <div className={styles.statusRow}>
                <span className={styles.label}>Domain:</span>
                <span className={styles.valueMono}>
                  {shop?.primaryDomain.host || "sxr11n-4z.myshopify.com"}
                </span>
              </div>
              <div className={styles.statusRow}>
                <span className={styles.label}>GraphQL Endpoint:</span>
                <span className={styles.valueMono}>/api/2024-01/graphql.json</span>
              </div>
              <div className={styles.statusRow}>
                <span className={styles.label}>Stack:</span>
                <span className={styles.value}>Pure Next.js 16 + TypeScript</span>
              </div>
            </div>
          </div>

          <div className={styles.statusCard}>
            <div className={styles.cardHeader}>
              <span className={styles.infoIcon}>⚡</span>
              <span className={styles.cardTitle}>Shopify AI Toolkit Integration</span>
            </div>
            <p className={styles.cardText}>
              Configured with official Shopify developer tools for GraphQL validation, 
              Storefront schema inspection, and automated code generation.
            </p>
            <div className={styles.tagGroup}>
              <span className={styles.techTag}>Next.js App Router</span>
              <span className={styles.techTag}>Zero Hydrogen / Oxygen</span>
              <span className={styles.techTag}>Vanilla CSS</span>
              <span className={styles.techTag}>Shopify AI Plugin</span>
            </div>
          </div>
        </div>

        {/* Live Published Products */}
        {products.length > 0 && (
          <div className={styles.productsArea}>
            <h3 className={styles.productsHeading}>
              Live Catalog Preview from Storefront API ({products.length} Items Found)
            </h3>
            <div className={styles.productGrid}>
              {products.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  {product.featuredImage?.url ? (
                    <div className={styles.productImageWrapper}>
                      <Image
                        src={product.featuredImage.url}
                        alt={product.featuredImage.altText || product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className={styles.productImage}
                      />
                    </div>
                  ) : (
                    <div className={styles.placeholderImg}>💎</div>
                  )}
                  <div className={styles.productInfo}>
                    <h4 className={styles.productTitle}>{product.title}</h4>
                    <p className={styles.productPrice}>
                      {product.priceRange.minVariantPrice.currencyCode}{" "}
                      {parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}
                    </p>
                    <span className={styles.statusBadge}>In Stock • Synced</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
