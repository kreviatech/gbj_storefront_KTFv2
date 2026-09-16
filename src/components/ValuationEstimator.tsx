"use client";

import { useState } from "react";
import styles from "./ValuationEstimator.module.css";

interface PurityOption {
  label: string;
  factor: number; // base rate multiplier approx per gram in GBP
}

const purities: Record<string, PurityOption[]> = {
  gold: [
    { label: "9 Carat (37.5% Pure)", factor: 23.4 },
    { label: "14 Carat (58.5% Pure)", factor: 36.5 },
    { label: "18 Carat (75.0% Pure)", factor: 46.8 },
    { label: "22 Carat (91.6% Pure)", factor: 57.2 },
    { label: "24 Carat (99.9% Pure Bullion)", factor: 62.4 },
    { label: "Unsure / Mixed Karat", factor: 38.0 },
  ],
  silver: [
    { label: "925 Sterling Silver", factor: 0.69 },
    { label: "958 Britannia Silver", factor: 0.72 },
    { label: "999 Fine Silver Bullion", factor: 0.78 },
  ],
  platinum: [
    { label: "950 Platinum", factor: 24.5 },
    { label: "999 Fine Platinum", factor: 26.0 },
  ],
};

export default function ValuationEstimator() {
  const [metalType, setMetalType] = useState<"gold" | "silver" | "platinum">("gold");
  const [selectedPurityIndex, setSelectedPurityIndex] = useState<number>(2); // default 18k
  const [weightGrams, setWeightGrams] = useState<number>(25);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");

  const currentPurity = purities[metalType][selectedPurityIndex] || purities[metalType][0];
  const baseEstimate = currentPurity.factor * weightGrams;
  const lowEstimate = Math.round(baseEstimate * 0.98);
  const highEstimate = Math.round(baseEstimate * 1.05);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;
    setSubmitted(true);
  };

  return (
    <div className={styles.container} id="valuation-calculator">
      <div className={styles.header}>
        <div className="gold-badge">Interactive Valuation Tool</div>
        <h2 className={styles.title}>Estimate Your Jewellery Value</h2>
        <p className={styles.subtitle}>
          Get an instant, transparent valuation indicator. Every quote at Gold Bank Jewellers is 
          <strong> 100% free, competitive, and strictly no-obligation</strong>.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.calculatorSection}>
          {/* Metal Selector */}
          <div className={styles.formGroup}>
            <label className={styles.label}>1. Select Precious Metal</label>
            <div className={styles.metalTabs}>
              <button
                type="button"
                className={`${styles.metalTab} ${metalType === "gold" ? styles.activeTab : ""}`}
                onClick={() => {
                  setMetalType("gold");
                  setSelectedPurityIndex(2);
                }}
              >
                ✨ Gold
              </button>
              <button
                type="button"
                className={`${styles.metalTab} ${metalType === "silver" ? styles.activeTab : ""}`}
                onClick={() => {
                  setMetalType("silver");
                  setSelectedPurityIndex(0);
                }}
              >
                🥈 Silver
              </button>
              <button
                type="button"
                className={`${styles.metalTab} ${metalType === "platinum" ? styles.activeTab : ""}`}
                onClick={() => {
                  setMetalType("platinum");
                  setSelectedPurityIndex(0);
                }}
              >
                💎 Platinum
              </button>
            </div>
          </div>

          {/* Purity Selector */}
          <div className={styles.formGroup}>
            <label className={styles.label}>2. Purity / Karat</label>
            <select
              className={styles.selectInput}
              value={selectedPurityIndex}
              onChange={(e) => setSelectedPurityIndex(Number(e.target.value))}
            >
              {purities[metalType].map((item, index) => (
                <option key={index} value={index}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Weight Input */}
          <div className={styles.formGroup}>
            <div className={styles.weightLabelRow}>
              <label className={styles.label}>3. Estimated Weight (Grams)</label>
              <span className={styles.weightValueBadge}>{weightGrams}g</span>
            </div>
            <input
              type="range"
              min={1}
              max={250}
              step={0.5}
              value={weightGrams}
              onChange={(e) => setWeightGrams(Number(e.target.value))}
              className={styles.sliderInput}
            />
            <div className={styles.sliderHints}>
              <span>1g</span>
              <span>50g</span>
              <span>100g</span>
              <span>200g</span>
              <span>250g+</span>
            </div>
          </div>
        </div>

        {/* Output & Appointment Box */}
        <div className={styles.resultSection}>
          <div className={styles.estimateBox}>
            <span className={styles.estimateLabel}>Estimated Payout Range</span>
            <div className={styles.estimateAmount}>
              £{lowEstimate.toLocaleString()} - £{highEstimate.toLocaleString()}
            </div>
            <span className={styles.estimateNote}>
              Based on {weightGrams}g of {currentPurity.label} • Benchmarked to UK Spot
            </span>
          </div>

          {submitted ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>✓</div>
              <h4 className={styles.successTitle}>Valuation Request Received!</h4>
              <p className={styles.successText}>
                Thank you, <strong>{customerName}</strong>. A specialist appraiser from Gold Bank Jewellers 
                will reach out via <strong>{customerPhone}</strong> with your formal quote.
              </p>
              <div className={styles.refBadge}>Reference: GBJ-{Math.floor(100000 + Math.random() * 900000)}</div>
              <button
                type="button"
                className={styles.resetButton}
                onClick={() => {
                  setSubmitted(false);
                  setCustomerName("");
                  setCustomerPhone("");
                }}
              >
                Calculate Another Item
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitInquiry} className={styles.inquiryForm}>
              <h4 className={styles.formTitle}>Lock In Your No-Obligation Quote</h4>
              <p className={styles.formSubtitle}>
                Bring your jewellery to our East Midlands showroom or request a private consultation.
              </p>

              <div className={styles.inputStack}>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className={styles.textInput}
                />
                <input
                  type="tel"
                  placeholder="Phone Number / WhatsApp"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className={styles.textInput}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Claim Free Valuation Quote</span>
                <span className={styles.btnSubtext}>Zero Pressure • Confidential</span>
              </button>
            </form>
          )}

          <div className={styles.trustFooter}>
            <div className={styles.trustPill}>🛡️ Trading Standards Approved Scales</div>
            <div className={styles.trustPill}>🤝 Non-Destructive XRF Testing</div>
            <div className={styles.trustPill}>⚡ Same-Day Cash or Bank Transfer</div>
          </div>
        </div>
      </div>
    </div>
  );
}
