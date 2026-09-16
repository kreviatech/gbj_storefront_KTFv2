"use client";

import Image from "next/image";
import styles from "./HeroWatch.module.css";

export default function HeroWatch() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Text Column */}
        <div className={styles.leftCol}>
          <div className={styles.kickerRow}>
            <span className={styles.kickerBadge}>Est. 2016 • East Midlands</span>
            <span className={styles.kickerText}>Prestige Jewellers & Watch Specialists</span>
          </div>

          <h1 className={styles.title}>
            Timeless Elegance in<br />
            <span className={styles.goldText}>Gold, Silver & Watches</span>
          </h1>

          <p className={styles.subtitle}>
            Explore authentic solid 9ct & 18ct gold jewellery, heavy curb chains, diamond rings, 
            silver bullion, and authenticated Swiss luxury timepieces crafted for generations.
          </p>

          {/* Product Category Tags */}
          <div className={styles.categoryPills}>
            <span className={styles.pill}>✨ Solid 9ct & 18ct Gold</span>
            <span className={styles.pill}>💎 Diamond Rings</span>
            <span className={styles.pill}>🥈 Fine Silver Bullion</span>
            <span className={styles.pill}>⌚ Swiss Luxury Watches</span>
          </div>

          {/* Action CTAs */}
          <div className={styles.ctaRow}>
            <a href="#new-arrivals" className={styles.exploreBtn}>
              Explore Collection
            </a>
            <a href="#find-watch" className={styles.secondaryBtn}>
              View All Pieces
            </a>
          </div>

          {/* Social Proof Reviews */}
          <div className={styles.reviewsRow}>
            <div className={styles.avatarGroup}>
              <div className={styles.avatar} style={{ background: "#475569" }}>JD</div>
              <div className={styles.avatar} style={{ background: "#64748b" }}>EM</div>
              <div className={styles.avatar} style={{ background: "#334155" }}>SA</div>
              <div className={styles.avatar} style={{ background: "#1e293b" }}>RK</div>
            </div>
            <div className={styles.ratingText}>
              <span className={styles.stars}>★★★★★ 4.9/5</span>
              <span className={styles.reviewCount}>Over 1,234 Verified Reviews</span>
            </div>
          </div>
        </div>

        {/* Right Media Column - Light Jewellery & Watches Showcase */}
        <div className={styles.rightCol}>
          <div className={styles.showcaseFrame}>
            <Image
              src="/images/light-hero-jewellery-watches.jpg"
              alt="Gold Bank - Solid Gold Chains, Diamond Bracelet, and Luxury Swiss Watch"
              width={600}
              height={600}
              priority
              className={styles.showcaseImage}
            />
            <div className={styles.floatingBadge}>
              <span className={styles.liveIndicator}></span>
              <div>
                <strong className={styles.badgeTitle}>100% Certified & Tested</strong>
                <span className={styles.badgeSubtitle}>Hallmarked Gold & Swiss Calibres</span>
              </div>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className={styles.carouselDots}>
            <span className={`${styles.dot} ${styles.activeDot}`}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
        </div>
      </div>
    </section>
  );
}
