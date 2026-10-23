/**
 * ContactForm — Unique fill-in-the-blank letter style contact form
 * styled like "Dear TeddyPups," with stamp in top right.
 */
"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [topic, setTopic] = useState("Maltipoo puppies");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative bg-white rounded-3xl border-3 border-[#3b2010] p-6 sm:p-10 shadow-[0_8px_0_#3b2010]">
      {/* Postage Stamp on top right */}
      <div className="absolute top-6 right-6 w-14 h-16 rounded-md border-2 border-dashed border-[#a85220] bg-[#faf6ef] flex flex-col items-center justify-center p-1 rotate-3 shadow-xs">
        <span className="text-xl">🐾</span>
        <span className="text-[9px] font-bold text-[#a85220] uppercase mt-0.5">
          TeddyPups
        </span>
      </div>

      {submitted ? (
        <div className="py-12 text-center">
          <span className="text-5xl block mb-4">💌</span>
          <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#3b2010] mb-2">
            Letter received!
          </h3>
          <p className="text-sm text-[#3b2010]/80 max-w-sm mx-auto mb-6">
            Thank you, {name || "friend"}! Our Dubai team will message or call
            you on {phone || "your number"} very soon.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-[#a85220] underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="font-serif font-black text-2xl sm:text-3xl text-[#a85220] mb-4">
            Dear TeddyPups,
          </div>

          <div className="text-base sm:text-lg text-[#3b2010] leading-loose space-y-4 font-sans font-medium">
            {/* Name */}
            <div>
              <span>my name is </span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="your name"
                className="border-b-2 border-dashed border-[#3b2010]/40 focus:border-[#a85220] focus:outline-none px-2 py-0.5 text-[#3b2010] font-bold bg-transparent placeholder:text-[#3b2010]/30 min-w-[160px]"
              />
              <span>, and you can reach me on </span>
            </div>

            {/* Phone & Email */}
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+971 50 123 4567"
                className="border-b-2 border-dashed border-[#3b2010]/40 focus:border-[#a85220] focus:outline-none px-2 py-0.5 text-[#3b2010] font-bold bg-transparent placeholder:text-[#3b2010]/30 min-w-[160px]"
              />
              <span>or by email at </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="optional"
                className="border-b-2 border-dashed border-[#3b2010]/40 focus:border-[#a85220] focus:outline-none px-2 py-0.5 text-[#3b2010] font-bold bg-transparent placeholder:text-[#3b2010]/30 min-w-[150px]"
              />
              <span>.</span>
            </div>

            {/* City & Interest */}
            <div className="flex flex-wrap items-center gap-2">
              <span>I live in </span>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Dubai Marina"
                className="border-b-2 border-dashed border-[#3b2010]/40 focus:border-[#a85220] focus:outline-none px-2 py-0.5 text-[#3b2010] font-bold bg-transparent placeholder:text-[#3b2010]/30 min-w-[140px]"
              />
              <span>, and I&apos;m curious about </span>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="border-b-2 border-dashed border-[#3b2010]/40 focus:border-[#a85220] focus:outline-none px-2 py-1 text-[#3b2010] font-bold bg-[#faf6ef] rounded-md cursor-pointer text-sm"
              >
                <option value="Maltipoo puppies">Maltipoo puppies</option>
                <option value="Korean Teacup Pomeranians">
                  Korean Teacup Pomeranians
                </option>
                <option value="Teacup Poodles">Teacup Poodles</option>
                <option value="Cavapoo puppies">Cavapoo puppies</option>
                <option value="Shih Tzu puppies">Shih Tzu puppies</option>
                <option value="Visiting the Dubai showroom">
                  Visiting the Dubai showroom
                </option>
                <option value="Custom breed import">Custom breed import</option>
              </select>
              <span>.</span>
            </div>

            {/* Custom Notes */}
            <div className="pt-2">
              <span className="block mb-2 text-sm text-[#3b2010]/70">
                Additional questions or preferences:
              </span>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your home, preferred timing, or any specific questions..."
                className="w-full p-3 rounded-xl border-2 border-[#3b2010]/20 bg-[#faf6ef]/50 focus:border-[#a85220] focus:outline-none text-sm text-[#3b2010] placeholder:text-[#3b2010]/30 font-sans"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 flex items-center justify-between">
            <span className="font-handwriting text-sm text-[#3b2010]/70">
              with love &amp; wiggles 🐾
            </span>
            <button
              type="submit"
              id="contact-submit-btn"
              className="bg-[#1b6d4b] hover:bg-[#15573b] text-white font-bold text-sm sm:text-base px-8 py-3 rounded-full border-2 border-[#2b1810] shadow-[0_4px_0_#2b1810] active:translate-y-0.5 transition-all"
            >
              Send note →
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
