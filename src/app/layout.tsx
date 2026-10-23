import type { Metadata } from "next";
import { Fraunces, Patrick_Hand, Nunito } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CustomCursor from "../components/CustomCursor";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["700", "900"],
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  variable: "--font-patrick-hand",
  display: "swap",
  weight: "400",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TeddyPups | Premium Teacup Puppies in Dubai",
  description:
    "Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide. Maltipoo, Pomeranian, Teacup Poodle and more.",
  keywords: [
    "teacup puppies dubai",
    "maltipoo dubai",
    "korean teacup puppies",
    "pomeranian puppy uae",
    "toy poodle dubai",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${patrickHand.variable} ${nunito.variable} scroll-smooth`}
    >
      <body className="bg-[#faf6ef] text-[#3b2010] min-h-screen flex flex-col font-sans selection:bg-[#c67c3b]/30">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
