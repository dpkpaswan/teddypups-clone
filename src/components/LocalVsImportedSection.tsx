/**
 * LocalVsImportedSection — "Two ways home" interactive comparison.
 * Enhanced with Reveal scroll animations and tactile button states.
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function LocalVsImportedSection() {
  const [activeTab, setActiveTab] = useState<"dubai" | "imported">("dubai");

  return (
    <section className="py-16 sm:py-24 bg-[#fbf7f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title with Reveal */}
        <Reveal direction="up" delay={100}>
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-handwriting text-2xl text-[#a85220] block mb-1">
              choose your way
            </span>
            <h2 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-[#3b2010] tracking-tight">
              Two ways home
            </h2>
            <p className="text-base sm:text-lg text-[#3b2010]/80 max-w-xl mx-auto mt-3">
              Whether you want to cuddle your puppy today or import an ultra-rare
              teacup companion from South Korea.
            </p>

            {/* Toggle pill selector */}
            <div className="inline-flex p-1.5 rounded-full bg-[#f0e2cd] border-2 border-[#3b2010] shadow-[0_3px_0_#3b2010] mt-8">
              <button
                type="button"
                onClick={() => setActiveTab("dubai")}
                className={`px-6 sm:px-8 py-2.5 rounded-full font-serif font-bold text-sm sm:text-base transition-all ${
                  activeTab === "dubai"
                    ? "bg-[#a85220] text-white shadow-sm"
                    : "text-[#3b2010] hover:text-[#a85220]"
                }`}
              >
                In Dubai <span className="text-xs font-sans font-normal opacity-80 block sm:inline sm:ml-1">meet in person</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("imported")}
                className={`px-6 sm:px-8 py-2.5 rounded-full font-serif font-bold text-sm sm:text-base transition-all ${
                  activeTab === "imported"
                    ? "bg-[#3b2010] text-white shadow-sm"
                    : "text-[#3b2010] hover:text-[#a85220]"
                }`}
              >
                Imported <span className="text-xs font-sans font-normal opacity-80 block sm:inline sm:ml-1">order upon request</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Content Comparison Cards with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Card 1: In Dubai */}
          <Reveal direction="left" delay={200} className="h-full">
            <div
              className={`rounded-3xl p-8 sm:p-10 border-3 border-[#3b2010] transition-all relative flex flex-col justify-between h-full ${
                activeTab === "dubai"
                  ? "bg-white shadow-[0_8px_0_#3b2010] scale-[1.02] border-[#3b2010]"
                  : "bg-[#f5ebd7]/60 opacity-80 border-[#3b2010]/30 hover:opacity-100"
              }`}
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 bg-[#eef6f0] text-[#1b6d4b] text-xs font-black px-3.5 py-1 rounded-full border border-[#1b6d4b]/30 w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-[#1b6d4b]" />
                Ready today
              </div>

              <div>
                <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#3b2010] mb-3">
                  Downtown Dubai Showroom
                </h3>
                <p className="text-[#3b2010]/80 text-sm sm:text-base leading-relaxed mb-6">
                  Come visit us and fall in love in person. Sit on our cozy couches,
                  play with the puppies, and feel their unique personalities before
                  making your decision.
                </p>

                <ul className="space-y-3 mb-8 text-sm text-[#3b2010]/90">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#1b6d4b] font-bold text-base">✓</span>
                    <span><strong>Immediate adoption:</strong> Take your puppy home the very same day.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#1b6d4b] font-bold text-base">✓</span>
                    <span><strong>Full health book:</strong> Microchipped, dewormed, and vet vaccinated.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#1b6d4b] font-bold text-base">✓</span>
                    <span><strong>Complimentary starter pack:</strong> Royal Canin puppy food, bed, and toy.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#1b6d4b] font-bold text-base">✓</span>
                    <span><strong>Free UAE home delivery:</strong> In climate-controlled pet transport.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#3b2010]/10 flex items-center justify-between">
                <div>
                  <span className="font-handwriting text-xs text-[#a85220] block">location</span>
                  <span className="text-xs font-bold text-[#3b2010]">Business Bay, Dubai</span>
                </div>
                <Link
                  href="/contact"
                  className="bg-[#faf6ef] hover:bg-[#ede0ca] text-[#3b2010] font-bold text-xs px-4 py-2 rounded-full border-2 border-[#3b2010] shadow-[0_2px_0_#3b2010] active:translate-y-0.5 active:shadow-none transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_#3b2010]"
                >
                  Book visit →
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Imported */}
          <Reveal direction="right" delay={300} className="h-full">
            <div
              className={`rounded-3xl p-8 sm:p-10 border-3 border-[#3b2010] transition-all relative flex flex-col justify-between h-full ${
                activeTab === "imported"
                  ? "bg-white shadow-[0_8px_0_#3b2010] scale-[1.02] border-[#3b2010]"
                  : "bg-[#f5ebd7]/60 opacity-80 border-[#3b2010]/30 hover:opacity-100"
              }`}
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 bg-[#fef5e7] text-[#a85220] text-xs font-black px-3.5 py-1 rounded-full border border-[#a85220]/30 w-fit mb-4">
                <span>✈️</span>
                Global Concierge
              </div>

              <div>
                <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#3b2010] mb-3">
                  Korean Teacup & Global Sourcing
                </h3>
                <p className="text-[#3b2010]/80 text-sm sm:text-base leading-relaxed mb-6">
                  Looking for an ultra-rare teacup under 1.5 kg, rare chocolate coloring,
                  or champion lineage? We hand-select puppies from vetted, ethical breeders in South Korea.
                </p>

                <ul className="space-y-3 mb-8 text-sm text-[#3b2010]/90">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#a85220] font-bold text-base">✦</span>
                    <span><strong>Ultra-miniature size:</strong> True teacup standard with teddy-bear proportions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#a85220] font-bold text-base">✦</span>
                    <span><strong>Weekly HD video updates:</strong> Watch your pup grow before travel.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#a85220] font-bold text-base">✦</span>
                    <span><strong>Full import clearance:</strong> MOCCAE permits, rabies titre, & health passport.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#a85220] font-bold text-base">✦</span>
                    <span><strong>VIP in-cabin flight nanny:</strong> Travel with loving human supervision.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#3b2010]/10 flex items-center justify-between">
                <div>
                  <span className="font-handwriting text-xs text-[#a85220] block">delivery time</span>
                  <span className="text-xs font-bold text-[#3b2010]">7 to 14 days</span>
                </div>
                <a
                  href="https://wa.me/971541676733?text=Hi%20TeddyPups%2C%20I'd%20like%20to%20order%20an%20imported%20puppy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1b6d4b] hover:bg-[#15573b] text-white font-bold text-xs px-4 py-2 rounded-full border-2 border-[#2b1810] shadow-[0_2px_0_#2b1810] active:translate-y-0.5 active:shadow-none transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_#2b1810]"
                >
                  Request breed →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
