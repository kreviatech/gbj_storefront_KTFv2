"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShopifyCollection, ShopifyProduct } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import styles from "./collection.module.css";

interface CollectionClientProps {
  collection: ShopifyCollection;
}

export default function CollectionClient({ collection }: CollectionClientProps) {
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "title-asc">("featured");
  const [metalFilter, setMetalFilter] = useState<string>("all");

  // Filter products by metal if requested
  const filteredProducts = useMemo(() => {
    if (metalFilter === "all") return collection.products;

    return collection.products.filter((p) => {
      const text = `${p.title} ${p.description || ""}`.toLowerCase();
      if (metalFilter === "9ct") return text.includes("9ct") || text.includes("9k");
      if (metalFilter === "18ct") return text.includes("18ct") || text.includes("18k");
      if (metalFilter === "silver") return text.includes("silver") || text.includes("925");
      if (metalFilter === "watch") return text.includes("rolex") || text.includes("iwc") || text.includes("watch");
      return true;
    });
  }, [collection.products, metalFilter]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === "price-asc") {
      return list.sort(
        (a, b) =>
          parseFloat(a.priceRange.minVariantPrice.amount) -
          parseFloat(b.priceRange.minVariantPrice.amount)
      );
    }
    if (sortBy === "price-desc") {
      return list.sort(
        (a, b) =>
          parseFloat(b.priceRange.minVariantPrice.amount) -
          parseFloat(a.priceRange.minVariantPrice.amount)
      );
    }
    if (sortBy === "title-asc") {
      return list.sort((a, b) => a.title.localeCompare(b.title));
    }
    return list;
  }, [filteredProducts, sortBy]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContent}>
        {/* Breadcrumb Bar */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/" className={styles.crumbLink}>
            Home
          </Link>
          <span className={styles.crumbSep}>/</span>
          <span className={styles.crumbSep}>Collections</span>
          <span className={styles.crumbSep}>/</span>
          <span className={styles.crumbCurrent}>{collection.title}</span>
        </nav>

        {/* Collection Hero Banner */}
        <section className={styles.collectionHero}>
          <span className={styles.heroTag}>Gold Bank Curated Vault</span>
          <h1 className={styles.collectionTitle}>{collection.title}</h1>
          <p className={styles.collectionDesc}>
            {collection.description ||
              "Explore authenticated fine jewellery and Swiss luxury timepieces certified by Gold Bank Jewellers in the East Midlands."}
          </p>
          <div className={styles.collectionStats}>
            <span className={styles.statPill}>
              {sortedProducts.length} {sortedProducts.length === 1 ? "Piece Available" : "Pieces Available"}
            </span>
            <span>• Assayed & XRF Tested • Immediate Insured Dispatch</span>
          </div>
        </section>

        {/* Controls Toolbar: Filters & Sorting */}
        <div className={styles.controlBar}>
          <div className={styles.filterGroup}>
            <button
              className={`${styles.filterBtn} ${metalFilter === "all" ? styles.activeFilterBtn : ""}`}
              onClick={() => setMetalFilter("all")}
            >
              All Items ({collection.products.length})
            </button>
            <button
              className={`${styles.filterBtn} ${metalFilter === "9ct" ? styles.activeFilterBtn : ""}`}
              onClick={() => setMetalFilter("9ct")}
            >
              9ct Solid Gold
            </button>
            <button
              className={`${styles.filterBtn} ${metalFilter === "18ct" ? styles.activeFilterBtn : ""}`}
              onClick={() => setMetalFilter("18ct")}
            >
              18ct Gold
            </button>
            <button
              className={`${styles.filterBtn} ${metalFilter === "silver" ? styles.activeFilterBtn : ""}`}
              onClick={() => setMetalFilter("silver")}
            >
              Sterling Silver
            </button>
            <button
              className={`${styles.filterBtn} ${metalFilter === "watch" ? styles.activeFilterBtn : ""}`}
              onClick={() => setMetalFilter("watch")}
            >
              Watches
            </button>
          </div>

          <div className={styles.sortGroup}>
            <label htmlFor="sort-select" className={styles.sortLabel}>
              Sort By:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className={styles.sortSelect}
            >
              <option value="featured">Featured / Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title-asc">Alphabetical (A - Z)</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        {sortedProducts.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🔍</div>
            <h3 className={styles.emptyHeading}>No items found in this filter</h3>
            <p className={styles.emptyText}>
              Try selecting "All Items" or explore another category from our menu above.
            </p>
            <button
              className={styles.emptyCta}
              onClick={() => setMetalFilter("all")}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className={styles.productGrid}>
            {sortedProducts.map((product) => {
              const price = parseFloat(product.priceRange.minVariantPrice.amount);
              const currency = product.priceRange.minVariantPrice.currencyCode;
              const imgUrl =
                product.featuredImage?.url ||
                (product.title.toLowerCase().includes("watch") || product.title.toLowerCase().includes("rolex")
                  ? "/images/hero-watch-dial.jpg"
                  : "/images/gold-chain-jewellery.jpg");

              // Extract hallmark / weight tag
              const weightMatch = product.title.match(/([0-9]+(\.[0-9]+)?)\s*g/i);
              const specTag = weightMatch ? `${weightMatch[0]}` : product.badge || "Certified Authentic";

              return (
                <div key={product.id} className={styles.productCard}>
                  {/* Badge */}
                  <span className={styles.badgeTag}>{specTag}</span>

                  {/* Image */}
                  <Link href={`/products/${product.handle}`} className={styles.imgWrapper}>
                    <Image
                      src={imgUrl}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.productImage}
                    />
                  </Link>

                  {/* Body Info */}
                  <div className={styles.cardBody}>
                    <Link href={`/products/${product.handle}`} className={styles.productTitleLink}>
                      <h3 className={styles.productTitle}>{product.title}</h3>
                    </Link>

                    <div className={styles.productMeta}>
                      <span>{product.vendor || "Gold Bank Jewellers"}</span>
                      <span className={styles.metaDot}>•</span>
                      <span>Assayed & Inspected</span>
                    </div>

                    <div className={styles.priceRow}>
                      <span className={styles.priceAmount}>
                        {currency === "INR" ? `₹${price.toLocaleString()}` : `$${price.toLocaleString()}`}
                      </span>
                      <span className={styles.vatTag}>Inc. UK VAT</span>
                    </div>

                    <div className={styles.cardActions}>
                      <Link
                        href={`/products/${product.handle}`}
                        className={styles.viewBtn}
                      >
                        Inspect Piece
                      </Link>
                      <button
                        type="button"
                        className={styles.addBtn}
                        onClick={() => addToCart(product)}
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Trust Guarantee Banner */}
        <section className={styles.trustBanner}>
          <div className={styles.trustCol}>
            <span className={styles.trustIcon}>🛡️</span>
            <div>
              <strong>100% Certified Authentic</strong>
              <p>Every gold jewel and luxury timepiece is tested with non-destructive XRF assaying.</p>
            </div>
          </div>
          <div className={styles.trustCol}>
            <span className={styles.trustIcon}>📦</span>
            <div>
              <strong>Discreet Insured Next-Day UK Delivery</strong>
              <p>Tracked and fully covered to your doorstep via Royal Mail Special Delivery.</p>
            </div>
          </div>
          <div className={styles.trustCol}>
            <span className={styles.trustIcon}>🏛️</span>
            <div>
              <strong>East Midlands Private Showroom</strong>
              <p>Visit us for private viewings or immediate valuations with no obligation.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
