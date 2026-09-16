"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShopifyProduct } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import styles from "./FindPerfectWatch.module.css";

interface FindPerfectWatchProps {
  watches?: ShopifyProduct[];
  jewellery: ShopifyProduct[];
}

export default function FindPerfectWatch({ jewellery }: FindPerfectWatchProps) {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<"all" | "chains" | "bangles" | "rings">("all");

  // Strictly filter out any watches - SHOW ONLY JEWELLERY
  const pureJewellery = useMemo(() => {
    const watchKeywords = ["rolex", "iwc", "watch", "sea-dweller", "datejust", "daydate", "gmt", "prince"];
    return jewellery.filter((p) => {
      const lower = p.title.toLowerCase();
      return !watchKeywords.some((w) => lower.includes(w));
    });
  }, [jewellery]);

  // Tab filtering
  const itemsToDisplay = useMemo(() => {
    let list = pureJewellery;
    if (activeTab === "chains") {
      list = pureJewellery.filter((p) => {
        const t = p.title.toLowerCase();
        return (t.includes("chain") || t.includes("curb") || t.includes("belcher") || t.includes("franco") || t.includes("rope")) && !t.includes("bracelet");
      });
    } else if (activeTab === "bangles") {
      list = pureJewellery.filter((p) => {
        const t = p.title.toLowerCase();
        return t.includes("bangle") || t.includes("bracelet");
      });
    } else if (activeTab === "rings") {
      list = pureJewellery.filter((p) => {
        const t = p.title.toLowerCase();
        return t.includes("ring") || t.includes("earring") || t.includes("hoop");
      });
    }

    // Fallback if specific tab has few items
    return (list.length > 0 ? list : pureJewellery).slice(0, 4);
  }, [pureJewellery, activeTab]);

  return (
    <section className={styles.section} id="find-jewellery">
      <div className={styles.container}>
        {/* Top Header Row */}
        <div className={styles.topRow}>
          <div className={styles.titleGroup}>
            <span className={styles.sectionBadge}>Curated Fine Jewellery</span>
            <h2 className={styles.title}>Find Your Perfect Jewellery</h2>
            <div className={styles.tabs}>
              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === "all" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("all")}
              >
                All Jewellery
              </button>
              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === "chains" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("chains")}
              >
                Chains & Necklaces
              </button>
              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === "bangles" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("bangles")}
              >
                Bangles & Bracelets
              </button>
              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === "rings" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("rings")}
              >
                Rings & Earrings
              </button>
            </div>
          </div>

          <Link href="/collections/chains" className={styles.viewAllBtn}>
            View All Jewellery →
          </Link>
        </div>

        {/* 4 Light Luxury Cards Grid */}
        <div className={styles.grid}>
          {itemsToDisplay.map((product, idx) => {
            const badge = product.badge || (idx % 2 === 0 ? "Hallmarked 9ct" : "New Arrival");
            const price = parseFloat(product.priceRange.minVariantPrice.amount);
            const currency = product.priceRange.minVariantPrice.currencyCode;
            const imgUrl = product.featuredImage?.url || "/images/gold-chain-jewellery.jpg";

            const titleParts = product.title.split("-");
            const brand = titleParts.length > 1 ? titleParts[1]?.trim() : "Gold Bank Jewellers";
            const modelSpec = titleParts.length > 2 ? titleParts.slice(2).join(" - ").trim() : product.title;

            // Extract weight tag
            const weightMatch = product.title.match(/([0-9]+(\.[0-9]+)?)\s*g/i);
            const weightText = weightMatch ? `${weightMatch[0]} Solid Gold` : "Certified Hallmarked";

            return (
              <div key={product.id} className={styles.card}>
                {/* Badge */}
                <div className={styles.badgeWrapper}>
                  <span className={badge.includes("OFF") ? styles.discountBadge : styles.newBadge}>
                    {badge}
                  </span>
                </div>

                {/* Product Image */}
                <Link href={`/products/${product.handle}`} className={styles.imageWrapper}>
                  <Image
                    src={imgUrl}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={styles.image}
                  />
                </Link>

                {/* Product Details */}
                <div className={styles.details}>
                  <span className={styles.brandText}>{brand}</span>
                  <Link href={`/products/${product.handle}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <h3 className={styles.modelText} title={product.title}>
                      {modelSpec}
                    </h3>
                  </Link>
                  <span className={styles.specText}>{weightText}</span>
                  <span className={styles.priceText}>
                    {currency === "INR" ? `₹${price.toLocaleString()}` : `$${price.toLocaleString()}`}
                  </span>
                  <button
                    type="button"
                    className={styles.addBtn}
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
