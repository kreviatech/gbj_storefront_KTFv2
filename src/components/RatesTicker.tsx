import styles from "./RatesTicker.module.css";

interface RateItem {
  metal: string;
  purity: string;
  estPricePerGram: string;
  change: string;
}

const indicativeRates: RateItem[] = [
  { metal: "24k Pure Gold", purity: "99.9%", estPricePerGram: "£62.40 /g", change: "+0.8%" },
  { metal: "22k Asian Gold", purity: "91.6%", estPricePerGram: "£57.20 /g", change: "+0.7%" },
  { metal: "18k Hallmarked Gold", purity: "75.0%", estPricePerGram: "£46.80 /g", change: "+0.6%" },
  { metal: "14k Fine Jewellery", purity: "58.5%", estPricePerGram: "£36.50 /g", change: "+0.5%" },
  { metal: "9k British Gold", purity: "37.5%", estPricePerGram: "£23.40 /g", change: "+0.4%" },
  { metal: "Fine Silver 999", purity: "99.9%", estPricePerGram: "£0.78 /g", change: "+1.2%" },
  { metal: "Sterling Silver 925", purity: "92.5%", estPricePerGram: "£0.69 /g", change: "+1.1%" },
];

export default function RatesTicker() {
  return (
    <section className={styles.tickerSection}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.liveTag}>
            <span className={styles.pulseDot}></span>
            LIVE BENCHMARK INDICATOR
          </div>
          <span className={styles.subtext}>
            Transparent East Midlands Buying Rates • Updated Daily
          </span>
        </div>

        <div className={styles.ratesGrid}>
          {indicativeRates.map((rate, idx) => (
            <div key={idx} className={styles.rateCard}>
              <div className={styles.rateMeta}>
                <span className={styles.metalName}>{rate.metal}</span>
                <span className={styles.purityBadge}>{rate.purity}</span>
              </div>
              <div className={styles.priceRow}>
                <span className={styles.priceValue}>{rate.estPricePerGram}</span>
                <span className={styles.changeBadge}>{rate.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
