"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./looking-to-sell.module.css";

interface PurityOption {
  key: string;
  name: string;
  ratePerGram: number; // approximate UK cash payout rate per gram in GBP
}

const PURITIES: PurityOption[] = [
  { key: "9ct", name: "9ct Gold (375)", ratePerGram: 26.5 },
  { key: "14ct", name: "14ct Gold (585)", ratePerGram: 41.2 },
  { key: "18ct", name: "18ct Gold (750)", ratePerGram: 53.0 },
  { key: "22ct", name: "22ct Gold (916)", ratePerGram: 64.8 },
  { key: "24ct", name: "24ct Pure (999)", ratePerGram: 70.5 },
  { key: "925", name: "925 Sterling Silver", ratePerGram: 0.68 },
];

export default function LookingToSellClient() {
  const [selectedPurity, setSelectedPurity] = useState<PurityOption>(PURITIES[0]);
  const [weight, setWeight] = useState<number>(25);
  const [submitted, setSubmitted] = useState(false);

  const estimatedValue = Math.round(weight * selectedPurity.ratePerGram);
  const lowEstimate = Math.round(estimatedValue * 0.96);
  const highEstimate = Math.round(estimatedValue * 1.04);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.pageContainer}>
      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/" className={styles.crumbLink}>
          Home
        </Link>
        <span className={styles.crumbSep}>/</span>
        <span className={styles.crumbCurrent}>Looking to Sell?</span>
      </nav>

      {/* Hero Banner with Official Welcome Copy */}
      <section className={styles.heroBanner}>
        <div className={styles.badgeRow}>
          <span className={styles.kickerBadge}>Leading East Midlands Gold & Silver Buyers</span>
          <span className={styles.guaranteeBadge}>★ Proudly Serving The Community Since 2016</span>
        </div>

        <h1 className={styles.heroTitle}>
          Welcome to <span className={styles.goldHighlight}>Gold Bank Jewellers</span>
        </h1>

        <p className={styles.heroLead}>
          We are the leading gold and silver buyers in the East Midlands, proudly serving the community
          since 2016. Our commitment is to provide you with the most competitive, no-obligation quote
          for your jewellery. Visit us for a professional and welcoming experience, where you can
          receive a fair valuation without any pressure. We look forward to assisting you.
        </p>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statText}>No-obligation, pressure-free quotes</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>XRF</div>
            <div className={styles.statText}>Non-destructive laser assaying in front of you</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>Instant</div>
            <div className={styles.statText}>Same-day cash or direct bank transfer payout</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>Est. 2016</div>
            <div className={styles.statText}>Over a decade of trusted East Midlands service</div>
          </div>
        </div>
      </section>

      {/* Interactive Live Valuation Calculator & Appointment Booking */}
      <div className={styles.calculatorGrid}>
        {/* Left Card: Live Scrap & Gold Calculator */}
        <div className={styles.calcCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTag}>Live London Bullion Fix Rates</span>
            <h2 className={styles.cardTitle}>Instant Valuation Calculator</h2>
            <p className={styles.cardSubtitle}>
              Select your metal hallmark and enter approximate weight in grams for an instant estimate.
            </p>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.fieldLabel}>Select Metal Purity / Hallmark:</label>
            <div className={styles.purityGrid}>
              {PURITIES.map((purity) => (
                <button
                  key={purity.key}
                  type="button"
                  className={`${styles.purityBtn} ${
                    selectedPurity.key === purity.key ? styles.activePurityBtn : ""
                  }`}
                  onClick={() => setSelectedPurity(purity)}
                >
                  <span className={styles.purityKarat}>{purity.name.split(" ")[0]}</span>
                  <span className={styles.purityRate}>~£{purity.ratePerGram.toFixed(2)}/g</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="weight-input" className={styles.fieldLabel}>
              Approximate Weight (Grams):
            </label>
            <div className={styles.weightSliderRow}>
              <input
                type="range"
                min="1"
                max="250"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className={styles.sliderInput}
              />
              <input
                id="weight-input"
                type="number"
                min="1"
                max="1000"
                value={weight}
                onChange={(e) => setWeight(Math.max(1, Number(e.target.value)))}
                className={styles.weightNumberInput}
              />
              <span style={{ fontWeight: 600, color: "#1a1612" }}>g</span>
            </div>
          </div>

          {/* Instant Valuation Result Box */}
          <div className={styles.valuationResultBox}>
            <div className={styles.resultLabel}>Estimated Valuation Range</div>
            <div className={styles.resultAmount}>
              £{lowEstimate.toLocaleString()} – £{highEstimate.toLocaleString()}
            </div>
            <div className={styles.resultNotice}>
              Based on {weight}g of {selectedPurity.name}. Final offer confirmed in showroom via XRF test.
            </div>
          </div>
        </div>

        {/* Right Card: Showroom Appointment Booking */}
        <div className={styles.bookingCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTag}>East Midlands Private Showroom</span>
            <h2 className={styles.cardTitle}>Book a Free Consultation</h2>
            <p className={styles.cardSubtitle}>
              Visit our secure showroom for an in-person non-destructive valuation. Walk-ins always welcome.
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "30px 10px" }}>
              <span style={{ fontSize: "2.5rem" }}>✅</span>
              <h3 style={{ fontSize: "1.3rem", marginTop: "12px", color: "#1a1612" }}>
                Valuation Request Received!
              </h3>
              <p style={{ color: "#57534e", marginTop: "8px", fontSize: "0.95rem" }}>
                Our senior valuer will contact you within 2 business hours to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                required
                className={styles.inputField}
              />
              <input
                type="tel"
                placeholder="Phone Number (e.g. 07123 456789)"
                required
                className={styles.inputField}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Item Details (e.g. 9ct curb chain, Rolex Datejust)"
                className={styles.inputField}
              />
              <button type="submit" className={styles.submitQuoteBtn}>
                Request Showroom Appointment
              </button>
            </form>
          )}

          <div className={styles.callDirect}>
            Prefer to speak directly with our valuers?
            <br />
            <a href="tel:08001234567" className={styles.callLink}>
              📞 Call Freephone: 0800 123 4567
            </a>
          </div>
        </div>
      </div>

      {/* What We Buy Section */}
      <section className={styles.whatWeBuySection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What We Buy at Gold Bank</h2>
          <p className={styles.sectionDesc}>
            From broken scrap jewellery to unworn luxury timepieces, we purchase all precious items
            with zero hassle and immediate payout.
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          <div className={styles.categoryCard}>
            <span className={styles.catIcon}>⛓️</span>
            <h3 className={styles.catTitle}>Gold Chains & Bangles</h3>
            <p className={styles.catText}>
              Solid 9ct, 14ct, 18ct, and 22ct curb links, belcher chains, rope chains, and heavy bangles in any condition.
            </p>
          </div>

          <div className={styles.categoryCard}>
            <span className={styles.catIcon}>⌚</span>
            <h3 className={styles.catTitle}>Luxury Timepieces</h3>
            <p className={styles.catText}>
              Pre-owned Rolex, IWC, Omega, Cartier, Breitling, and Tudor. Box & papers preferred but not essential.
            </p>
          </div>

          <div className={styles.categoryCard}>
            <span className={styles.catIcon}>💍</span>
            <h3 className={styles.catTitle}>Diamond & Gemstone Jewellery</h3>
            <p className={styles.catText}>
              Solitaire diamond rings, eternity bands, three-stone drops, and antique gemstone settings.
            </p>
          </div>

          <div className={styles.categoryCard}>
            <span className={styles.catIcon}>🪙</span>
            <h3 className={styles.catTitle}>Coins & Bullion</h3>
            <p className={styles.catText}>
              Full and half gold sovereigns, Krugerrands, Britannia bullion, silver bars, and collectible numismatics.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Valuation Process */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Transparent 4-Step Process</h2>
          <p className={styles.sectionDesc}>
            Simple, safe, and confidential valuation conducted in front of you.
          </p>
        </div>

        <div className={styles.stepGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNum}>01</div>
            <h3 className={styles.stepTitle}>Visit or Book</h3>
            <p className={styles.stepDesc}>
              Visit our East Midlands showroom or book a private appointment at your convenience.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNum}>02</div>
            <h3 className={styles.stepTitle}>Testing & Weighing</h3>
            <p className={styles.stepDesc}>
              We test purity using non-destructive XRF laser technology and certified trade-approved scales.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNum}>03</div>
            <h3 className={styles.stepTitle}>No-Pressure Quote</h3>
            <p className={styles.stepDesc}>
              You receive our highest market quote with zero obligation. You are under no pressure to sell.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNum}>04</div>
            <h3 className={styles.stepTitle}>Instant Payment</h3>
            <p className={styles.stepDesc}>
              If you accept, funds are transferred instantly to your bank account or paid in cash on the spot.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
