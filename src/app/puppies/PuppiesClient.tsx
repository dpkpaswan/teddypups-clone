/**
 * PuppiesClient — Interactive puppy catalog with filter pills driven by URL query params.
 * Filters:
 * - where (origin): Everywhere | Imported | Korean Teacup
 * - breed: All | Maltipoo | Pomeranian | Poodle | Cavapoo | Shih Tzu
 * - gender: All | Boys | Girls
 */
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import PuppyCard from "../../components/PuppyCard";
import {
  puppies,
  allBreeds,
  allOrigins,
  Breed,
  Origin,
  Gender,
} from "../../data/puppies";

export default function PuppiesClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read current filter state from URL query parameters
  const currentOrigin = searchParams.get("origin") || "Everywhere";
  const currentBreed = searchParams.get("breed") || "All";
  const currentGender = searchParams.get("gender") || "All";

  // Helper to update query params cleanly
  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "All" || value === "Everywhere") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/puppies?${params.toString()}`, { scroll: false });
  };

  // Filter puppies based on active criteria
  const filteredPuppies = useMemo(() => {
    return puppies.filter((p) => {
      // Filter out gone home puppies on this page (they are on /gone-home)
      if (p.status === "Gone Home") return false;

      // Origin filter
      if (currentOrigin !== "Everywhere" && p.origin !== currentOrigin) {
        return false;
      }
      // Breed filter
      if (currentBreed !== "All" && p.breed !== currentBreed) {
        return false;
      }
      // Gender filter
      if (currentGender === "Boys" && p.gender !== "Boy") return false;
      if (currentGender === "Girls" && p.gender !== "Girl") return false;

      return true;
    });
  }, [currentOrigin, currentBreed, currentGender]);

  const haloColors: ("cream" | "blue" | "green" | "gold")[] = [
    "cream",
    "blue",
    "green",
    "gold",
  ];

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Header Row with Mascot Portrait */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
        <div>
          <span className="font-handwriting text-2xl text-[#a85220] block mb-1">
            from Teddy&apos;s sketchbook
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-6xl text-[#3b2010] tracking-tight mb-3">
            Available puppies
          </h1>
          {/* Hand-drawn underline */}
          <div className="w-48 h-2 bg-[#a85220] rounded-full mb-4" />
          <p className="text-base sm:text-lg text-[#3b2010]/80 max-w-2xl font-medium">
            Every listing shows real photos of the actual puppy. Open a profile
            to see them all, then ask us about them on WhatsApp.
          </p>
        </div>

        {/* Mascot Cartoon Frame */}
        <div className="hidden sm:flex flex-col items-center self-center md:self-auto">
          <div className="w-28 h-28 rounded-full bg-[#f4e2b8] border-3 border-[#3b2010] shadow-[0_4px_0_#3b2010] flex items-center justify-center text-5xl">
            🐩
          </div>
          <span className="font-handwriting text-sm text-[#3b2010] mt-1.5 font-bold">
            self-portrait
          </span>
        </div>
      </div>

      {/* Filter Box with masking tape aesthetic */}
      <div className="relative bg-white rounded-3xl border-3 border-[#3b2010] p-6 sm:p-8 shadow-[0_6px_0_#3b2010] mb-12">
        {/* Decorative tape sticker on top left */}
        <div className="absolute -top-3.5 left-8 w-24 h-6 bg-[#eedbbd] opacity-90 border-t border-b border-[#3b2010]/20 -rotate-2 pointer-events-none" />

        <div className="space-y-5">
          {/* Row 1: Where / Origin */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <span className="font-handwriting text-lg text-[#3b2010] w-24 flex-shrink-0">
              where
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => updateFilter("origin", "Everywhere")}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border-2 border-[#3b2010] transition-all ${
                  currentOrigin === "Everywhere"
                    ? "bg-[#2b1810] text-white shadow-sm"
                    : "bg-white text-[#3b2010] hover:bg-[#faf6ef]"
                }`}
              >
                Everywhere
              </button>
              {allOrigins.map((origin: Origin) => (
                <button
                  key={origin}
                  type="button"
                  onClick={() => updateFilter("origin", origin)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border-2 border-[#3b2010] transition-all ${
                    currentOrigin === origin
                      ? "bg-[#2b1810] text-white shadow-sm"
                      : "bg-white text-[#3b2010] hover:bg-[#faf6ef]"
                  }`}
                >
                  {origin}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Breed */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-3 border-t border-[#3b2010]/10">
            <span className="font-handwriting text-lg text-[#3b2010] w-24 flex-shrink-0">
              breed
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => updateFilter("breed", "All")}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border-2 border-[#3b2010] transition-all ${
                  currentBreed === "All"
                    ? "bg-[#2b1810] text-white shadow-sm"
                    : "bg-white text-[#3b2010] hover:bg-[#faf6ef]"
                }`}
              >
                All breeds
              </button>
              {allBreeds.map((breed: Breed) => (
                <button
                  key={breed}
                  type="button"
                  onClick={() => updateFilter("breed", breed)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border-2 border-[#3b2010] transition-all ${
                    currentBreed === breed
                      ? "bg-[#2b1810] text-white shadow-sm"
                      : "bg-white text-[#3b2010] hover:bg-[#faf6ef]"
                  }`}
                >
                  {breed}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Boy or Girl */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-3 border-t border-[#3b2010]/10">
            <span className="font-handwriting text-lg text-[#3b2010] w-24 flex-shrink-0">
              boy or girl
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => updateFilter("gender", "All")}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border-2 border-[#3b2010] transition-all ${
                  currentGender === "All"
                    ? "bg-[#2b1810] text-white shadow-sm"
                    : "bg-white text-[#3b2010] hover:bg-[#faf6ef]"
                }`}
              >
                Both
              </button>
              <button
                type="button"
                onClick={() => updateFilter("gender", "Boys")}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border-2 border-[#3b2010] transition-all ${
                  currentGender === "Boys"
                    ? "bg-[#2b1810] text-white shadow-sm"
                    : "bg-white text-[#3b2010] hover:bg-[#faf6ef]"
                }`}
              >
                Boys
              </button>
              <button
                type="button"
                onClick={() => updateFilter("gender", "Girls")}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border-2 border-[#3b2010] transition-all ${
                  currentGender === "Girls"
                    ? "bg-[#2b1810] text-white shadow-sm"
                    : "bg-white text-[#3b2010] hover:bg-[#faf6ef]"
                }`}
              >
                Girls
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count & Doodle Accents */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-handwriting text-xl sm:text-2xl text-[#3b2010]">
          {filteredPuppies.length} {filteredPuppies.length === 1 ? "puppy" : "puppies"} looking for a home
        </p>

        {/* Clear filters button if active */}
        {(currentOrigin !== "Everywhere" ||
          currentBreed !== "All" ||
          currentGender !== "All") && (
          <button
            type="button"
            onClick={() => router.push("/puppies")}
            className="text-xs font-bold text-[#a85220] hover:underline"
          >
            Clear all filters ✕
          </button>
        )}
      </div>

      {/* Puppy Cards Grid */}
      {filteredPuppies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
          {filteredPuppies.map((puppy, idx) => (
            <PuppyCard
              key={puppy.slug}
              puppy={puppy}
              colorScheme={haloColors[idx % haloColors.length]}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-[#3b2010]/30 p-8">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="font-serif font-black text-2xl text-[#3b2010] mb-2">
            No puppies match this criteria
          </h3>
          <p className="text-sm text-[#3b2010]/70 max-w-md mx-auto mb-6">
            We regularly receive new litters from Korea and international kennels.
            Contact us directly on WhatsApp to check upcoming arrivals!
          </p>
          <a
            href="https://wa.me/971541676733"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1b6d4b] text-white font-bold text-sm px-6 py-2.5 rounded-full border-2 border-[#2b1810] shadow-[0_3px_0_#2b1810]"
          >
            Ask us on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
