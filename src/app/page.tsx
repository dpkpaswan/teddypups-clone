/**
 * Homepage (/) — Recreates the full TeddyPups landing page.
 * Sections:
 * 1. Hero with headline, dual CTAs, and arched puppy photo strip
 * 2. "Meet the pups" grid with swinging 3D wooden doors
 * 3. Local vs Imported ("Two ways home") comparison
 * 4. 3-step journey with interactive smartphone WhatsApp preview
 * 5. Trust cards (Why families trust TeddyPups with vintage stamps)
 * 6. Testimonials on taped sticky notes with happy family photos
 * 7. FAQ preview on corkboard pinboard
 * 8. Closing CTA with WhatsApp and puppy browsing buttons
 */
import HeroSection from "../components/HeroSection";
import MeetThePupsSection from "../components/MeetThePupsSection";
import LocalVsImportedSection from "../components/LocalVsImportedSection";
import JourneySection from "../components/JourneySection";
import TrustSection from "../components/TrustSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import ClosingCtaSection from "../components/ClosingCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero section */}
      <HeroSection />

      {/* 2. Meet the pups (swinging door cards) */}
      <MeetThePupsSection />

      {/* 3. Local in Dubai vs Imported */}
      <LocalVsImportedSection />

      {/* 4. 3-step journey with WhatsApp phone mockup */}
      <JourneySection />

      {/* 5. Trust cards & stamps */}
      <TrustSection />

      {/* 6. Testimonials & happy families */}
      <TestimonialsSection />

      {/* 7. FAQ preview */}
      <FaqSection limit={4} />

      {/* 8. Closing CTA */}
      <ClosingCtaSection />
    </div>
  );
}
