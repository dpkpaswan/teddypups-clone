/**
 * FaqPage (/faq) — Dedicated FAQ page with full search filter and corkboard accordion.
 */
import FaqSection from "../../components/FaqSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | TeddyPups Dubai",
  description:
    "Find answers to common questions about adopting teacup puppies in Dubai, health certificates, vaccinations, delivery, and Korean teacup breeds.",
};

export default function FaqPage() {
  return (
    <div className="py-6 sm:py-10">
      <FaqSection showSearch={true} />
    </div>
  );
}
