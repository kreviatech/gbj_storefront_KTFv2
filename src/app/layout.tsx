import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sereno | Timeless Elegance on Your Wrist — Watches & Fine Jewellery",
  description:
    "Discover watches & fine jewellery crafted with precision, premium materials, and designs that last a lifetime. Powered by Shopify Headless API.",
  keywords: [
    "Luxury watches",
    "Gold jewellery",
    "Silver jewellery",
    "Sereno watches",
    "Gold Bank Jewellers",
    "Pre-owned Rolex",
    "IWC watches",
    "9ct gold chains",
    "Gold bangles",
  ],
  openGraph: {
    title: "Sereno | Timeless Elegance on Your Wrist",
    description:
      "Discover watches & fine jewellery crafted with precision, premium materials, and designs that last a lifetime.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
