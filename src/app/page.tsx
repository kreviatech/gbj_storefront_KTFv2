import Navbar from "@/components/Navbar";
import HeroWatch from "@/components/HeroWatch";
import NewArrivals from "@/components/NewArrivals";
import CraftsmanshipGrid from "@/components/CraftsmanshipGrid";
import FindPerfectWatch from "@/components/FindPerfectWatch";
import BentoShowcase from "@/components/BentoShowcase";
import BottomBanner from "@/components/BottomBanner";
import WatchRepairsSection from "@/components/WatchRepairsSection";
import Footer from "@/components/Footer";
import { getWatches, getJewellery } from "@/lib/shopify";

export const revalidate = 60; // ISR revalidate every 60 seconds

export default async function Home() {
  const [watches, jewellery] = await Promise.all([
    getWatches(),
    getJewellery(),
  ]);

  // Combine items for showcase, prioritizing items with images
  const allProducts = [...watches, ...jewellery];

  return (
    <main style={{ minHeight: "100vh", background: "#ffffff", overflowX: "hidden" }}>
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section (Reference UI: Timeless Elegance on Your Wrist) */}
      <HeroWatch />

      {/* 3. New Arrival 3-Card Grid (Reference UI: New Arrival) */}
      <NewArrivals products={allProducts} />

      {/* 4. 4-Pillar Craftsmanship Grid with Centerpiece Watch (Reference UI: The Keys to Precision) */}
      <CraftsmanshipGrid />

      {/* 5. 4 Cards Grid (Find Your Perfect Jewellery) */}
      <FindPerfectWatch watches={watches} jewellery={jewellery} />

      {/* 6. 6-Card Bento Grid (Reference UI: Crafted for Style and Performance) */}
      <BentoShowcase />

      {/* 7. Luxury Watch Repairs in Nottingham (Redirects to repairs.goldbankjewellers.co.uk) */}
      <WatchRepairsSection />

      {/* 8. Bottom Promotional Card (Reference UI: Modern Watches For Every Occasion) */}
      <BottomBanner />

      {/* 9. Luxury Footer */}
      <Footer />
    </main>
  );
}
