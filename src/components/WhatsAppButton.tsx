/**
 * Floating WhatsApp chat button with pulsing green status and tooltip.
 * Fixed in the bottom-right corner across all pages.
 */
"use client";

import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-[#2b1810] text-[#faf5eb] px-3.5 py-1.5 rounded-full text-xs font-medium shadow-lg transition-all duration-300 pointer-events-none ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Ask us about puppies 🐶</span>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/971541676733"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with TeddyPups on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#1b6d4b] hover:bg-[#15573b] text-white rounded-full shadow-[0_6px_20px_rgba(27,109,75,0.4)] hover:shadow-[0_8px_25px_rgba(27,109,75,0.6)] transform hover:-translate-y-1 transition-all duration-300 border-2 border-[#2b1810]"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#1b6d4b]/30 animate-pulse pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current group-hover:scale-110 transition-transform duration-300 relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29" />
        </svg>

        {/* Online status indicator dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#1b6d4b] z-20" />
      </a>
    </div>
  );
}
