import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetailClient from "./ProductDetailClient";
import { getProductByHandle, getRelatedProducts } from "@/lib/shopify";

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

export const revalidate = 60; // ISR revalidate every 60s

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) {
    return {
      title: "Product Not Found | Gold Bank Jewellers",
    };
  }

  const desc =
    product.description?.slice(0, 160) ||
    `Authentic ${product.title} certified by Gold Bank Jewellers. Assayed & non-destructive XRF tested.`;

  return {
    title: `${product.title} | Gold Bank Jewellers`,
    description: desc,
    openGraph: {
      title: `${product.title} | Gold Bank Jewellers`,
      description: desc,
      images: product.featuredImage?.url ? [product.featuredImage.url] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.id, 4);

  return (
    <main style={{ minHeight: "100vh", background: "#ffffff", overflowX: "hidden" }}>
      <Navbar />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      <Footer />
    </main>
  );
}
