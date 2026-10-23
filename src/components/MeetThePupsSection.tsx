/**
 * MeetThePupsSection — Homepage section displaying interactive door cards for available pups.
 * Enhanced with Reveal scroll animations and tactile CTA button.
 */
import Link from "next/link";
import PuppyDoorCard from "./PuppyDoorCard";
import Reveal from "./Reveal";
import { getAvailablePuppies } from "../data/puppies";

export default function MeetThePupsSection() {
  const availablePuppies = getAvailablePuppies().slice(0, 5);

  const doorColors: ("caramel" | "dark" | "ochre")[] = [
    "caramel",
    "dark",
    "ochre",
    "caramel",
    "dark",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#faf6ef] border-b-2 border-[#3b2010]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row with Reveal */}
        <Reveal direction="up" delay={100}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <h2 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-[#3b2010] tracking-tight">
                Meet the pups
              </h2>
              <p className="text-base sm:text-lg text-[#3b2010]/80 mt-2 font-medium">
                Real puppies, real photos, looking for their families right now.
              </p>
            </div>

            <Link
              href="/puppies"
              id="meet-pups-all-btn"
              className="self-start md:self-auto inline-flex items-center justify-center bg-[#a85220] hover:bg-[#8d4218] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-full border-2 border-[#2b1810] shadow-[0_4px_0_#2b1810] active:translate-y-1 active:shadow-[0_1px_0_#2b1810] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_0_#2b1810]"
            >
              See all available puppies
            </Link>
          </div>
        </Reveal>

        {/* Door Cards Display with Floor Base */}
        <div className="relative">
          {/* Mascot puppy with speech bubble */}
          <div className="hidden xl:flex flex-col items-center absolute -left-16 bottom-10 z-10">
            <div className="bg-white text-[#3b2010] font-handwriting text-xs font-bold py-1 px-3 rounded-full border-2 border-[#3b2010] shadow-[0_2px_0_#3b2010] mb-1 animate-float-gentle">
              coming?
            </div>
            <div className="text-5xl select-none animate-bounce-gentle">
              🐩
            </div>
          </div>

          {/* Staggered Door Cards Row */}
          <div className="flex items-end justify-start lg:justify-center gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 px-2 scrollbar-none">
            {availablePuppies.map((puppy, index) => (
              <Reveal
                key={puppy.slug}
                direction="up"
                delay={150 + index * 100}
                className="flex-shrink-0"
              >
                <PuppyDoorCard
                  puppy={puppy}
                  doorColor={doorColors[index % doorColors.length]}
                  initialOpen={index === 0}
                />
              </Reveal>
            ))}
          </div>

          {/* Wooden floor runner underneath */}
          <div className="w-full h-8 bg-[#dcb17a] border-t-2 border-b-2 border-[#3b2010] shadow-inner mt-1 rounded-sm flex items-center justify-between px-6">
            <div className="h-full border-r border-[#3b2010]/20 w-1/4" />
            <div className="h-full border-r border-[#3b2010]/20 w-1/4" />
            <div className="h-full border-r border-[#3b2010]/20 w-1/4" />
          </div>
        </div>
      </div>
    </section>
  );
}
