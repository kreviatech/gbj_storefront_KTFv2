"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./account.module.css";

interface AccountClientProps {
  accountUrl: string;
  oauthUrl: string;
  shopName: string;
}

export default function AccountClient({
  accountUrl,
  oauthUrl,
  shopName,
}: AccountClientProps) {
  const [orderQuery, setOrderQuery] = useState("");
  const [emailQuery, setEmailQuery] = useState("");
  const [lookupMessage, setLookupMessage] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleOrderLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim() && !emailQuery.trim()) {
      setLookupMessage("Please enter an Order Number or Email address to look up your dispatch.");
      return;
    }

    setIsSearching(true);
    setLookupMessage(null);

    // Simulate instant lookup with redirect option to Shopify Customer Portal
    setTimeout(() => {
      setIsSearching(false);
      setLookupMessage(
        `Order details for "${orderQuery.trim() || emailQuery.trim()}" are managed through our encrypted Shopify Customer Account API. Click 'Sign In with Shop Pay' above to view full tracking and invoice details.`
      );
    }, 600);
  };

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span>Customer Account</span>
      </nav>

      {/* Header */}
      <div className={styles.heroHeader}>
        <span className={styles.badge}>Gold Bank Vault Access</span>
        <h1 className={styles.title}>Customer Account & Orders</h1>
        <p className={styles.subtitle}>
          Securely manage your certified jewellery acquisitions, track insured UK courier shipments, and access your Gold Bank Vault privileges.
        </p>
      </div>

      {/* Main Grid: Auth Card + Order Tracking */}
      <div className={styles.gridContainer}>
        {/* Card 1: Official Shopify Customer Account Portal */}
        <div className={`${styles.card} ${styles.cardFeatured}`}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>
              <span>🔐</span> Sign In to Your Account
            </h2>
            <p className={styles.cardSubtitle}>
              Passwordless, one-time code authentication powered by Shopify Customer Account API and Shop Pay.
            </p>
          </div>

          <a
            href={accountUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryAuthBtn}
          >
            <span>Sign In with Shop Pay / Customer Account</span>
            <span>→</span>
          </a>

          <a
            href={oauthUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryAuthBtn}
          >
            Continue with Direct Email One-Time Code
          </a>

          <div className={styles.securityNote}>
            <span>🛡️</span>
            <div>
              <strong>Bank-Grade Security:</strong> All customer records, order histories, and payment tokens are encrypted directly by Shopify with multi-factor biometric authentication.
            </div>
          </div>
        </div>

        {/* Card 2: Quick Dispatch & Order Lookup */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>
              <span>📦</span> Track Your Dispatch
            </h2>
            <p className={styles.cardSubtitle}>
              Enter your Gold Bank order confirmation number or email address to review your shipment status.
            </p>
          </div>

          <form onSubmit={handleOrderLookup}>
            <div className={styles.formGroup}>
              <label htmlFor="orderNum" className={styles.label}>
                Order Reference Number
              </label>
              <input
                id="orderNum"
                type="text"
                placeholder="e.g. GBJ-10482 or #1001"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="emailAddress" className={styles.label}>
                Account Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                placeholder="e.g. customer@example.co.uk"
                value={emailQuery}
                onChange={(e) => setEmailQuery(e.target.value)}
                className={styles.input}
              />
            </div>

            <button
              type="submit"
              className={styles.lookupBtn}
              disabled={isSearching}
            >
              {isSearching ? "Searching Records..." : "Lookup Shipment Status"}
            </button>
          </form>

          {lookupMessage && (
            <div className={styles.lookupResult}>
              <p style={{ margin: 0 }}>{lookupMessage}</p>
            </div>
          )}
        </div>
      </div>

      {/* Perks Grid */}
      <div className={styles.perksGrid}>
        <div className={styles.perkCard}>
          <h3 className={styles.perkTitle}>Insured Next-Day Dispatch</h3>
          <p className={styles.perkText}>
            Every piece is shipped via Royal Mail Special Delivery or armoured courier with comprehensive transit insurance.
          </p>
        </div>

        <div className={styles.perkCard}>
          <h3 className={styles.perkTitle}>Assayed Authenticity</h3>
          <p className={styles.perkText}>
            All solid 9ct and 18ct jewellery is hallmarked in Birmingham, London, or Sheffield with XRF spectroscopy verification.
          </p>
        </div>

        <div className={styles.perkCard}>
          <h3 className={styles.perkTitle}>Guaranteed Buy-Back</h3>
          <p className={styles.perkText}>
            Vault members receive preferential rates when looking to upgrade, trade in, or sell luxury watches and scrap gold.
          </p>
        </div>
      </div>

      {/* Concierge & Showroom */}
      <div className={styles.showroomCard}>
        <h3 className={styles.showroomTitle}>Need Personal Concierge Assistance?</h3>
        <p className={styles.showroomText}>
          Our East Midlands showroom specialists are available Monday to Saturday for private viewings, custom sizing, and valuation appointments.
        </p>
        <div className={styles.showroomActions}>
          <a href="tel:08001234567" className={styles.callShowroomBtn}>
            Speak to a Specialist: 0800 123 4567
          </a>
          <Link href="/looking-to-sell" className={styles.sellShowroomBtn}>
            Sell or Trade In Jewellery
          </Link>
        </div>
      </div>
    </div>
  );
}
