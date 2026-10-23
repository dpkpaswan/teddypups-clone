/**
 * PuppyDetailClient — Interactive puppy profile view with photo gallery switcher,
 * WhatsApp quick enquiry, health specs, and recommended puppies.
 */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Puppy, puppies } from "../../../data/puppies";
import PuppyCard from "../../../components/PuppyCard";

interface PuppyDetailClientProps {
  puppy: Puppy;
}

export default function PuppyDetailClient({ puppy }: PuppyDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(puppy.image);

  // Other available puppies as recommendations
  const otherPuppies = puppies
    .filter((p) => p.slug !== puppy.slug && p.status === "Available")
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello TeddyPups! I'm interested in ${puppy.name} (${puppy.breed}, ${puppy.gender}, ${puppy.age}). Is ${puppy.name} still available?`
  );

  return (
    <div className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb & Greeting */}
      <div className="mb-6">
        <nav className="text-xs sm:text-sm font-medium text-[#3b2010]/70 mb-3 flex items-center gap-2">
          <Link href="/puppies" className="hover:text-[#a85220] hover:underline">
            Available puppies
          </Link>
          <span>/</span>
          <span className="text-[#3b2010] font-bold">{puppy.name}</span>
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full border-2 border-[#3b2010] flex items-center justify-center font-serif font-black text-xs">
            1
          </div>
          <span className="font-handwriting text-xl sm:text-2xl text-[#a85220]">
            hello, it&apos;s me
          </span>
        </div>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
        {/* Left: Photo Gallery */}
        <div className="lg:col-span-7 flex flex-col items-center">
          {/* Main Photo Card (with layered paper stack effect) */}
          <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border-4 border-[#3b2010] bg-white shadow-[0_8px_0_#2b1810]">
            <Image
              src={selectedImage}
              alt={puppy.name}
              fill
              priority
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover transition-opacity duration-300"
            />

            {/* Video pill if applicable */}
            {puppy.hasVideo && (
              <div className="absolute bottom-4 left-4 bg-[#2b1810]/90 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs">
                <span>▶</span> Video available on WhatsApp
              </div>
            )}
          </div>

          {/* Thumbnail Strip */}
          {puppy.gallery.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2 max-w-lg w-full">
              {puppy.gallery.map((imgUrl, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                    selectedImage === imgUrl
                      ? "border-[#a85220] scale-105 shadow-md"
                      : "border-[#3b2010]/30 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View photo ${index + 1}`}
                >
                  <Image
                    src={imgUrl}
                    alt={`${puppy.name} thumbnail ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info Card with Peeking Mascot */}
        <div className="lg:col-span-5 relative">
          {/* Peeking Cartoon Poodle on Top Right */}
          <div className="absolute -top-10 right-8 z-20 text-4xl animate-bounce-gentle select-none">
            🐩
          </div>

          {/* Details Card */}
          <div className="bg-white rounded-3xl border-3 border-[#3b2010] p-6 sm:p-8 shadow-[0_8px_0_#3b2010] relative">
            {/* Top pin */}
            <div className="absolute -top-3 left-8 w-6 h-6 rounded-full bg-[#e07830] border-2 border-[#3b2010] shadow-xs flex items-center justify-center text-[10px] text-white">
              •
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-1.5 bg-[#fef5e7] text-[#a85220] text-xs font-black px-3.5 py-1 rounded-full border border-[#a85220]/30 mb-4">
              <span>🐾</span>
              <span>{puppy.status}</span>
            </div>

            {/* Title & Breed */}
            <h1 className="font-serif font-black text-4xl sm:text-5xl text-[#3b2010] tracking-tight mb-1">
              {puppy.name}
            </h1>
            <p className="text-base text-[#a85220] font-semibold mb-6">
              {puppy.breed}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-[#3b2010]/15 mb-6 text-sm">
              <div>
                <span className="font-handwriting text-sm text-[#3b2010]/70 block">
                  Breed
                </span>
                <span className="font-bold text-[#3b2010]">{puppy.breed}</span>
              </div>
              <div>
                <span className="font-handwriting text-sm text-[#3b2010]/70 block">
                  Boy or girl
                </span>
                <span className="font-bold text-[#3b2010]">{puppy.gender}</span>
              </div>
              <div>
                <span className="font-handwriting text-sm text-[#3b2010]/70 block">
                  Age
                </span>
                <span className="font-bold text-[#3b2010]">{puppy.age}</span>
              </div>
              <div>
                <span className="font-handwriting text-sm text-[#3b2010]/70 block">
                  Where
                </span>
                <span className="font-bold text-[#3b2010]">
                  {puppy.origin === "Korean Teacup"
                    ? "Korean Teacup"
                    : "Imported for you"}
                </span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm sm:text-base text-[#3b2010]/85 leading-relaxed mb-8">
              {puppy.description}
            </p>

            {/* Primary Action Button */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/971541676733?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                id="detail-whatsapp-btn"
                className="w-full flex items-center justify-center gap-2 bg-[#1b6d4b] hover:bg-[#15573b] text-white font-bold text-base py-3.5 px-6 rounded-full border-2 border-[#2b1810] shadow-[0_4px_0_#2b1810] active:translate-y-1 active:shadow-[0_1px_0_#2b1810] transition-all text-center"
              >
                Ask about {puppy.name} on WhatsApp
              </a>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center bg-[#faf6ef] hover:bg-[#ede0ca] text-[#3b2010] font-bold text-sm py-3 px-6 rounded-full border-2 border-[#3b2010] shadow-[0_2px_0_#3b2010] transition-all text-center"
              >
                Book a showroom visit
              </Link>
            </div>

            {/* Health & Guarantee Bullet Points */}
            <div className="mt-8 pt-6 border-t border-[#3b2010]/15 space-y-2.5 text-xs text-[#3b2010]/80">
              <div className="flex items-center gap-2">
                <span className="text-[#1b6d4b] font-bold">✓</span>
                <span>Full international vaccination record</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#1b6d4b] font-bold">✓</span>
                <span>Microchipped and dewormed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#1b6d4b] font-bold">✓</span>
                <span>Veterinary health certificate included</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#1b6d4b] font-bold">✓</span>
                <span>30-day health guarantee &amp; 24/7 post-adoption care</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Puppies */}
      {otherPuppies.length > 0 && (
        <div className="pt-12 border-t-2 border-[#3b2010]/15">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#3b2010]">
              More puppies looking for homes
            </h2>
            <Link
              href="/puppies"
              className="text-xs sm:text-sm font-bold text-[#a85220] hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {otherPuppies.map((p) => (
              <PuppyCard key={p.slug} puppy={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
