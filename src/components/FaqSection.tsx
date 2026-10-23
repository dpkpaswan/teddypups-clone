/**
 * FaqSection — Corkboard-inspired FAQ accordion with pin details.
 * Supports interactive expanding/collapsing and optional live search filtering.
 * Enhanced with Reveal scroll entrance and animated accordion expansion.
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { faqItems, FaqItem } from "../data/faq";

interface FaqSectionProps {
  showSearch?: boolean;
  limit?: number;
}

export default function FaqSection({
  showSearch = false,
  limit,
}: FaqSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<string[]>([faqItems[0].id]);

  const toggleItem = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredItems = faqItems
    .filter((item) => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      );
    })
    .slice(0, limit || faqItems.length);

  const pinColors = [
    "bg-[#e07830] border-[#8a4111]", // orange
    "bg-[#3b82f6] border-[#1d4ed8]", // blue
    "bg-[#10b981] border-[#047857]", // green
    "bg-[#ef4444] border-[#b91c1c]", // red
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#a65625] text-[#3b2010] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Reveal */}
        <Reveal direction="up" delay={100}>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              Questions &amp; answers
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto mt-3 font-medium">
              Can&apos;t find what you&apos;re looking for? Message us on WhatsApp
              — our team is available 24/7.
            </p>

            {/* Search Bar if enabled */}
            {showSearch && (
              <div className="mt-8 max-w-md mx-auto">
                <label
                  htmlFor="faq-search"
                  className="font-handwriting text-xl text-white block mb-2 text-left sm:text-center"
                >
                  sniff out a question
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                    🔍
                  </span>
                  <input
                    id="faq-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="delivery, Korea, vaccinated..."
                    className="w-full pl-11 pr-4 py-3 bg-[#faf6ef] text-[#3b2010] rounded-full border-2 border-[#3b2010] shadow-[0_3px_0_#2b1810] focus:outline-none focus:ring-2 focus:ring-[#e07830] placeholder:text-[#3b2010]/40 text-sm font-medium"
                  />
                </div>
                <p className="text-xs text-white/70 mt-2">
                  {filteredItems.length} notes on the board
                </p>
              </div>
            )}
          </div>
        </Reveal>

        {/* Corkboard Container with Reveal */}
        <Reveal direction="scale" delay={200} duration={700}>
          <div className="bg-[#dcb17a] rounded-3xl border-4 border-[#3b2010] p-4 sm:p-8 shadow-[0_12px_0_#2b1810] space-y-4">
            {filteredItems.map((item: FaqItem, idx: number) => {
              const isOpen = openIds.includes(item.id);
              const pinColor = pinColors[idx % pinColors.length];

              return (
                <div
                  key={item.id}
                  className="relative bg-white rounded-2xl border-2 border-[#3b2010] shadow-[0_4px_0_#3b2010] overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_0_#3b2010]"
                  data-cursor="card"
                >
                  {/* Round Push Pin at top */}
                  <div
                    className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${pinColor} shadow-xs z-10`}
                  />

                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#3b2010] hover:text-[#a85220] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full bg-[#faf6ef] border border-[#3b2010]/30 flex items-center justify-center text-xs font-bold transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#a85220] text-white" : "rotate-0 text-[#3b2010]"
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#3b2010]/85 leading-relaxed border-t border-[#3b2010]/10 font-sans animate-fade-in-up">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="text-center py-8 text-white font-medium">
                No matching questions found. Ask us directly on WhatsApp!
              </div>
            )}
          </div>
        </Reveal>

        {/* Full FAQ Link if in preview mode */}
        {limit && (
          <Reveal direction="up" delay={300}>
            <div className="text-center mt-10">
              <Link
                href="/faq"
                id="faq-view-all-btn"
                className="inline-flex items-center gap-2 bg-[#faf6ef] hover:bg-white text-[#3b2010] font-bold text-sm sm:text-base px-8 py-3 rounded-full border-2 border-[#2b1810] shadow-[0_4px_0_#2b1810] active:translate-y-0.5 active:shadow-none transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_0_#2b1810]"
              >
                See all frequently asked questions →
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
