"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShopifyProduct } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import styles from "./product.module.css";

interface ProductDetailClientProps {
  product: ShopifyProduct;
  relatedProducts: ShopifyProduct[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const { addToCart } = useCart();
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "specifications" | "authenticity">("description");

  const images = product.images && product.images.length > 0
    ? product.images
    : product.featuredImage
    ? [product.featuredImage]
    : [{ url: "/images/hero-watch-dial.jpg", altText: product.title }];

  const currentImage = images[selectedImgIndex] || images[0];

  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const currency = product.priceRange.minVariantPrice.currencyCode;

  // Auto-extract specs from title and description
  const extractSpecs = () => {
    const text = `${product.title} ${product.description || ""}`;
    const specs: Array<{ label: string; value: string }> = [];

    // Metal / Karat
    if (text.includes("18ct") || text.includes("18CT") || text.includes("18k")) {
      specs.push({ label: "Metal", value: "18ct Gold" });
    } else if (text.includes("9ct") || text.includes("9CT") || text.includes("9k")) {
      specs.push({ label: "Metal", value: "9ct Solid Gold" });
    } else if (text.includes("Silver") || text.includes("925")) {
      specs.push({ label: "Metal", value: "Sterling Silver (925)" });
    } else if (text.includes("Steel")) {
      specs.push({ label: "Metal", value: "Surgical Stainless Steel" });
    }

    // Weight
    const weightMatch = text.match(/([0-9]+(\.[0-9]+)?)\s*g/i);
    if (weightMatch) {
      specs.push({ label: "Weight", value: `${weightMatch[1]} grams` });
    }

    // Length or Size
    const sizeMatch = text.match(/(Size\s+[A-Z0-9.\/]+|\d+(\.\d+)?")/i);
    if (sizeMatch) {
      specs.push({ label: "Size / Length", value: sizeMatch[0] });
    }

    // Box & Papers
    if (text.toLowerCase().includes("box and papers") || text.toLowerCase().includes("box & papers")) {
      specs.push({ label: "Inclusions", value: "Original Box & Papers" });
    } else {
      specs.push({ label: "Inclusions", value: "Gold Bank Certificate of Authenticity" });
    }

    // Condition
    if (text.toLowerCase().includes("pre owned") || text.toLowerCase().includes("pre-owned")) {
      specs.push({ label: "Condition", value: "Pre-Owned – Authenticated & Polished" });
    } else {
      specs.push({ label: "Condition", value: "Pristine / Brand New" });
    }

    return specs;
  };

  const specs = extractSpecs();

  const handleAdd = () => {
    const variantId = product.variants?.[0]?.id;
    for (let i = 0; i < quantity; i++) {
      addToCart(product, variantId);
    }
  };

  return (
    <div className={styles.pageContainer}>
      {/* Breadcrumb Navigation */}
      <div className={styles.breadcrumbs}>
        <Link href="/" className={styles.crumbLink}>
          Home
        </Link>
        <span className={styles.crumbSep}>/</span>
        <Link href="/#new-arrivals" className={styles.crumbLink}>
          Collection
        </Link>
        <span className={styles.crumbSep}>/</span>
        <span className={styles.crumbCurrent}>{product.title}</span>
      </div>

      {/* Main PDP Grid */}
      <div className={styles.mainGrid}>
        {/* Left Column: Image Gallery */}
        <div className={styles.galleryCol}>
          <div className={styles.mainImageWrapper}>
            <Image
              src={currentImage.url}
              alt={currentImage.altText || product.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.mainImage}
            />
            <div className={styles.zoomNotice}>🔍 Hover to inspect hallmarks</div>
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className={styles.thumbnailStrip}>
              {images.map((img, idx) => (
                <button
                  key={idx}
                  className={`${styles.thumbBtn} ${
                    idx === selectedImgIndex ? styles.activeThumb : ""
                  }`}
                  onClick={() => setSelectedImgIndex(idx)}
                >
                  <Image
                    src={img.url}
                    alt={img.altText || `View ${idx + 1}`}
                    width={70}
                    height={70}
                    className={styles.thumbImage}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Trust Guarantees Box */}
          <div className={styles.guaranteeBox}>
            <div className={styles.guaranteeItem}>
              <span className={styles.gIcon}>🛡️</span>
              <div>
                <strong>100% Certified Authentic</strong>
                <span>Assayed & tested with non-destructive XRF</span>
              </div>
            </div>
            <div className={styles.guaranteeItem}>
              <span className={styles.gIcon}>📦</span>
              <div>
                <strong>Insured Next-Day Dispatch</strong>
                <span>Direct discreet delivery across UK & Worldwide</span>
              </div>
            </div>
            <div className={styles.guaranteeItem}>
              <span className={styles.gIcon}>🏛️</span>
              <div>
                <strong>East Midlands Showroom</strong>
                <span>Private viewing available by appointment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Product Info & Purchase Form */}
        <div className={styles.infoCol}>
          <div className={styles.vendorBadge}>
            {product.vendor || "Gold Bank Jewellers"}
          </div>

          <h1 className={styles.productTitle}>{product.title}</h1>

          {/* Stock Indicator */}
          <div className={styles.stockStatus}>
            <span className={styles.statusDot}></span>
            <span>
              {product.totalInventory !== undefined && product.totalInventory > 0
                ? `In Stock (${product.totalInventory} Available) • Insured UK Dispatch`
                : product.totalInventory === 0
                ? "Limited Vault Allocation • Inquire for Immediate Sourcing"
                : "Available for Immediate Dispatch • Insured Delivery"}
            </span>
          </div>

          {/* Price */}
          <div className={styles.priceContainer}>
            <span className={styles.priceAmount}>
              {currency === "INR" ? `₹${price.toLocaleString()}` : `$${price.toLocaleString()}`}
            </span>
            <span className={styles.vatNotice}>Includes UK VAT & Insurance</span>
          </div>

          {/* Key Specifications Grid */}
          <div className={styles.specsCard}>
            <h3 className={styles.specsHeading}>Item Specifications</h3>
            <div className={styles.specsGrid}>
              {specs.map((item, idx) => (
                <div key={idx} className={styles.specRow}>
                  <span className={styles.specLabel}>{item.label}:</span>
                  <span className={styles.specValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Purchase Actions */}
          <div className={styles.purchaseBox}>
            <div className={styles.quantityRow}>
              <label className={styles.qtyLabel}>Quantity:</label>
              <div className={styles.qtySelector}>
                <button
                  type="button"
                  className={styles.qtyBtn}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className={styles.qtyNumber}>{quantity}</span>
                <button
                  type="button"
                  className={styles.qtyBtn}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className={styles.actionButtons}>
              <button
                type="button"
                className={styles.addToBagBtn}
                onClick={handleAdd}
              >
                <span>Add to Shopping Bag</span>
                <span className={styles.btnPrice}>
                  • {currency === "INR" ? `₹${(price * quantity).toLocaleString()}` : `$${(price * quantity).toLocaleString()}`}
                </span>
              </button>

              <a
                href="#showroom-visit"
                className={styles.appointmentBtn}
              >
                Book Showroom Viewing (East Midlands)
              </a>
            </div>
          </div>

          {/* Detailed Tabs: Description, Specs, Authenticity */}
          <div className={styles.tabsSection}>
            <div className={styles.tabHeaders}>
              <button
                className={`${styles.tabHeaderBtn} ${
                  activeTab === "description" ? styles.activeTabHeader : ""
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`${styles.tabHeaderBtn} ${
                  activeTab === "specifications" ? styles.activeTabHeader : ""
                }`}
                onClick={() => setActiveTab("specifications")}
              >
                Full Details
              </button>
              <button
                className={`${styles.tabHeaderBtn} ${
                  activeTab === "authenticity" ? styles.activeTabHeader : ""
                }`}
                onClick={() => setActiveTab("authenticity")}
              >
                Our Guarantee
              </button>
            </div>

            <div className={styles.tabBody}>
              {activeTab === "description" && (
                <div className={styles.descriptionContent}>
                  {product.descriptionHtml ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                      className={styles.shopifyHtml}
                    />
                  ) : (
                    <p>{product.description || "Authentic luxury item inspected and certified by Gold Bank Jewellers."}</p>
                  )}
                </div>
              )}

              {activeTab === "specifications" && (
                <div className={styles.tabSpecsList}>
                  <p className={styles.tabIntro}>
                    Every piece in our collection undergoes stringent assessment by senior horologists and gemmologists.
                  </p>
                  <ul className={styles.bullets}>
                    <li><strong>Product ID:</strong> {product.id}</li>
                    <li><strong>Handle:</strong> {product.handle}</li>
                    <li><strong>Category:</strong> {product.productType || "Fine Jewellery & Timepieces"}</li>
                    <li><strong>Origin:</strong> Certified UK Assay Office & Swiss Calibre Standards</li>
                  </ul>
                </div>
              )}

              {activeTab === "authenticity" && (
                <div className={styles.authenticityText}>
                  <p>
                    Established in 2016, <strong>Gold Bank Jewellers</strong> is the East Midlands' 
                    premier gold, silver, and luxury watch specialist. Every timepiece and gold jewel is 
                    rigorously authenticated with non-destructive XRF testing and ultrasonic cleaning.
                  </p>
                  <p style={{ marginTop: "10px" }}>
                    Enjoy a 14-day inspection guarantee with fully insured returns.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Showroom Viewing Banner */}
      <div className={styles.showroomBanner} id="showroom-visit">
        <div className={styles.bannerInner}>
          <div>
            <h3 className={styles.showroomTitle}>Prefer to inspect this piece in person?</h3>
            <p className={styles.showroomDesc}>
              Visit our secure East Midlands showroom. Enjoy a welcoming, professional consultation 
              with zero pressure. Walk-ins welcome or book a private appointment.
            </p>
          </div>
          <a href="tel:08001234567" className={styles.callValuerBtn}>
            📞 Call Our Valuers: 0800 123 4567
          </a>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.relatedHeader}>
            <h2 className={styles.relatedTitle}>You May Also Like</h2>
            <Link href="/#new-arrivals" className={styles.viewAllLink}>
              View Full Collection →
            </Link>
          </div>

          <div className={styles.relatedGrid}>
            {relatedProducts.map((item) => {
              const relPrice = parseFloat(item.priceRange.minVariantPrice.amount);
              const relCurrency = item.priceRange.minVariantPrice.currencyCode;
              const relImg = item.featuredImage?.url || "/images/hero-watch-dial.jpg";

              return (
                <Link
                  key={item.id}
                  href={`/products/${item.handle}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relImgWrapper}>
                    <Image
                      src={relImg}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className={styles.relImg}
                    />
                  </div>
                  <div className={styles.relInfo}>
                    <h4 className={styles.relTitle}>{item.title}</h4>
                    <p className={styles.relPrice}>
                      {relCurrency === "INR" ? `₹${relPrice.toLocaleString()}` : `$${relPrice.toLocaleString()}`}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
