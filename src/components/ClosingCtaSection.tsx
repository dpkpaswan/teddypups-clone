/**
 * ClosingCtaSection — Warm closing banner inviting users to adopt or message on WhatsApp.
 */
import Link from "next/link";

export default function ClosingCtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf6ef] relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow */}
        <span className="font-handwriting text-2xl sm:text-3xl text-[#a85220] block mb-2">
          start your story today
        </span>

        {/* Main CTA Heading */}
        <h2 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-[#3b2010] tracking-tight leading-[1.1] mb-6">
          Ready to meet your new <br className="hidden sm:inline" />
          little family member?
        </h2>

        <p className="text-base sm:text-lg text-[#3b2010]/80 max-w-xl mx-auto mb-10 font-medium">
          Our Dubai team is ready to welcome you to our showroom, answer every
          question, and introduce you to your next best friend.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/puppies"
            id="closing-cta-puppies-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#a85220] hover:bg-[#8d4218] text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-full border-2 border-[#2b1810] shadow-[0_5px_0_#2b1810] active:translate-y-1 active:shadow-[0_2px_0_#2b1810] transition-all"
          >
            Browse available puppies
          </Link>
          <a
            href="https://wa.me/971541676733"
            target="_blank"
            rel="noopener noreferrer"
            id="closing-cta-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1b6d4b] hover:bg-[#15573b] text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-full border-2 border-[#2b1810] shadow-[0_5px_0_#2b1810] active:translate-y-1 active:shadow-[0_2px_0_#2b1810] transition-all"
          >
            Message on WhatsApp
          </a>
        </div>

        {/* Playful cartoon companion */}
        <div className="mt-12 text-5xl animate-bounce-gentle select-none inline-block">
          🐩
        </div>
      </div>
    </section>
  );
}
