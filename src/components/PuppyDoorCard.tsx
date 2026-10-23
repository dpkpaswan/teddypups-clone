/**
 * PuppyDoorCard — The signature interactive door card from the TeddyPups homepage.
 * Features an arched wooden door with knob, paw print, and "Available" badge.
 * Hovering or clicking swings the door open in 3D perspective to reveal the puppy photo.
 * Equipped with data-cursor="card" for custom cursor detection.
 */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Puppy } from "../data/puppies";

interface PuppyDoorCardProps {
  puppy: Puppy;
  doorColor?: "caramel" | "dark" | "ochre";
  initialOpen?: boolean;
}

export default function PuppyDoorCard({
  puppy,
  doorColor = "caramel",
  initialOpen = false,
}: PuppyDoorCardProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const doorColors = {
    caramel: "bg-[#b86127]",
    dark: "bg-[#4a2e1b]",
    ochre: "bg-[#d48b3b]",
  };

  return (
    <div
      className="flex flex-col items-center group/card"
      data-cursor="card"
    >
      {/* Puppy info text above door */}
      <div className="text-center mb-3 min-h-[58px] flex flex-col justify-end">
        <Link
          href={`/puppies/${puppy.slug}`}
          className="font-serif font-black text-xl text-[#3b2010] hover:text-[#a85220] transition-colors inline-block"
        >
          {puppy.name}
        </Link>
        <p className="text-xs text-[#3b2010]/80 font-medium mt-0.5">
          {puppy.breed}, {puppy.gender.toLowerCase()}, {puppy.age}
          {puppy.hasVideo ? ", with video" : ""}
        </p>
      </div>

      {/* Arched Door Frame Container */}
      <div
        className="relative w-44 sm:w-48 h-64 sm:h-72 cursor-pointer perspective-[1000px] select-none"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(initialOpen)}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        aria-label={`Open door to see ${puppy.name}`}
      >
        {/* Puppy photo revealed behind the door */}
        <div className="absolute inset-0 rounded-t-full rounded-b-xl overflow-hidden border-[3px] border-[#3b2010] bg-[#eedec5] shadow-[0_6px_0_#3b2010]">
          <Image
            src={puppy.image}
            alt={puppy.name}
            fill
            sizes="(max-width: 640px) 180px, 200px"
            className="object-cover transition-transform duration-500 group-hover/card:scale-110"
          />

          {/* View Profile Overlay Link */}
          <Link
            href={`/puppies/${puppy.slug}`}
            className="absolute inset-x-3 bottom-3 bg-[#faf6ef] hover:bg-white text-[#3b2010] text-xs font-black py-2 px-3 rounded-full text-center border-2 border-[#3b2010] shadow-[0_2px_0_#3b2010] active:translate-y-0.5 active:shadow-none transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            Meet {puppy.name} →
          </Link>
        </div>

        {/* The Swinging Wooden Door */}
        <div
          className={`absolute inset-0 rounded-t-full rounded-b-xl border-[3px] border-[#3b2010] ${doorColors[doorColor]} origin-left transition-transform duration-500 ease-out shadow-md flex flex-col justify-between p-4 ${
            isOpen ? "-rotate-y-80 shadow-2xl opacity-90" : "rotate-y-0"
          }`}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Inner embossed arch line */}
          <div className="absolute inset-2 rounded-t-full rounded-b-lg border border-white/20 pointer-events-none" />

          {/* Paw print imprint */}
          <div className="mx-auto mt-8 text-white/30 text-2xl select-none group-hover/card:scale-110 transition-transform">
            🐾
          </div>

          {/* Door knob with shine */}
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#f3c87e] border-2 border-[#3b2010] shadow-sm flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white opacity-80 -mt-1 -ml-1" />
          </div>

          {/* "Available" or "Reserved" Badge hanging on door */}
          <div className="absolute -top-1 -right-2 bg-white text-[#3b2010] text-[11px] font-black px-3 py-0.5 rounded-full border-2 border-[#3b2010] shadow-[0_2px_0_#3b2010] rotate-6 group-hover/card:rotate-12 transition-transform">
            {puppy.status}
          </div>

          <div className="mt-auto mb-2 text-center text-[10px] text-white/70 font-semibold uppercase tracking-wider">
            {isOpen ? "Peek inside" : "Tap to open"}
          </div>
        </div>
      </div>
    </div>
  );
}
