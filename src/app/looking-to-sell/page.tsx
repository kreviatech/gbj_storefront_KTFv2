import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LookingToSellClient from "./LookingToSellClient";

export const metadata: Metadata = {
  title: "Sell Gold & Silver | East Midlands Leading Buyers — Gold Bank Jewellers",
  description:
    "We are the leading gold and silver buyers in the East Midlands, proudly serving the community since 2016. Get an instant, no-obligation valuation for your jewellery, coins, and luxury watches.",
  openGraph: {
    title: "Looking to Sell? Gold Bank Jewellers — East Midlands",
    description:
      "Highest market prices paid for gold, silver, diamonds, and Swiss luxury timepieces. Visit our showroom or request a free quote.",
  },
};

export default function LookingToSellPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#ffffff", overflowX: "hidden" }}>
      <Navbar />
      <LookingToSellClient />
      <Footer />
    </main>
  );
}
