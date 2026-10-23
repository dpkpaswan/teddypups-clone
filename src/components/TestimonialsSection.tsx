/**
 * TestimonialsSection — Happy family stories presented on whimsical taped sticky notes
 * with handwritten signatures and family photos.
 * Enhanced with Reveal scroll animations and interactive card hover physics.
 */
import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import { familyImages } from "../data/puppies";

const testimonials = [
  {
    quote:
      "TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support gave us complete peace of mind.",
    author: "Sarah M.",
    location: "Downtown Dubai, UAE",
    pup: "Cookie (Maltipoo)",
    tapeColor: "bg-[#eedbbd]",
    rotation: "-rotate-1",
  },
  {
    quote:
      "We visited their Dubai showroom and immediately bonded with Bruno. The adoption was so transparent and smooth. He is the joy of our household!",
    author: "The Al-Nuaimi Family",
    location: "Abu Dhabi, UAE",
    pup: "Bruno (Teacup Poodle)",
    tapeColor: "bg-[#d3e5eb]",
    rotation: "rotate-2",
  },
  {
    quote:
      "Finding a true teacup Pomeranian under 1.5 kg was almost impossible in the UAE until we found TeddyPups. Her health checks were impeccable.",
    author: "Elena & David",
    location: "Dubai Marina, UAE",
    pup: "Pebbles (Pomeranian)",
    tapeColor: "bg-[#d6e8dc]",
    rotation: "-rotate-2",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf6ef] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Reveal */}
        <Reveal direction="up" delay={100}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="font-handwriting text-2xl text-[#a85220] block mb-1">
                our wall of happy endings
              </span>
              <h2 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-[#3b2010] tracking-tight">
                Happy families
              </h2>
              <p className="text-base sm:text-lg text-[#3b2010]/80 mt-2 font-medium max-w-xl">
                Nothing makes us happier than seeing our puppies in loving homes!
                Here are some beautiful moments shared by our clients.
              </p>
            </div>

            <Link
              href="/happy-families"
              className="self-start sm:self-auto bg-[#faf6ef] hover:bg-[#ede0ca] text-[#3b2010] font-bold text-sm px-6 py-3 rounded-full border-2 border-[#3b2010] shadow-[0_3px_0_#3b2010] active:translate-y-0.5 active:shadow-none transition-all hover:-translate-y-0.5 hover:shadow-[0_5px_0_#3b2010]"
            >
              See all stories →
            </Link>
          </div>
        </Reveal>

        {/* Taped Sticky Notes Grid with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} direction="up" delay={150 + idx * 120}>
              <div
                className={`relative bg-white rounded-2xl p-7 border-3 border-[#3b2010] shadow-[0_6px_0_#3b2010] ${t.rotation} hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_10px_0_#3b2010] transition-all duration-300 flex flex-col justify-between h-full`}
                data-cursor="card"
              >
                {/* Masking Tape on Top */}
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 ${t.tapeColor} opacity-90 border-t border-b border-[#3b2010]/20 shadow-xs rotate-1 pointer-events-none`}
                />

                <div>
                  {/* 5 Stars */}
                  <div className="flex gap-1 text-[#e07830] text-sm mb-4">
                    {"★".repeat(5)}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-[#3b2010] leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author & Signature */}
                <div className="pt-4 border-t border-[#3b2010]/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#3b2010]">
                      {t.author}
                    </h4>
                    <span className="text-xs text-[#3b2010]/70">
                      {t.location}
                    </span>
                  </div>
                  <span className="font-handwriting text-sm text-[#a85220] font-bold">
                    {t.pup}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Happy Families Mini Photo Strip with Reveal */}
        <Reveal direction="scale" delay={300} duration={700}>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {familyImages.map((item, idx) => (
              <div
                key={idx}
                className="relative h-44 rounded-2xl overflow-hidden border-2 border-[#3b2010] shadow-[0_4px_0_#3b2010] group hover:-translate-y-1 hover:shadow-[0_6px_0_#3b2010] transition-all"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end">
                  <span className="text-white text-xs font-medium">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
