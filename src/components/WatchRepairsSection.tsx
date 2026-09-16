"use client";

import React from "react";
import Image from "next/image";
import styles from "./WatchRepairsSection.module.css";

export default function WatchRepairsSection() {
  const REPAIRS_URL = "https://repairs.goldbankjewellers.co.uk/";

  return (
    <section className={styles.section} id="watch-repairs">
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Left Column: Information & Direct External Link */}
          <div className={styles.leftCol}>
            <div className={styles.kicker}>
              Official Workshop • Nottingham
            </div>

            <h2 className={styles.title}>
              Luxury Watch Repairs in Nottingham
            </h2>

            <p className={styles.description}>
              Expert servicing and restoration for Rolex, Omega, Cartier, Tag, Tudor and other premium timepieces. Genuine parts, warranty-backed work, fully insured handling.
            </p>

            {/* 4 Feature Points - Clean typography, zero icons */}
            <div className={styles.featureGrid}>
              <div className={styles.featureItem}>
                <span className={styles.featureLine}></span>
                <span className={styles.featureText}>Free no-obligation quote</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLine}></span>
                <span className={styles.featureText}>Specialist in all luxury brand watches</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLine}></span>
                <span className={styles.featureText}>24-months warranty on all repairs</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLine}></span>
                <span className={styles.featureText}>Fully insured secure handling</span>
              </div>
            </div>

            {/* Single Professional Link to the Actual Site */}
            <div className={styles.actionWrapper}>
              <a
                href={REPAIRS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.portalLinkBtn}
              >
                <span>Visit repairs.goldbankjewellers.co.uk</span>
                <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Horology Movement Imagery */}
          <div className={styles.rightCol}>
            <a
              href={REPAIRS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageLinkWrapper}
              title="Visit Gold Bank Watch Repairs Workshop"
            >
              <Image
                src="/images/bento-movement.jpg"
                alt="Luxury Watch Repairs & Servicing in Nottingham"
                fill
                sizes="(max-width: 960px) 100vw, 45vw"
                className={styles.workshopImage}
              />
              <div className={styles.imageOverlayLabel}>
                <span>Authorized Horological Servicing • Nottingham</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
