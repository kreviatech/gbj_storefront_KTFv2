import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoGroup}>
              <Image
                src="/images/gold-bank-logo.png"
                alt="Gold Bank Jewellers - Est. 2016"
                width={150}
                height={58}
                className={styles.brandLogoImg}
              />
            </Link>
            <p className={styles.brandDesc}>
              Discover prestige luxury watches and fine hallmarked gold & silver jewellery. 
              Crafted with precision, premium materials, and designs that endure for generations.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colHeading}>Collections</h4>
            <ul className={styles.linksList}>
              <li><a href="#new-arrivals">New Arrivals</a></li>
              <li><a href="#find-watch">Luxury Watches</a></li>
              <li><a href="#find-watch">Gold & Silver Jewellery</a></li>
              <li><a href="#crafted-bento">Craftsmanship</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colHeading}>Services & Company</h4>
            <ul className={styles.linksList}>
              <li><Link href="/looking-to-sell">Looking to Sell (East Midlands)</Link></li>
              <li><a href="https://repairs.goldbankjewellers.co.uk/" target="_blank" rel="noopener noreferrer">Luxury Watch Repairs (Nottingham) ↗</a></li>
              <li><Link href="/collections/chains">Gold & Silver Vault</Link></li>
              <li><a href="/#crafted-bento">Our Heritage (Est. 2016)</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colHeading}>Newsletter</h4>
            <p className={styles.newsletterText}>
              Be first to receive private allocations, new timepiece drops, and rare jewellery pieces.
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
              />
              <button className={styles.subscribeBtn}>Join</button>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Sereno • Gold Bank Jewellers. All rights reserved. Powered by Shopify Headless API.
          </p>
          <div className={styles.legalGroup}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Authenticity Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
