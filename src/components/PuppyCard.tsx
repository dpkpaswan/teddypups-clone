/**
 * PuppyCard — The circular sketchbook-style card used on the /puppies page.
 * Features an offset pastel circular frame with hand-drawn style decorative flourishes,
 * "Available" badge, "▶ video" indicator, and puppy metadata.
 */
import Link from "next/link";
import Image from "next/image";
import { Puppy } from "../data/puppies";

interface PuppyCardProps {
  puppy: Puppy;
  colorScheme?: "cream" | "blue" | "green" | "gold";
}

export default function PuppyCard({
  puppy,
  colorScheme = "cream",
}: PuppyCardProps) {
  // Pastel halo colors matching the reference site
  const haloColors = {
    cream: "bg-[#eedbbd]",
    blue: "bg-[#d3e5eb]",
    green: "bg-[#d6e8dc]",
    gold: "bg-[#f4e2b8]",
  };

  return (
    <div className="flex flex-col items-center text-center group" data-cursor="card">
      {/* Circle Photo with Doodle Flourishes */}
      <Link
        href={`/puppies/${puppy.slug}`}
        className="relative block w-52 h-52 sm:w-56 sm:h-56 focus:outline-none"
        aria-label={`View details for ${puppy.name}`}
      >
        {/* Whimsical offset halo ring */}
        <div
          className={`absolute inset-0 rounded-full ${haloColors[colorScheme]} -rotate-6 scale-95 transition-transform duration-300 group-hover:scale-100 group-hover:rotate-0`}
        />

        {/* Hand-drawn scribble ring effect */}
        <div className="absolute -inset-1.5 rounded-full border-2 border-[#3b2010]/30 border-dashed pointer-events-none" />

        {/* The main circular puppy image */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-[#3b2010] shadow-[0_4px_0_#3b2010] bg-[#faf6ef]">
          <Image
            src={puppy.image}
            alt={puppy.name}
            fill
            sizes="(max-width: 640px) 210px, 230px"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* "Available" / "Reserved" Badge */}
        <span className="absolute top-1 right-1 bg-white text-[#3b2010] text-[11px] font-black px-3 py-0.5 rounded-full border-2 border-[#3b2010] shadow-[0_2px_0_#3b2010] rotate-6 z-10">
          {puppy.status}
        </span>

        {/* Video badge if video exists */}
        {puppy.hasVideo && (
          <span className="absolute bottom-2 left-2 bg-[#2b1810] text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm z-10">
            <span className="text-[9px]">▶</span> video
          </span>
        )}
      </Link>

      {/* Name and Details */}
      <div className="mt-4">
        <Link
          href={`/puppies/${puppy.slug}`}
          className="font-serif font-black text-xl sm:text-2xl text-[#3b2010] hover:text-[#a85220] transition-colors inline-block"
        >
          {puppy.name}
        </Link>
        <p className="text-xs sm:text-sm text-[#3b2010]/80 font-medium mt-1">
          {puppy.breed} · {puppy.gender.toLowerCase()} · {puppy.age}
        </p>
      </div>
    </div>
  );
}
