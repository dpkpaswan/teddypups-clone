/**
 * faq.ts — Frequently asked questions data.
 * Used on the FAQ page and the FAQ preview section on the homepage.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "vaccinated",
    question: "Are your puppies vaccinated and health-checked?",
    answer:
      "Yes! Every puppy comes fully vaccinated, dewormed, and with a verified health certificate from a licensed veterinarian. We also provide a health guarantee for the first 30 days.",
  },
  {
    id: "visit-showroom",
    question: "Can I visit and meet a puppy before adopting?",
    answer:
      "Absolutely. Our Dubai showroom is open daily from 10 AM to 8 PM. You can schedule a visit through WhatsApp, and our team will have the puppy ready for you to meet and play with.",
  },
  {
    id: "delivery",
    question: "Do you deliver puppies across the UAE?",
    answer:
      "Yes, we offer safe, professional delivery throughout the UAE — including Abu Dhabi, Sharjah, Al Ain, and the Northern Emirates. International shipping is also available for select breeds.",
  },
  {
    id: "korean-teacup",
    question: "What does 'Korean Teacup' mean?",
    answer:
      "Korean Teacup puppies are bred by specialized breeders in South Korea who focus on producing extremely small, healthy miniature dogs. These puppies typically weigh between 1–2 kg as adults and are known for their teddy-bear appearance.",
  },
  {
    id: "imported",
    question: "Where are imported puppies sourced from?",
    answer:
      "Our imported puppies come from trusted breeders in Europe, the United States, and Asia. Every breeder is personally vetted by our team, and all puppies travel with proper health documentation and airline-approved carriers.",
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, credit/debit cards, and cash on delivery (for local orders). A deposit is required to reserve a puppy, with the balance due before delivery.",
  },
  {
    id: "training",
    question: "Do the puppies come with any training?",
    answer:
      "Most of our puppies have started basic socialization and potty training. We also offer post-adoption support and can recommend trusted dog trainers in the UAE.",
  },
  {
    id: "return-policy",
    question: "What if the puppy doesn't adjust to our home?",
    answer:
      "We provide a 7-day adjustment period with full support from our team. If there's a genuine health issue within 30 days, we'll work with you on a solution — including exchanges or veterinary assistance.",
  },
  {
    id: "breeds-available",
    question: "Which breeds do you specialize in?",
    answer:
      "We specialize in Maltipoo, Pomeranian, Poodle (Teacup & Toy), Cavapoo, and Shih Tzu. If you're looking for a specific breed or color, message us on WhatsApp and we'll check availability.",
  },
];
