/**
 * GoneHomePage (/gone-home) — Celebrates puppies that have already found their forever homes.
 * Features:
 * - "Gone home ♡" header
 * - Ticket booth awning with peeking mascot
 * - Vintage ticket-shaped cards ("one ticket home", "admit one", route to HOME)
 */
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getGoneHomePuppies } from "../../data/puppies";

export const metadata: Metadata = {
  title: "Gone Home | TeddyPups Dubai",
  description:
    "See puppies that have happily joined their forever families. Looking for a puppy just like them? We can help you find your dream match.",
};

export default function GoneHomePage() {
  const goneHomePuppies = [
    {
      name: "Ace",
      breed: "Pomeranian",
      gender: "Boy",
      route: "TEDDYPUPS ──────► HOME ♥",
      image:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop",
    },
    {
      name: "Leo",
      breed: "Poodle",
      gender: "Boy",
      route: "TEDDYPUPS ──────► HOME ♥",
      image:
        "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=400&fit=crop",
    },
    {
      name: "Mia",
      breed: "Maltipoo",
      gender: "Girl",
      route: "DUBAI SHOWROOM ──► HOME ♥",
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    },
    {
      name: "Rosie",
      breed: "Cavapoo",
      gender: "Girl",
      route: "TEDDYPUPS ──────► HOME ♥",
      image:
        "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&h=400&fit=crop",
    },
    {
      name: "Lily",
      breed: "Shih Tzu",
      gender: "Girl",
      route: "DUBAI SHOWROOM ──► HOME ♥",
      image:
        "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=400&h=400&fit=crop",
    },
    {
      name: "Mochi",
      breed: "Pomeranian",
      gender: "Girl",
      route: "SOUTH KOREA ────► HOME ♥",
      image:
        "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-14">
        <div className="max-w-2xl">
          <h1 className="font-serif font-black text-4xl sm:text-6xl text-[#3b2010] tracking-tight mb-4 flex items-center gap-3">
            <span>Gone home</span>
            <span className="text-[#a85220] font-normal text-3xl sm:text-5xl">
              ♡
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#3b2010]/80 leading-relaxed font-medium mb-6">
            Every puppy here has already joined a loving family. Looking for one
            just like them? Tell us — we&apos;ll help you find your match.
          </p>
          <Link
            href="/puppies"
            className="inline-flex items-center justify-center bg-[#a85220] hover:bg-[#8d4218] text-white font-bold text-sm sm:text-base px-7 py-3 rounded-full border-2 border-[#2b1810] shadow-[0_4px_0_#2b1810] active:translate-y-0.5 transition-all"
          >
            See available puppies
          </Link>
        </div>

        {/* Mascot Peeking out of "Tickets Home" Booth */}
        <div className="relative flex flex-col items-center self-center md:self-auto">
          {/* Peeking Cartoon */}
          <div className="text-5xl animate-bounce-gentle -mb-2 select-none z-10">
            🐩
          </div>
          {/* Striped Awning Booth */}
          <div className="w-48 rounded-xl overflow-hidden border-3 border-[#3b2010] shadow-[0_4px_0_#3b2010] bg-[#f5dfb8]">
            {/* Awning Stripes */}
            <div className="h-6 flex">
              <div className="flex-1 bg-[#a85220]" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-[#a85220]" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-[#a85220]" />
              <div className="flex-1 bg-white" />
            </div>
            {/* Sign */}
            <div className="py-2.5 text-center font-serif font-black text-sm text-[#3b2010]">
              tickets home
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Ticket Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {goneHomePuppies.map((pup, index) => (
          <div
            key={index}
            data-cursor="card"
            className="relative flex rounded-2xl border-3 border-[#3b2010] shadow-[0_6px_0_#3b2010] bg-[#fffaf2] overflow-hidden group hover:-translate-y-1 transition-transform cursor-pointer"
          >
            {/* Main Ticket Body */}
            <div className="flex-grow p-4 sm:p-5 flex items-center gap-4">
              {/* Circular Photo */}
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#3b2010] flex-shrink-0 bg-[#f2e2cb]">
                <Image
                  src={pup.image}
                  alt={pup.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-grow min-w-0">
                <span className="font-handwriting text-xs sm:text-sm text-[#a85220] block">
                  one ticket home
                </span>
                <h3 className="font-serif font-black text-xl text-[#3b2010] truncate">
                  {pup.name}
                </h3>
                <p className="text-xs text-[#3b2010]/75 font-medium mb-2">
                  {pup.breed}, {pup.gender.toLowerCase()}
                </p>
                <div className="text-[10px] font-bold text-[#3b2010]/80 tracking-tighter truncate font-mono">
                  {pup.route}
                </div>
              </div>
            </div>

            {/* Perforated Divider with Notches */}
            <div className="relative w-0 border-r-2 border-dashed border-[#3b2010]/40 flex flex-col justify-between">
              <div className="w-4 h-4 rounded-full bg-[#faf6ef] border-2 border-[#3b2010] -ml-2 -mt-2" />
              <div className="w-4 h-4 rounded-full bg-[#faf6ef] border-2 border-[#3b2010] -ml-2 -mb-2" />
            </div>

            {/* Ticket Stub */}
            <div className="w-12 sm:w-14 bg-[#eeb96a] flex items-center justify-center p-2 text-[#3b2010] flex-shrink-0">
              <span className="font-serif font-black text-[11px] uppercase tracking-widest -rotate-90 whitespace-nowrap select-none">
                admit one
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Inquiry Box */}
      <div className="bg-[#fff9f0] rounded-3xl border-3 border-[#3b2010] p-8 text-center max-w-2xl mx-auto shadow-[0_6px_0_#3b2010]">
        <h3 className="font-serif font-black text-2xl text-[#3b2010] mb-2">
          Looking for a specific puppy?
        </h3>
        <p className="text-sm text-[#3b2010]/80 mb-6">
          If you fell in love with any of our past puppies, our team can help
          source a puppy with similar features from our verified breeders.
        </p>
        <a
          href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'm%20looking%20for%20a%20puppy%20similar%20to%20one%20on%20your%20Gone%20Home%20page"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1b6d4b] hover:bg-[#15573b] text-white font-bold text-sm px-7 py-3 rounded-full border-2 border-[#2b1810] shadow-[0_3px_0_#2b1810]"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
