/**
 * Navbar — Recreates the signature TeddyPups navigation.
 * Desktop: Centered links with active paw indicator, logo badge, WhatsApp pill button.
 * Tablet & Mobile: "🐾 Menu" pill button opening full-screen warm golden drawer menu.
 * Features the signature scalloped bottom border.
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/puppies", label: "Puppies" },
  { href: "/happy-families", label: "Happy families" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Visit & contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        id="site-header"
        className={`sticky top-0 z-40 bg-[#faf6ef]/95 backdrop-blur-md transition-shadow duration-200 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo badge */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              id="brand-logo"
            >
              <div className="w-12 h-12 rounded-full bg-[#f2e2cb] border-2 border-[#3b2010] flex items-center justify-center shadow-[1px_2px_0px_#3b2010] group-hover:rotate-6 transition-transform">
                <span className="text-2xl" role="img" aria-label="puppy">
                  🐶
                </span>
              </div>
              <span className="font-serif font-black text-2xl tracking-tight text-[#3b2010]">
                TeddyPups
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    id={`nav-link-${link.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
                    className={`relative py-2 text-[15px] font-semibold transition-colors duration-150 flex flex-col items-center ${
                      isActive
                        ? "text-[#a85220] font-bold"
                        : "text-[#3b2010] hover:text-[#a85220]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Active paw print */}
                    {isActive && (
                      <span className="text-xs -mt-0.5 text-[#a85220] select-none animate-bounce-gentle">
                        🐾
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions: Desktop WhatsApp or Tablet/Mobile Menu button */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/971541676733"
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-btn"
                className="hidden lg:inline-flex items-center justify-center bg-[#1b6d4b] hover:bg-[#15573b] text-white text-sm font-bold px-6 py-2.5 rounded-full border-2 border-[#2b1810] shadow-[0_3px_0_#2b1810] active:translate-y-0.5 active:shadow-[0_1px_0_#2b1810] transition-all"
              >
                WhatsApp us
              </a>

              {/* Tablet & Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                id="menu-toggle-btn"
                aria-label="Open navigation menu"
                className="lg:hidden flex items-center gap-1.5 bg-[#faf5eb] hover:bg-[#f3ebd9] text-[#3b2010] border-2 border-[#2b1810] px-4 py-1.5 rounded-full text-sm font-bold shadow-[0_2px_0_#2b1810] active:translate-y-0.5 transition-all"
              >
                <span>🐾</span>
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Scallop Bottom Border */}
        <div
          className="w-full h-4 overflow-hidden pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 10px 0, transparent 0, transparent 8px, #faf6ef 8.5px)`,
            backgroundSize: "20px 16px",
            backgroundRepeat: "repeat-x",
          }}
        />
      </header>

      {/* Mobile/Tablet Fullscreen Drawer Overlay */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-50 bg-[#eeb96a] transition-all duration-300 flex flex-col justify-between p-6 sm:p-10 ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between">
          <span className="font-handwriting text-xl sm:text-2xl text-[#3b2010]">
            where to, friend?
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            id="mobile-close-btn"
            className="bg-[#2b1810] text-[#faf5eb] px-5 py-2 rounded-full font-bold text-sm hover:bg-[#3d2317] transition-colors"
          >
            Close
          </button>
        </div>

        {/* Big Retro Links */}
        <nav className="flex flex-col gap-4 sm:gap-6 my-auto">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-serif text-3xl sm:text-4xl md:text-5xl font-black transition-colors ${
                  isActive
                    ? "text-[#a85220]"
                    : "text-[#3b2010] hover:text-[#a85220]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/gone-home"
            onClick={() => setMenuOpen(false)}
            className={`font-serif text-3xl sm:text-4xl md:text-5xl font-black transition-colors ${
              pathname === "/gone-home"
                ? "text-[#a85220]"
                : "text-[#3b2010] hover:text-[#a85220]"
            }`}
          >
            Gone home
          </Link>
        </nav>

        {/* Drawer Footer */}
        <div className="flex flex-col items-center gap-3 pt-6 border-t border-[#3b2010]/15">
          <a
            href="https://wa.me/971541676733"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center bg-[#1b6d4b] hover:bg-[#15573b] text-white text-base sm:text-lg font-bold px-10 py-3.5 rounded-full border-2 border-[#2b1810] shadow-[0_4px_0_#2b1810] transition-transform active:translate-y-0.5"
          >
            WhatsApp us
          </a>
          <p className="text-xs text-[#3b2010]/80 font-medium">
            +971 54 167 6733
          </p>
        </div>
      </div>
    </>
  );
}
