/**
 * HeroSection — The iconic TeddyPups hero banner with arched photo strip.
 * Enhanced with:
 * - Reveal scroll entrance animations
 * - Looping continuous marquee ticker banner
 * - Tactile 3D button press states
 * - Floating subtle rhythm animations
 */
import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import { heroImages } from "../data/puppies";

export default function HeroSection() {
  const marqueeItems = [
    "🐾 100% HEALTH CHECKED",
    "✦ KOREAN TEACUP SPECIALISTS",
    "🐾 VET CERTIFIED & MICROCHIPPED",
    "✦ 24/7 WHATSAPP CONCIERGE",
    "🐾 NATIONWIDE UAE HOME DELIVERY",
    "✦ ZERO PUPPY MILLS GUARANTEE",
  ];

  return (
    <section className="relative overflow-hidden pt-8 sm:pt-14 pb-8 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Playful Top Eyebrow */}
        <Reveal direction="down" delay={100}>
          <div className="inline-block relative mb-3 sm:mb-4">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#a85220] tracking-wide block">
              every puppy is family
            </span>
            {/* Hand-drawn wavy underline */}
            <svg
              className="w-full h-3 text-[#a85220] -mt-1"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M3 8 Q 50 1 100 8 T 197 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </Reveal>

        {/* Hero Title */}
        <Reveal direction="up" delay={200}>
          <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-[#3b2010] tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
            Premium teacup <br className="hidden sm:inline" />
            puppies in Dubai
          </h1>
        </Reveal>

        {/* Hero Subtitle */}
        <Reveal direction="up" delay={300}>
          <p className="text-base sm:text-lg md:text-xl text-[#3b2010]/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
            Meet your new best friend in our Dubai showroom, or order a rare
            miniature breed from trusted breeders worldwide.
          </p>
        </Reveal>

        {/* Action Buttons with tactile 3D press */}
        <Reveal direction="up" delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14 sm:mb-20">
            <Link
              href="/puppies"
              id="hero-view-puppies-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#a85220] hover:bg-[#8d4218] text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-full border-2 border-[#2b1810] shadow-[0_5px_0_#2b1810] active:translate-y-1 active:shadow-[0_1px_0_#2b1810] transition-all hover:-translate-y-0.5 hover:shadow-[0_7px_0_#2b1810]"
            >
              View available puppies
            </Link>
            <a
              href="https://wa.me/971541676733"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-enquire-whatsapp-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#faf6ef] hover:bg-[#f3ebd9] text-[#3b2010] font-bold text-base sm:text-lg px-8 py-3.5 rounded-full border-2 border-[#2b1810] shadow-[0_5px_0_#2b1810] active:translate-y-1 active:shadow-[0_1px_0_#2b1810] transition-all hover:-translate-y-0.5 hover:shadow-[0_7px_0_#2b1810]"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </Reveal>

        {/* Arched Photo Cutout Strip with floating rhythm */}
        <Reveal direction="scale" delay={500} duration={800}>
          <div className="relative max-w-5xl mx-auto">
            {/* Cartoon speech bubble label */}
            <div className="hidden md:block absolute -top-10 left-8 z-20 bg-white text-[#3b2010] font-handwriting text-sm sm:text-base font-bold py-1 px-3.5 rounded-full border-2 border-[#3b2010] shadow-[0_2px_0_#3b2010] -rotate-6 animate-float-gentle">
              Korean Teacup Pomeranian
              <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-white border-b-2 border-r-2 border-[#3b2010] rotate-45" />
            </div>

            {/* Row of Arched Windows */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2 sm:gap-3 items-end justify-center px-2">
              {heroImages.map((src, index) => {
                const heights = [
                  "h-32 sm:h-44",
                  "h-36 sm:h-52",
                  "h-40 sm:h-60",
                  "h-40 sm:h-56",
                  "h-36 sm:h-52",
                  "h-32 sm:h-44",
                ];
                const heightClass = heights[index % heights.length];

                return (
                  <div
                    key={index}
                    className={`relative ${heightClass} w-full rounded-t-full rounded-b-md overflow-hidden border-[3px] border-[#3b2010] bg-[#eedec5] shadow-[0_4px_0_#3b2010] hover:-translate-y-2 hover:shadow-[0_8px_0_#3b2010] transition-all duration-300 group ${
                      index > 3 ? "hidden sm:block" : ""
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`TeddyPups puppy ${index + 1}`}
                      fill
                      priority={index < 3}
                      loading={index < 3 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 80px, 150px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                );
              })}

              {/* Mascot dog in the strip */}
              <div className="relative h-32 sm:h-48 w-full rounded-t-full rounded-b-md overflow-hidden border-[3px] border-[#3b2010] bg-[#f9e5c5] shadow-[0_4px_0_#3b2010] flex flex-col items-center justify-center p-2 group hover:rotate-2 transition-transform">
                <span
                  className="text-4xl sm:text-5xl animate-bounce-gentle select-none"
                  role="img"
                  aria-label="poodle mascot"
                >
                  🐩
                </span>
                <span className="font-handwriting text-xs text-[#3b2010] mt-1 font-bold">
                  Teddy
                </span>
              </div>
            </div>

            {/* Bottom Tablecloth Scallop Runner */}
            <div className="mt-2 w-full h-8 bg-[#edd9be] rounded-full border-2 border-[#3b2010] shadow-[0_4px_0_#3b2010] flex items-center justify-around px-4">
              <div className="flex gap-4 text-[#3b2010]/30 text-xs">
                <span>✦</span>
                <span>🐾</span>
                <span>✦</span>
                <span>🐾</span>
                <span>✦</span>
                <span>🐾</span>
                <span>✦</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Looping Continuous Marquee Ticker */}
      <div className="mt-14 sm:mt-18 border-y-2 border-[#3b2010] bg-[#eeb96a] py-3 overflow-hidden shadow-sm">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-serif font-black text-xs sm:text-sm tracking-wider uppercase text-[#3b2010]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
