# 🐾 TeddyPups U.A.E. — Clone

[![Next.js](https://img.shields.io/badge/Next.js-16.4.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A faithful, responsive recreation of the [TeddyPups Dubai](https://puppy.instabizweb.com/) website built from scratch using **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Featuring whimsical stationery aesthetics, custom interactive cursor physics, 3D swinging wooden door cards, URL-driven filtering, and smooth scroll animations.

---

## 🌟 Visual & Design Aesthetic

The application is styled with a warm stationery, sketchbook, and corkboard design system:
- **Palette**: Warm cream (`#faf6ef`), rich cocoa (`#3b2010`), toffee terracotta (`#a85220`), honey ochre (`#eeb96a`), and pine green (`#1b6d4b`).
- **Typography**: 
  - Serif headers powered by **Fraunces** (`font-serif`)
  - Whimsical handwritten notes powered by **Patrick Hand** (`font-handwriting`)
  - Clean, legible UI text powered by **Nunito** (`font-sans`)
- **Textures**: Notebook grid patterns, corkboard pinboard textures, taped sticky notes, postage stamps, and scalloped hem dividers.

---

## ✨ Key Interactive Features

### 1. 🐾 Whimsical Custom Cursor (`CustomCursor.tsx`)
- **Dual-Element Architecture**: Crisp inner target dot paired with a smooth trailing follower ring.
- **Physics**: Smooth 60+ FPS linear interpolation (`lerp` factor `0.18`) via `requestAnimationFrame` with zero mouse lag.
- **Context-Aware Hover States**:
  - **Links & Buttons**: Ring expands to 48px with toffee accent glow and reveals a mini `🐾` paw print.
  - **Cards & Doors** (`[data-cursor="card"]`): Ring expands to 64px with a golden glow and pulsing `🐾` badge.
  - **Active Press**: Dynamic compression (`scale-75`) on `mousedown` with spring release.
- **Accessibility & Hardware Support**:
  - Hides native OS cursor via `body.has-custom-cursor` only when active.
  - Pure touch device fallback (automatically hidden on phones/tablets without breaking Windows touchscreen laptops).
  - Honors `prefers-reduced-motion: reduce`.

### 2. 📜 Scroll Entrance Reveals (`Reveal.tsx`)
- Reusable component powered by `IntersectionObserver`.
- Configurable directions (`up`, `down`, `left`, `right`, `scale`, `fade`), delays, and durations.
- Optimized with an early viewport trigger (`rootMargin: "0px 0px 80px 0px"` and `threshold: 0.05`) ensuring smooth content reveals with zero screen lag.
- Gracefully renders immediately if the user prefers reduced motion.

### 3. 🚪 3D Swinging Door Cards (`PuppyDoorCard.tsx`)
- Arched wooden doors with brass door knob shines, status badges, and paw imprints.
- 3D CSS perspective swinging door (`-rotate-y-80`) with natural spring easing on hover or click.
- Reveals puppy photo and direct "Meet [Name] →" action link underneath.

### 4. 🖲️ Tactile 3D Buttons & Animations
- Physical button press states (`.btn-tactile`): Elevates on hover (`-translate-y-0.5` with deep `0 7px 0 #2b1810` drop shadow) and depresses on click (`active:translate-y-1`).
- Looping continuous marquee ticker strip in the hero banner.
- Subtle floating rhythm animations on speech bubbles and stickers (`animate-float-gentle`).

---

## 🗺️ Pages & Routing

| Route | Page | Key Features |
|---|---|---|
| `/` | **Home** | Arched hero photo strip, continuous marquee banner, "Meet the pups" 3D door cards, "Two ways home" local vs. imported switcher, 3-step numbered journey with interactive WhatsApp chat mockup, open sketchbook trust stamps, taped sticky note testimonials, FAQ preview, and closing CTA. |
| `/puppies` | **Catalog & Filtering** | Interactive URL search param filters (`?origin=`, `?breed=`, `?gender=`), responsive filter pill chips, circular sketchbook puppy cards with pastel halo frames, status badges, and video tags. |
| `/puppies/[slug]` | **Puppy Detail** | Dynamic puppy profile, interactive multi-photo gallery switcher, specification cards (breed, gender, age, origin, health), WhatsApp direct inquiry CTA, and related puppy suggestions. |
| `/happy-families` | **Happy Families** | Wall of happy endings featuring lined notebook review card, taped polaroid reviews with 5-star ratings, and customer photo grid. |
| `/how-it-works` | **How It Works** | 4-part concierge adoption guide (Two Ways Home, Puppy Promise, Safe Delivery & Collection, Why Choose Us) with quick-jump anchor pills. |
| `/faq` | **FAQ** | Corkboard pinboard accordion with colorful push pins and real-time live search filter ("sniff out a question"). |
| `/contact` | **Visit & Contact** | Nostalgic "Dear TeddyPups," fill-in-the-blank letter form with vintage postage stamp, showroom visit info, phone, and direct WhatsApp contact button. |
| `/gone-home` | **Gone Home** | Vintage perforated "Admit One" ticket cards with journey route details (`KOREA ────► HOME ♥`) and ticket booth mascot. |

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 16.4.2](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing, central types in `data/puppies.ts`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@theme inline` design tokens
- **Typography**: [Google Fonts](https://fonts.google.com/) (`next/font/google` with CSS variables for Fraunces, Patrick Hand, and Nunito)
- **Data Management**: Type-safe local data store in `data/puppies.ts` and `src/data/faq.ts`

---

## 📁 Project Structure

```
├── data/
│   └── puppies.ts             # Central puppy dataset (types, helper lookups, verified images)
├── public/                    # Static SVG assets & icons
├── src/
│   ├── app/
│   │   ├── contact/           # /contact letter-style form & page
│   │   ├── faq/               # /faq corkboard accordion & live search
│   │   ├── globals.css        # Design tokens, custom animations, tactile buttons, cursor rules
│   │   ├── gone-home/         # /gone-home vintage tickets page
│   │   ├── happy-families/    # /happy-families polaroids & reviews
│   │   ├── how-it-works/      # /how-it-works 4-part anchor guide
│   │   ├── layout.tsx         # Root layout (Fonts, Navbar, Footer, WhatsAppButton, CustomCursor)
│   │   ├── page.tsx           # Home page assembling all sections
│   │   └── puppies/
│   │       ├── page.tsx       # /puppies catalog with Suspense boundary
│   │       ├── PuppiesClient.tsx  # URL search param-driven filter client
│   │       └── [slug]/
│   │           ├── page.tsx   # Dynamic puppy detail page with instant App Shell
│   │           └── PuppyDetailClient.tsx # Interactive photo gallery & specs client
│   ├── components/
│   │   ├── ClosingCtaSection.tsx    # Adoption call-to-action banner
│   │   ├── CustomCursor.tsx         # Dual-element lerp tracking custom cursor
│   │   ├── FaqSection.tsx           # Corkboard FAQ accordion component
│   │   ├── Footer.tsx               # Warm dark cocoa brand footer with links
│   │   ├── HeroSection.tsx          # Arched image strip & continuous marquee ticker
│   │   ├── JourneySection.tsx       # 3-step adoption journey & phone chat mockup
│   │   ├── LocalVsImportedSection.tsx # Two ways home side-by-side comparison
│   │   ├── MeetThePupsSection.tsx   # Horizontal runner with 3D swinging door cards
│   │   ├── Navbar.tsx               # Sticky header with desktop paw indicator & mobile drawer
│   │   ├── PuppyCard.tsx            # Circular sketchbook puppy card with pastel halo
│   │   ├── PuppyDoorCard.tsx        # 3D interactive swinging wooden door card
│   │   ├── Reveal.tsx               # IntersectionObserver scroll animation wrapper
│   │   ├── TestimonialsSection.tsx  # Taped sticky note reviews
│   │   ├── TrustSection.tsx         # Open sketchbook binder with vintage stamps
│   │   └── WhatsAppButton.tsx       # Floating WhatsApp button with pulsing ring
│   └── data/
│       ├── faq.ts                   # FAQ Q&A dataset
│       └── puppies.ts               # Re-export of central puppy data
├── next.config.ts             # Next.js configuration (Remote image patterns)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or later
- npm, pnpm, or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/dpkpaswan/teddypups-clone.git
   cd teddypups-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## ⚡ Next.js 16 Optimizations & Best Practices

- **Instant App Shell Prerendering**: In [`src/app/puppies/[slug]/page.tsx`](file:///src/app/puppies/[slug]/page.tsx), `await params` resolution is isolated inside an inner component wrapped with `<Suspense>`, enabling instantaneous App Shell navigation during client route changes.
- **Largest Contentful Paint (LCP)**: Above-the-fold images in the Hero photo strip and the main Puppy Detail card utilize `loading="eager"` and `priority` to achieve near-instant initial paint times.
- **Route Scroll Behavior**: Equipped with `data-scroll-behavior="smooth"` on the `<html>` root to ensure smooth anchor scrolling while allowing instant scroll-to-top resets across route transitions.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
