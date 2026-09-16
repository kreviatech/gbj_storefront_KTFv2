"use client";

import Image from "next/image";
import Link from "next/link";
import { ShopifyProduct } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import styles from "./NewArrivals.module.css";

interface NewArrivalsProps {
  products: ShopifyProduct[];
}

export default function NewArrivals({ products }: NewArrivalsProps) {
  const { addToCart } = useCart();

  // Take first 3 products for the New Arrival showcase
  const displayItems = products.slice(0, 3);

  return (
    <section className={styles.section} id="new-arrivals">
      <div className={styles.container}>
        <h2 className={styles.heading}>New Arrival</h2>

        <div className={styles.grid}>
          {displayItems.map((product, idx) => {
            const badgeText = product.badge || (idx === 1 ? "New Arrival" : "50% OFF");
            const price = parseFloat(product.priceRange.minVariantPrice.amount);
            const currency = product.priceRange.minVariantPrice.currencyCode;
            const imgUrl = product.featuredImage?.url || "/images/hero-watch-dial.jpg";

            // Title format matching reference: Brand/Model in uppercase, subtitle below
            const titleParts = product.title.split("-");
            const mainTitle = titleParts.length > 1 ? titleParts[1]?.trim() : product.title;
            const subTitle = titleParts.length > 2 ? titleParts.slice(2).join(" - ").trim() : "Swiss Automatic Precision";

            return (
              <div key={product.id} className={styles.card}>
                {/* Badge */}
                <div className={styles.badgeContainer}>
                  <span
                    className={`${styles.badge} ${
                      badgeText.includes("OFF") ? styles.discountBadge : styles.newBadge
                    }`}
                  >
                    {badgeText}
                  </span>
                </div>

                {/* Product Image */}
                <Link href={`/products/${product.handle}`} className={styles.imageWrapper}>
                  <Image
                    src={imgUrl}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                  />
                </Link>

                {/* Info */}
                <div className={styles.info}>
                  <Link href={`/products/${product.handle}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <span className={styles.brandTitle}>{mainTitle}</span>
                    <p className={styles.subTitle}>{subTitle}</p>
                  </Link>
                  <span className={styles.price}>
                    {currency === "INR" ? `₹${price.toLocaleString()}` : `$${price.toLocaleString()}`}
                  </span>
                  <button
                    className={styles.quickAddBtn}
                    onClick={() => addToCart(product)}
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
