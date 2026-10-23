/**
 * HowItWorksPage (/how-it-works) — Comprehensive guide on adopting from TeddyPups.
 * Features:
 * - 4-step quick anchor pills (Two ways home, Puppy promise, Delivery & collection, Why choose us)
 * - In Dubai vs Imported comparison
 * - Health promise & veterinary protocols
 * - Delivery logistics
 */
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | TeddyPups Dubai",
  description:
    "Learn about our ethical puppy adoption process, from showroom visits in Dubai to VIP international imports from South Korea.",
};

export default function HowItWorksPage() {
  const quickLinks = [
    { id: "two-ways", num: "1", title: "Two ways home" },
    { id: "promise", num: "2", title: "Our premium puppy promise" },
    { id: "delivery", num: "3", title: "Delivery & collection" },
    { id: "why-us", num: "4", title: "Why choose us" },
  ];

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <h1 className="font-serif font-black text-4xl sm:text-6xl text-[#3b2010] tracking-tight mb-4">
          How it works
        </h1>
        <p className="text-base sm:text-xl text-[#3b2010]/80 leading-relaxed font-medium">
          Whether you choose to visit us locally or order a premium breed from
          overseas, TeddyPups is here to make the experience unforgettable.
        </p>

        {/* Quick Nav Pills */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-8">
          {quickLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#faf6ef] text-[#3b2010] font-bold text-xs sm:text-sm px-4 py-2 rounded-full border-2 border-[#3b2010] shadow-[0_2px_0_#3b2010] transition-all"
            >
              <span className="text-[#a85220] font-serif font-black">
                {item.num}
              </span>
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Section 1: Two Ways Home */}
      <section
        id="two-ways"
        className="scroll-mt-28 py-12 border-t-2 border-[#3b2010]/15"
      >
        <span className="font-handwriting text-2xl text-[#a85220] block mb-1">
          choose your way
        </span>
        <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#3b2010] mb-8">
          Two ways home
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dubai Option */}
          <div className="bg-white rounded-3xl p-8 border-3 border-[#3b2010] shadow-[0_6px_0_#3b2010]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-serif font-black text-xl text-[#a85220]">
                Option A
              </span>
              <span className="bg-[#f2e2cb] text-[#3b2010] text-xs font-bold px-3 py-1 rounded-full border border-[#3b2010]">
                In Dubai
              </span>
            </div>
            <h3 className="font-serif font-black text-2xl text-[#3b2010] mb-3">
              Meet your puppy in person
            </h3>
            <p className="text-sm text-[#3b2010]/80 leading-relaxed mb-6">
              Our Dubai showroom is designed as a relaxing, stress-free haven
              where you can interact with available puppies in private play
              areas.
            </p>
            <ol className="space-y-3 text-xs sm:text-sm text-[#3b2010]/85 list-decimal list-inside">
              <li>Message us on WhatsApp to schedule an appointment.</li>
              <li>Spend unhurried time holding and playing with your puppy.</li>
              <li>Review the veterinary passport and health records together.</li>
              <li>Take your pup home immediately with our starter essentials pack.</li>
            </ol>
          </div>

          {/* Imported Option */}
          <div className="bg-white rounded-3xl p-8 border-3 border-[#3b2010] shadow-[0_6px_0_#3b2010]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-serif font-black text-xl text-[#a85220]">
                Option B
              </span>
              <span className="bg-[#f2e2cb] text-[#3b2010] text-xs font-bold px-3 py-1 rounded-full border border-[#3b2010]">
                Imported for you
              </span>
            </div>
            <h3 className="font-serif font-black text-2xl text-[#3b2010] mb-3">
              Order a rare teacup breed
            </h3>
            <p className="text-sm text-[#3b2010]/80 leading-relaxed mb-6">
              Looking for a specific color, miniature size, or bloodline? We
              partner with the finest ethical breeding kennels in South Korea and
              Europe.
            </p>
            <ol className="space-y-3 text-xs sm:text-sm text-[#3b2010]/85 list-decimal list-inside">
              <li>Tell us your dream breed, gender, and color preferences.</li>
              <li>We send curated video profiles and vet check results.</li>
              <li>Reserve your chosen puppy with a secure deposit.</li>
              <li>Receive weekly video updates while flight clearance is processed.</li>
              <li>VIP flight travel with in-cabin escort safely to Dubai.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 2: Puppy Promise */}
      <section
        id="promise"
        className="scroll-mt-28 py-12 border-t-2 border-[#3b2010]/15"
      >
        <span className="font-handwriting text-2xl text-[#a85220] block mb-1">
          our core values
        </span>
        <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#3b2010] mb-8">
          Our premium puppy promise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#fff9f0] p-6 rounded-2xl border-2 border-[#3b2010] shadow-[0_4px_0_#3b2010]">
            <div className="text-3xl mb-3">🩺</div>
            <h3 className="font-serif font-bold text-lg text-[#3b2010] mb-2">
              100% Health Guarantee
            </h3>
            <p className="text-xs text-[#3b2010]/80 leading-relaxed">
              Every puppy is backed by a 30-day viral and congenital health
              warranty so you adopt with total confidence.
            </p>
          </div>

          <div className="bg-[#fff9f0] p-6 rounded-2xl border-2 border-[#3b2010] shadow-[0_4px_0_#3b2010]">
            <div className="text-3xl mb-3">💉</div>
            <h3 className="font-serif font-bold text-lg text-[#3b2010] mb-2">
              Fully Vaccinated
            </h3>
            <p className="text-xs text-[#3b2010]/80 leading-relaxed">
              Age-appropriate core vaccines (DHPP), deworming cycles, and
              microchip registered to UAE veterinary standards.
            </p>
          </div>

          <div className="bg-[#fff9f0] p-6 rounded-2xl border-2 border-[#3b2010] shadow-[0_4px_0_#3b2010]">
            <div className="text-3xl mb-3">🏡</div>
            <h3 className="font-serif font-bold text-lg text-[#3b2010] mb-2">
              Zero Puppy Mills
            </h3>
            <p className="text-xs text-[#3b2010]/80 leading-relaxed">
              We exclusively work with vetted hobbyists and state-registered
              breeders who raise puppies in home environments.
            </p>
          </div>

          <div className="bg-[#fff9f0] p-6 rounded-2xl border-2 border-[#3b2010] shadow-[0_4px_0_#3b2010]">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-serif font-bold text-lg text-[#3b2010] mb-2">
              Lifetime Support
            </h3>
            <p className="text-xs text-[#3b2010]/80 leading-relaxed">
              Our WhatsApp support remains open forever. Feeding tips, training
              guidance, or vet recommendations — we are here.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Delivery & Collection */}
      <section
        id="delivery"
        className="scroll-mt-28 py-12 border-t-2 border-[#3b2010]/15"
      >
        <span className="font-handwriting text-2xl text-[#a85220] block mb-1">
          smooth transition
        </span>
        <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#3b2010] mb-8">
          Delivery &amp; collection
        </h2>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border-3 border-[#3b2010] shadow-[0_6px_0_#3b2010] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-[#3b2010]/10">
            <span className="text-3xl sm:text-4xl">🏢</span>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#3b2010]">
                Showroom Handover in Dubai
              </h3>
              <p className="text-xs sm:text-sm text-[#3b2010]/80 mt-1">
                Pick up your puppy directly from our boutique lounge in Business
                Bay. Complimentary valet parking is available.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-[#3b2010]/10">
            <span className="text-3xl sm:text-4xl">🚐</span>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#3b2010]">
                Chauffeured UAE Doorstep Delivery
              </h3>
              <p className="text-xs sm:text-sm text-[#3b2010]/80 mt-1">
                We safely deliver puppies across Dubai, Abu Dhabi, Sharjah, Al
                Ain, and Ras Al Khaimah in air-conditioned pet vans accompanied
                by a handler.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-3xl sm:text-4xl">🛫</span>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#3b2010]">
                VIP Airport Meet &amp; Greet
              </h3>
              <p className="text-xs sm:text-sm text-[#3b2010]/80 mt-1">
                For international clients, we arrange smooth airport clearance
                and personal pet handover at Dubai International Airport (DXB).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section
        id="why-us"
        className="scroll-mt-28 py-12 border-t-2 border-[#3b2010]/15"
      >
        <span className="font-handwriting text-2xl text-[#a85220] block mb-1">
          the TeddyPups difference
        </span>
        <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#3b2010] mb-8">
          Why choose us
        </h2>

        <div className="bg-[#eeb96a] rounded-3xl p-8 sm:p-12 border-4 border-[#3b2010] shadow-[0_8px_0_#2b1810] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#3b2010] mb-3">
              Ready to find your best friend?
            </h3>
            <p className="text-sm sm:text-base text-[#3b2010]/90 leading-relaxed">
              Browse our currently available puppies or message our concierge to
              inquire about upcoming litters.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/puppies"
              className="bg-[#2b1810] hover:bg-[#3d2317] text-white font-bold text-sm px-6 py-3 rounded-full text-center shadow-md transition-all"
            >
              Browse puppies
            </Link>
            <a
              href="https://wa.me/971541676733"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1b6d4b] hover:bg-[#15573b] text-white font-bold text-sm px-6 py-3 rounded-full text-center shadow-md transition-all"
            >
              WhatsApp concierge
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
