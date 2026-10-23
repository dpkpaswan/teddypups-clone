/**
 * Footer — Site-wide footer with navigation, contact info, and copyright.
 * Features a warm brown background matching the reference site.
 */
import Link from "next/link";

const footerLinks = [
  { href: "/puppies", label: "Available puppies" },
  { href: "/happy-families", label: "Happy families" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Visit & contact" },
  { href: "/gone-home", label: "Gone home" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2b1810] text-[#faf6ef]">
      {/* Warm gradient transition strip */}
      <div className="h-2 bg-gradient-to-r from-[#a85220] via-[#eeb96a] to-[#a85220]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="w-10 h-10 rounded-full bg-[#f2e2cb] border-2 border-[#faf6ef] flex items-center justify-center text-xl">
                🐶
              </div>
              <span className="font-serif font-black text-2xl text-[#faf6ef]">
                TeddyPups
              </span>
            </Link>
            <p className="text-[#faf6ef]/80 text-sm leading-relaxed max-w-xs font-medium">
              Premium teacup puppies in Dubai. Every puppy is family — from our
              hands to your heart.
            </p>
            <p className="mt-4 font-handwriting text-[#eeb96a] text-xl">
              every puppy is family 🐶
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif font-bold text-lg text-[#faf6ef] mb-4">
              Quick links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#faf6ef]/75 hover:text-[#eeb96a] transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-serif font-bold text-lg text-[#faf6ef] mb-4">
              Get in touch
            </h3>
            <div className="space-y-3.5 text-sm text-[#faf6ef]/85 font-medium">
              <div>
                <span className="font-handwriting text-[#eeb96a] text-base block">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/971541676733"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#eeb96a] transition-colors underline font-bold"
                >
                  +971 54 167 6733
                </a>
              </div>
              <div>
                <span className="font-handwriting text-[#eeb96a] text-base block">
                  email
                </span>
                <a
                  href="mailto:teddypupsadmin@gmail.com"
                  className="hover:text-[#eeb96a] transition-colors underline"
                >
                  teddypupsadmin@gmail.com
                </a>
              </div>
              <div>
                <span className="font-handwriting text-[#eeb96a] text-base block">
                  showroom
                </span>
                <span>Downtown Dubai, UAE — open daily 10 AM–8 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-[#faf6ef]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#faf6ef]/60">
          <p>© 2026 TeddyPups. All rights reserved.</p>
          <p className="font-handwriting text-base text-[#eeb96a]">
            Made with 🤍 for puppy lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
