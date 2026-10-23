/**
 * TrustSection — "Why families trust TeddyPups" styled as an open sketchbook/binder
 * with vintage postal stamps and seals, grounded by a warm Dubai skyline silhouette.
 * Enhanced with Reveal scroll entrance animations.
 */
import Reveal from "./Reveal";

export default function TrustSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#a65625] relative overflow-hidden text-[#3b2010]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Open Sketchbook with Reveal */}
        <Reveal direction="scale" delay={150} duration={700}>
          <div className="bg-[#fbf7f0] rounded-3xl border-4 border-[#3b2010] shadow-[0_12px_0_#2b1810] p-6 sm:p-12 md:p-16 relative">
            {/* Notebook binder spine in center */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#3b2010]/15 -translate-x-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left Page: Title */}
              <div className="md:pr-8">
                <span className="font-handwriting text-2xl text-[#a85220] block mb-2">
                  peace of mind
                </span>
                <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-[#3b2010] tracking-tight leading-[1.1] mb-6">
                  Why families trust TeddyPups
                </h2>
                <p className="text-base text-[#3b2010]/80 leading-relaxed font-medium">
                  Bringing a puppy into your home is a lifetime commitment. We
                  treat every single adoption with unconditional love, medical
                  rigor, and complete transparency.
                </p>
                <div className="mt-8 font-handwritten text-xl text-[#a85220]">
                  certified ethical breeding 🐾
                </div>
              </div>

              {/* Right Page: 4 Vintage Stamps / Badges with Hover States */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:pl-4">
                {/* Stamp 1: Vet Checked */}
                <div data-cursor="card" className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#faf6ef] border-2 border-dashed border-[#a85220]/50 shadow-sm hover:rotate-2 hover:scale-105 transition-all duration-200 cursor-pointer">
                  <div className="w-14 h-14 rounded-full border-2 border-[#a85220] flex items-center justify-center text-xl text-[#a85220] mb-2 font-serif font-black">
                    🩺
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#3b2010] mb-1">
                    Vet-checked &amp; healthy
                  </h4>
                  <p className="text-xs text-[#3b2010]/80 leading-relaxed">
                    Every puppy comes vaccinated, dewormed, and with a verified
                    health certificate.
                  </p>
                </div>

                {/* Stamp 2: Korea to Dubai */}
                <div data-cursor="card" className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#faf6ef] border-2 border-[#1b6d4b]/40 shadow-sm hover:-rotate-2 hover:scale-105 transition-all duration-200 cursor-pointer">
                  <div className="w-14 h-14 rounded-full border-2 border-[#1b6d4b] flex items-center justify-center text-xl text-[#1b6d4b] mb-2 font-serif font-black">
                    ✈️
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#3b2010] mb-1">
                    Korea to Dubai, safely
                  </h4>
                  <p className="text-xs text-[#3b2010]/80 leading-relaxed">
                    Trusted breeders, safe travel, and premium care from start to
                    finish.
                  </p>
                </div>

                {/* Stamp 3: Support 24/7 */}
                <div data-cursor="card" className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#faf6ef] border-2 border-[#3b2010]/30 shadow-sm hover:-rotate-2 hover:scale-105 transition-all duration-200 cursor-pointer">
                  <div className="w-14 h-14 rounded-full border-2 border-[#3b2010] flex items-center justify-center text-xl text-[#3b2010] mb-2 font-serif font-black">
                    💬
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#3b2010] mb-1">
                    Support 24/7
                  </h4>
                  <p className="text-xs text-[#3b2010]/80 leading-relaxed">
                    Always here to help, from choosing your puppy to post-delivery
                    support.
                  </p>
                </div>

                {/* Stamp 4: Worldwide trust */}
                <div data-cursor="card" className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#faf6ef] border-2 border-dotted border-[#a85220] shadow-sm hover:rotate-2 hover:scale-105 transition-all duration-200 cursor-pointer">
                  <div className="w-14 h-14 rounded-full border-2 border-[#a85220] flex items-center justify-center text-xl text-[#a85220] mb-2 font-serif font-black">
                    🌐
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#3b2010] mb-1">
                    Trusted by families
                  </h4>
                  <p className="text-xs text-[#3b2010]/80 leading-relaxed">
                    Puppies delivered to loving homes across the UAE and worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Dubai Skyline Silhouette & Sunset Glow */}
        <Reveal direction="up" delay={300}>
          <div className="mt-12 relative flex flex-col items-center justify-end">
            {/* Sunset Sun with gentle glow pulse */}
            <div className="w-28 h-28 rounded-full bg-[#f4cb84] absolute -top-8 opacity-80 blur-xs animate-pulse" />

            {/* Cartoon pup standing above skyline */}
            <div className="relative z-10 text-5xl animate-bounce-gentle -mb-2 select-none">
              🐩
            </div>

            {/* Stylized Skyline Graphic */}
            <div className="w-full h-16 bg-[#6b3515] rounded-t-xl relative overflow-hidden flex items-end justify-center px-4">
              <div className="flex items-end gap-2 w-full justify-around opacity-40">
                <div className="w-6 h-12 bg-white/20 rounded-t-sm" />
                <div className="w-4 h-8 bg-white/20 rounded-t-sm" />
                <div className="w-8 h-14 bg-white/20 rounded-t-sm" />
                <div className="w-5 h-10 bg-white/20 rounded-t-sm" />
                <div className="w-10 h-16 bg-white/20 rounded-t-sm" />
                <div className="w-4 h-9 bg-white/20 rounded-t-sm" />
                <div className="w-7 h-13 bg-white/20 rounded-t-sm" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
