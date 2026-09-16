"use client";

import Image from "next/image";
import styles from "./CraftsmanshipGrid.module.css";

export default function CraftsmanshipGrid() {
  return (
    <section className={styles.section} id="features-precision">
      <div className={styles.container}>
        {/* Header with Title and Button */}
        <div className={styles.topRow}>
          <h2 className={styles.mainTitle}>
            The Keys to Precision &<br />
            Timeless Luxury.
          </h2>
          <a href="#find-watch" className={styles.shopBtn}>
            Our Shop
          </a>
        </div>

        {/* 4-Pillar Grid with Center Watch */}
        <div className={styles.grid}>
          {/* Left Column: Pillars 1 & 2 */}
          <div className={styles.sideCol}>
            <div className={styles.featureCard}>
              <span className={styles.number}>1.</span>
              <h3 className={styles.featureTitle}>Trusted Precision</h3>
              <p className={styles.featureDesc}>
                High-Quality Swiss & Japanese Movement Ensures Accurate And Dependable Timekeeping.
              </p>
            </div>

            <div className={styles.featureCard}>
              <span className={styles.number}>2.</span>
              <h3 className={styles.featureTitle}>Elegant Craftsmanship</h3>
              <p className={styles.featureDesc}>
                Refined Designs With Premium Finishes, Solid Gold Hallmarks, Crafted For Everyday Elegance.
              </p>
            </div>
          </div>

          {/* Center Column: Centerpiece Watch */}
          <div className={styles.centerCol}>
            <div className={styles.watchWrapper}>
              <Image
                src="/images/centerpiece-watch.jpg"
                alt="Vintage Chronometre Centerpiece Watch"
                width={360}
                height={480}
                className={styles.centerpieceImg}
              />
            </div>
          </div>

          {/* Right Column: Pillars 3 & 4 */}
          <div className={styles.sideCol}>
            <div className={styles.featureCard}>
              <span className={styles.number}>3.</span>
              <h3 className={styles.featureTitle}>Water Resistant Build</h3>
              <p className={styles.featureDesc}>
                Designed To Handle Daily Splashes And Marine Water Exposure With Proven Screw-Down Seals.
              </p>
            </div>

            <div className={styles.featureCard}>
              <span className={styles.number}>4.</span>
              <h3 className={styles.featureTitle}>Durable Materials</h3>
              <p className={styles.featureDesc}>
                Surgical 316L Cases, Sapphire Crystal, And Solid 9ct/18ct Gold For Long-Lasting Performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
