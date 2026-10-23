import { Suspense } from "react";
import PuppiesClient from "./PuppiesClient";

export const metadata = {
  title: "Available Puppies | TeddyPups Dubai",
  description:
    "Explore our collection of available teacup Maltipoo, Pomeranian, Poodle, Cavapoo, and Shih Tzu puppies in Dubai.",
};

export default function PuppiesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <span className="text-4xl animate-bounce-gentle">🐾</span>
            <p className="font-serif font-bold text-lg text-[#3b2010]">
              Loading puppies...
            </p>
          </div>
        </div>
      }
    >
      <PuppiesClient />
    </Suspense>
  );
}
