"use client";

import Image from "next/image";
import styles from "./BottomBanner.module.css";

export default function BottomBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.bannerCard}>
          {/* Left Content */}
          <div className={styles.leftCol}>
            <h2 className={styles.title}>
              Modern Watches & Jewellery<br />
              For Every Occasion
            </h2>
            <p className={styles.subtitle}>
              A Perfect Balance Of Style And Performance For Every Moment.
            </p>

            <div>
              <a href="#new-arrivals" className={styles.exploreBtn}>
                Explore Our Collection
              </a>
            </div>

            <div className={styles.reviewsRow}>
              <span className={styles.stars}>★★★★★</span>
              <span className={styles.reviewCount}>(2743 Reviews)</span>
            </div>
          </div>

          {/* Right Oversized Watch Dial */}
          <div className={styles.rightCol}>
            <div className={styles.watchImageWrapper}>
              <Image
                src="/images/bottom-banner-dial.jpg"
                alt="Modern Watches For Every Occasion"
                width={500}
                height={500}
                className={styles.bannerDialImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
