import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccountClient from "./AccountClient";
import {
  getCustomerAccountUrl,
  getCustomerOAuthUrl,
  getShopDetails,
} from "@/lib/shopify";
import styles from "./account.module.css";

export const metadata: Metadata = {
  title: "Customer Account & Vault Portal | Gold Bank Jewellers",
  description:
    "Log in securely via Shopify Customer Account API and Shop Pay to view your Gold Bank orders, track insured UK shipments, and manage your vault privileges.",
};

export default async function AccountPage() {
  const shop = await getShopDetails();
  const accountUrl = getCustomerAccountUrl();
  const oauthUrl = getCustomerOAuthUrl();

  return (
    <main className={styles.accountPage}>
      <Navbar />
      <AccountClient
        accountUrl={accountUrl}
        oauthUrl={oauthUrl}
        shopName={shop?.name || "Gold Bank Jewellers"}
      />
      <Footer />
    </main>
  );
}
