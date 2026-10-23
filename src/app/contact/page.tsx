/**
 * ContactPage (/contact) — Visit & contact TeddyPups Dubai.
 * Layout:
 * - Left: Direct contact methods (WhatsApp pill, telephone, email, showroom hours)
 * - Right: "Dear TeddyPups" letter form
 */
import ContactForm from "./ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit & Contact | TeddyPups Dubai",
  description:
    "Get in touch with TeddyPups in Dubai. Visit our showroom or chat with us on WhatsApp for questions, appointments, and puppy adoptions.",
};

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Info & WhatsApp */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h1 className="font-serif font-black text-4xl sm:text-6xl text-[#3b2010] tracking-tight mb-4">
              Get in touch <br />
              with us
            </h1>
            <p className="text-sm sm:text-base text-[#3b2010]/80 leading-relaxed font-medium">
              Have questions about our puppies or adoption process? Fill out the
              form, and our team will get back to you promptly. Whether ready to
              adopt or just seeking info, we&apos;d love to hear from you!
            </p>
          </div>

          {/* Big WhatsApp CTA Button */}
          <div>
            <a
              href="https://wa.me/971541676733"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-direct"
              className="inline-flex items-center gap-2.5 bg-[#1b6d4b] hover:bg-[#15573b] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full border-2 border-[#2b1810] shadow-[0_5px_0_#2b1810] active:translate-y-1 transition-all"
            >
              <span>WhatsApp +971 54 167 6733</span>
            </a>
          </div>

          {/* Contact Details List */}
          <div className="space-y-6 pt-4 border-t-2 border-[#3b2010]/15">
            <div>
              <span className="font-handwriting text-base text-[#a85220] block mb-0.5">
                call us
              </span>
              <a
                href="tel:+971541676733"
                className="text-base sm:text-lg font-bold text-[#3b2010] hover:text-[#a85220] underline transition-colors"
              >
                +971 54 167 6733
              </a>
            </div>

            <div>
              <span className="font-handwriting text-base text-[#a85220] block mb-0.5">
                email
              </span>
              <a
                href="mailto:teddypupsadmin@gmail.com"
                className="text-base sm:text-lg font-bold text-[#3b2010] hover:text-[#a85220] underline transition-colors"
              >
                teddypupsadmin@gmail.com
              </a>
            </div>

            <div>
              <span className="font-handwriting text-base text-[#a85220] block mb-0.5">
                showroom location
              </span>
              <p className="text-sm sm:text-base font-bold text-[#3b2010]">
                Downtown Dubai / Business Bay, Dubai, UAE
              </p>
              <p className="text-xs text-[#3b2010]/70 mt-1">
                Open daily: 10:00 AM – 8:00 PM (By Appointment)
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Letter Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
