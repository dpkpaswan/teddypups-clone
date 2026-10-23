/**
 * HappyFamiliesPage (/happy-families) — "Our wall of happy endings"
 * Recreates the exact layout from reference screenshots with lined note reviews,
 * photo grid of puppies with their new families, and customer testimonials.
 */
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happy Families & Reviews | TeddyPups Dubai",
  description:
    "Our wall of happy endings. Read real stories and see heartwarming photos from families who adopted puppies from TeddyPups.",
};

const familyStories = [
  {
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&h=600&fit=crop",
    family: "The Sharma Family",
    location: "Jumeirah Islands, Dubai",
    puppy: "Cookie (Maltipoo)",
    date: "Adopted March 2026",
    quote:
      "Cookie has brought so much sunshine to our lives. The team at TeddyPups guided us through feeding and puppy-proofing. He is completely healthy and our children are obsessed!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
    family: "Aisha & Omar Al-Maktoum",
    location: "Saadiyat Island, Abu Dhabi",
    puppy: "Mochi (Korean Teacup Pom)",
    date: "Adopted February 2026",
    quote:
      "We were nervous about importing a teacup pup from Korea, but TeddyPups took care of every single permit, vaccine, and VIP flight detail. Mochi is tiny, healthy, and full of personality.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&h=600&fit=crop",
    family: "Elena Rostova",
    location: "Downtown Dubai",
    puppy: "Bruno (Apricot Toy Poodle)",
    date: "Adopted January 2026",
    quote:
      "Bruno does not shed at all and fits right into my apartment routine. The 24/7 WhatsApp support in the first week was priceless whenever I had a quick question.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop",
    family: "The Henderson Family",
    location: "The Springs, Dubai",
    puppy: "Bella (Cavapoo)",
    date: "Adopted November 2025",
    quote:
      "Bella is the gentlest soul with our toddlers. Thank you TeddyPups for running such an ethical and caring service in the UAE.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=800&h=600&fit=crop",
    family: "Dr. Tariq & Laila",
    location: "Sharjah, UAE",
    puppy: "Milo (Shih Tzu)",
    date: "Adopted October 2025",
    quote:
      "The health certificate was comprehensive and verified by our local clinic with flying colors. Highly recommend visiting their showroom!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=800&h=600&fit=crop",
    family: "Maya & Zayd",
    location: "Dubai Marina",
    puppy: "Coco (Teacup Pomeranian)",
    date: "Adopted August 2025",
    quote:
      "Every day with Coco is an adventure. We get stopped by people on the Marina Walk asking where we found such a rare teacup puppy!",
  },
];

export default function HappyFamiliesPage() {
  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        <div className="lg:col-span-7">
          <span className="font-handwriting text-2xl text-[#a85220] block mb-1">
            our wall of happy endings
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-6xl text-[#3b2010] tracking-tight mb-4 flex items-center gap-3">
            <span>Happy families</span>
            <span className="text-[#a85220] font-normal text-3xl sm:text-5xl">
              ♡
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#3b2010]/80 leading-relaxed font-medium max-w-xl mb-4">
            Nothing makes us happier than seeing our puppies in loving homes!
            Here are some beautiful moments shared by our amazing clients after
            welcoming their furry friends.
          </p>
          <span className="font-handwriting text-xl text-[#a85220] font-bold block">
            64 moments and counting
          </span>
        </div>

        {/* Featured Note with Blue Tape */}
        <div className="lg:col-span-5">
          <div className="relative bg-[#fffdfa] rounded-2xl p-6 sm:p-8 border-3 border-[#3b2010] shadow-[0_6px_0_#3b2010] rotate-1">
            {/* Blue tape strip */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#a5cde3] opacity-90 border-t border-b border-[#3b2010]/20 -rotate-1 pointer-events-none" />

            {/* Note lines */}
            <p className="text-sm sm:text-base text-[#3b2010] italic leading-relaxed mb-6 font-serif">
              &ldquo;TeddyPups truly made our dream a reality. They supported us
              at every step of the import journey. Our Maltipoo arrived healthy,
              cheerful, and absolutely perfect. Having 24/7 support throughout
              the process gave us complete peace of mind.&rdquo;
            </p>

            <div className="font-handwriting text-lg text-[#3b2010] font-bold">
              Sarah M., Dubai, UAE
            </div>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
        {familyStories.map((story, idx) => (
          <div
            key={idx}
            data-cursor="card"
            className="bg-white rounded-3xl border-3 border-[#3b2010] shadow-[0_6px_0_#3b2010] overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-transform cursor-pointer"
          >
            {/* Story Image */}
            <div className="relative h-60 w-full overflow-hidden bg-[#faf6ef]">
              <Image
                src={story.image}
                alt={story.family}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#3b2010] text-xs font-black px-3 py-1 rounded-full border border-[#3b2010] shadow-sm">
                {story.puppy}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#e07830] text-xs mb-2">
                  {"★".repeat(5)}
                </div>
                <p className="text-sm text-[#3b2010]/85 italic leading-relaxed mb-6">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#3b2010]/10 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#3b2010]">
                    {story.family}
                  </h3>
                  <span className="text-xs text-[#3b2010]/70">
                    {story.location}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-[#a85220]">
                  {story.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Share your story CTA */}
      <div className="bg-[#eedbbd] rounded-3xl border-3 border-[#3b2010] shadow-[0_8px_0_#3b2010] p-8 sm:p-12 text-center max-w-3xl mx-auto">
        <span className="text-4xl mb-2 inline-block">📸</span>
        <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#3b2010] mb-3">
          Adopted from TeddyPups?
        </h2>
        <p className="text-sm sm:text-base text-[#3b2010]/80 max-w-md mx-auto mb-6">
          We love seeing our puppies thrive! Send us a photo or video on
          WhatsApp to be featured on our wall of happy endings.
        </p>
        <a
          href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20Here's%20an%20update%20photo%20of%20our%20puppy!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1b6d4b] hover:bg-[#15573b] text-white font-bold text-sm sm:text-base px-8 py-3 rounded-full border-2 border-[#2b1810] shadow-[0_4px_0_#2b1810]"
        >
          Share on WhatsApp
        </a>
      </div>
    </div>
  );
}
