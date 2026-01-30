import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATELIER | Luxury Fashion House",
  description: "A curated collection of exclusive, handcrafted pieces designed for the discerning individual who values timeless elegance.",
  keywords: ["luxury fashion", "haute couture", "designer clothing", "exclusive collection", "handcrafted fashion"],
  authors: [{ name: "ATELIER" }],
  openGraph: {
    title: "ATELIER | Luxury Fashion House",
    description: "A curated collection of exclusive, handcrafted pieces designed for the discerning individual who values timeless elegance.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
