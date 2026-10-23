/**
 * JourneySection — 3-step adoption journey accompanied by an interactive
 * smartphone mockup showcasing the WhatsApp concierge experience.
 * Enhanced with Reveal scroll entrance and interactive breed selections.
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

export default function JourneySection() {
  const breeds = ["Maltipoo", "Pomeranian", "Poodle", "Cavapoo", "Shih Tzu"];
  const [selectedBreed, setSelectedBreed] = useState("Maltipoo");

  return (
    <section className="py-16 sm:py-24 bg-[#e5ad67] text-[#3b2010] relative overflow-hidden">
      {/* Subtle paw print pattern in background */}
      <div className="absolute inset-0 paw-bg pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 3 Steps */}
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal direction="up" delay={100}>
              <h2 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-[#3b2010] tracking-tight mb-4">
                Your puppy <br />
                journey
              </h2>
              <p className="text-base sm:text-lg text-[#3b2010]/80 font-medium max-w-xl mb-10 sm:mb-12">
                A premium, step-by-step concierge experience. We make adoption
                simple, secure, and purely joyful.
              </p>
            </Reveal>

            {/* Step 1 */}
            <Reveal direction="up" delay={200}>
              <div className="flex gap-4 sm:gap-6 mb-8 sm:mb-10 group">
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#3b2010] text-[#faf6ef] flex items-center justify-center font-serif font-black text-lg sm:text-xl shadow-[0_3px_0_#2b1810] group-hover:scale-110 transition-transform">
                  1
                </div>
                <div>
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-[#3b2010] mb-1.5">
                    Choose your breed
                  </h3>
                  <p className="text-sm sm:text-base text-[#3b2010]/85 leading-relaxed max-w-md">
                    Select your preferred breed or tell us what you&apos;re looking
                    for. We&apos;ll guide you based on availability and your
                    lifestyle.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal direction="up" delay={300}>
              <div className="flex gap-4 sm:gap-6 mb-8 sm:mb-10 group">
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#faf6ef] border-2 border-[#3b2010] text-[#3b2010] flex items-center justify-center font-serif font-black text-lg sm:text-xl shadow-[0_3px_0_#2b1810] group-hover:scale-110 transition-transform">
                  2
                </div>
                <div>
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-[#3b2010] mb-1.5">
                    Get photos &amp; details
                  </h3>
                  <p className="text-sm sm:text-base text-[#3b2010]/85 leading-relaxed max-w-md">
                    Our team will share real photos, health details, and all
                    necessary information directly on WhatsApp.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal direction="up" delay={400}>
              <div className="flex gap-4 sm:gap-6 mb-10 group">
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#3b2010] text-[#faf6ef] flex items-center justify-center font-serif font-black text-lg sm:text-xl shadow-[0_3px_0_#2b1810] group-hover:scale-110 transition-transform">
                  3
                </div>
                <div>
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-[#3b2010] mb-1.5">
                    Secure &amp; safe delivery
                  </h3>
                  <p className="text-sm sm:text-base text-[#3b2010]/85 leading-relaxed max-w-md">
                    Once confirmed, we handle everything professionally and ensure
                    your puppy reaches you safely and stress-free.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Link button with tactile click */}
            <Reveal direction="up" delay={500}>
              <Link
                href="/how-it-works"
                id="journey-how-it-works-btn"
                className="inline-flex items-center gap-2 bg-[#faf6ef] hover:bg-[#f3ebd9] text-[#3b2010] font-bold text-sm sm:text-base px-7 py-3 rounded-full border-2 border-[#2b1810] shadow-[0_4px_0_#2b1810] active:translate-y-1 active:shadow-[0_1px_0_#2b1810] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_0_#2b1810]"
              >
                How it works →
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Smartphone / WhatsApp Mockup */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-center">
            <Reveal direction="scale" delay={300} duration={800}>
              {/* Phone casing */}
              <div className="w-full max-w-sm rounded-[36px] bg-[#2b1810] p-3 sm:p-3.5 shadow-[0_16px_32px_rgba(0,0,0,0.3)] border-4 border-[#3b2010] hover:-translate-y-1 transition-transform">
                {/* Screen */}
                <div className="rounded-[28px] bg-[#f4ece1] overflow-hidden flex flex-col h-[520px] relative border border-[#3b2010]/20">
                  {/* Chat Top Bar */}
                  <div className="bg-white px-4 py-3 border-b border-[#3b2010]/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#f2e2cb] border border-[#3b2010] flex items-center justify-center text-lg">
                      🐶
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-xs text-[#3b2010] leading-tight">
                        TeddyPups U.A.E.
                      </h4>
                      <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        online
                      </span>
                    </div>
                  </div>

                  {/* Chat Message Scrollable Area */}
                  <div className="p-3.5 space-y-3 flex-grow overflow-y-auto text-xs font-sans">
                    {/* User sent message */}
                    <div className="flex justify-end">
                      <div className="bg-[#f0c273] text-[#3b2010] p-2.5 rounded-2xl rounded-tr-none max-w-[85%] border border-[#3b2010]/20 shadow-sm leading-relaxed">
                        Hi TeddyPups! I&apos;d love to know more about your
                        puppies.
                      </div>
                    </div>

                    {/* TeddyPups reply with interactive breed pills */}
                    <div className="flex justify-start">
                      <div className="bg-white text-[#3b2010] p-3 rounded-2xl rounded-tl-none max-w-[90%] border border-[#3b2010]/15 shadow-sm space-y-2">
                        <p className="leading-relaxed">
                          Select your preferred breed or tell us what you&apos;re
                          looking for:
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {breeds.map((breed) => (
                            <button
                              key={breed}
                              type="button"
                              onClick={() => setSelectedBreed(breed)}
                              className={`text-[10px] font-bold px-2.5 py-1 rounded-full border transition-all ${
                                selectedBreed === breed
                                  ? "bg-[#3b2010] text-white border-[#3b2010]"
                                  : "bg-[#f4ece1] hover:bg-[#ebdcc8] text-[#3b2010] border-[#3b2010]/30"
                              }`}
                            >
                              {breed}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Puppy video card message */}
                    <div className="flex justify-start">
                      <div className="bg-white text-[#3b2010] p-2 rounded-2xl rounded-tl-none max-w-[90%] border border-[#3b2010]/15 shadow-sm space-y-2">
                        <div className="relative w-full h-24 rounded-xl overflow-hidden bg-[#eedec5] border border-[#3b2010]/20">
                          <Image
                            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=200&fit=crop"
                            alt="Puppy preview"
                            fill
                            sizes="300px"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <span className="w-8 h-8 rounded-full bg-white/90 text-[#3b2010] flex items-center justify-center text-xs pl-0.5 shadow hover:scale-110 transition-transform">
                              ▶
                            </span>
                          </div>
                        </div>
                        <p className="text-[11px] leading-relaxed px-1">
                          {selectedBreed} puppies are available to meet today! 🐾 100% healthy,
                          vaccinated &amp; microchipped.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom WhatsApp Input Bar */}
                  <div className="bg-white p-2.5 border-t border-[#3b2010]/10 flex items-center gap-2">
                    <div className="flex-grow bg-[#faf6ef] rounded-full px-3 py-1.5 text-xs text-[#3b2010]/60 border border-[#3b2010]/15">
                      Say hello on WhatsApp
                    </div>
                    <a
                      href="https://wa.me/971541676733"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#1b6d4b] hover:bg-[#15573b] text-white flex items-center justify-center text-xs transition-colors shadow-sm"
                      aria-label="Send WhatsApp message"
                    >
                      ➤
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Cartoon dog sitting next to phone */}
            <div className="mt-4 flex items-center gap-2 text-4xl animate-bounce-gentle select-none">
              🐩
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
