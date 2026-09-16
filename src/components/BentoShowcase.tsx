"use client";

import Image from "next/image";
import styles from "./BentoShowcase.module.css";

export default function BentoShowcase() {
  return (
    <section className={styles.section} id="crafted-bento">
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Crafted for Style and Performance</h2>

        <div className={styles.bentoGrid}>
          {/* Card 1: Crafted for Every Second */}
          <div className={styles.bentoCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Crafted for Every Second</h3>
              <p className={styles.cardSubtitle}>Precision meets elegance</p>
              <button className={styles.moreBtn} onClick={() => alert("Explore craftsmanship specs")}>
                More Details
              </button>
            </div>
            <div className={styles.imageHolder}>
              <Image
                src="/images/bento-every-second.jpg"
                alt="Crafted for Every Second"
                width={360}
                height={220}
                className={styles.bentoImg}
              />
            </div>
          </div>

          {/* Card 2: Premium Materials */}
          <div className={styles.bentoCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Premium Materials</h3>
              <p className={styles.cardSubtitle}>Scratch & shock resistant</p>
            </div>
            <div className={styles.imageHolder}>
              <Image
                src="/images/bento-materials.jpg"
                alt="Premium Materials"
                width={360}
                height={220}
                className={styles.bentoImg}
              />
            </div>
          </div>

          {/* Card 3: Precision Inside */}
          <div className={styles.bentoCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Precision Inside</h3>
              <p className={styles.cardSubtitle}>Swiss automatic movement</p>
            </div>
            <div className={styles.imageHolder}>
              <Image
                src="/images/bento-movement.jpg"
                alt="Precision Inside"
                width={360}
                height={220}
                className={styles.bentoImg}
              />
            </div>
          </div>

          {/* Card 4: Built to Last */}
          <div className={styles.bentoCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Built to Last</h3>
              <p className={styles.cardSubtitle}>10 ATM water resistance</p>
            </div>
            <div className={styles.imageHolder}>
              <Image
                src="/images/bento-built-to-last.jpg"
                alt="Built to Last"
                width={360}
                height={220}
                className={styles.bentoImg}
              />
            </div>
          </div>

          {/* Card 5: Your Style, Your Watch */}
          <div className={styles.bentoCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Your Style, Your Watch</h3>
              <p className={styles.cardSubtitle}>Multiple dial colors & gold finishes</p>
            </div>
            <div className={styles.imageHolder}>
              <Image
                src="/images/bento-on-wrist.jpg"
                alt="Your Style, Your Watch"
                width={360}
                height={220}
                className={styles.bentoImg}
              />
            </div>
          </div>

          {/* Card 6: Trusted Worldwide */}
          <div className={styles.bentoCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Trusted Worldwide</h3>
              <p className={styles.cardSubtitle}>10,000+ satisfied clients since 2016</p>
            </div>
            <div className={styles.imageHolder}>
              <Image
                src="/images/bento-trusted-worldwide.jpg"
                alt="Trusted Worldwide"
                width={360}
                height={220}
                className={styles.bentoImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
