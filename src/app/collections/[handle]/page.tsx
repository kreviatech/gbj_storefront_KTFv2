import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollectionClient from "./CollectionClient";
import { getCollectionByHandle } from "@/lib/shopify";

interface CollectionPageProps {
  params: Promise<{ handle: string }>;
}

export const revalidate = 60; // ISR revalidate every 60 seconds

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { handle } = await params;

  if (handle === "looking-to-sell" || handle === "sell-gold") {
    return {
      title: "Looking to Sell? | Gold Bank Jewellers",
    };
  }

  const collection = await getCollectionByHandle(handle);

  if (!collection) {
    return {
      title: "Collection Not Found | Gold Bank Jewellers",
    };
  }

  return {
    title: `${collection.title} | Gold Bank Jewellers`,
    description:
      collection.description ||
      `Explore our certified ${collection.title} collection at Gold Bank Jewellers. Guaranteed authentic and hallmarked.`,
    openGraph: {
      title: `${collection.title} | Gold Bank Jewellers`,
      description: collection.description,
      images: collection.products[0]?.featuredImage?.url
        ? [collection.products[0].featuredImage.url]
        : [],
    },
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { handle } = await params;

  if (handle === "looking-to-sell" || handle === "sell-gold") {
    redirect("/looking-to-sell");
  }

  const collection = await getCollectionByHandle(handle);

  if (!collection) {
    notFound();
  }

  return (
    <main style={{ minHeight: "100vh", background: "#ffffff", overflowX: "hidden" }}>
      <Navbar />
      <CollectionClient collection={collection} />
      <Footer />
    </main>
  );
}
