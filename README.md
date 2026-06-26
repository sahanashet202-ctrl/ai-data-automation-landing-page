# AutoFlow — Premium AI Data Automation SaaS Landing Page

A production-ready, premium-quality SaaS landing page built with **Next.js 15** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**. Designed to match the visual quality of Stripe, Vercel, Linear, and Notion.

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)

---

## ✨ Features

### 🎨 Premium Design System
- Sleek dark mode with HSL-tuned colors and glassmorphism
- Custom CSS keyframe animations (float, glow, marquee)
- Gradient text utilities and ambient background glows
- Custom scrollbar styling
- Responsive across all device breakpoints

### 🧭 Responsive Navbar
- Glassmorphism blur effect on scroll
- Gradient CTA button with hover glow
- Mobile slide-over menu with smooth transitions

### 🚀 Interactive Hero Section
- Animated pipeline simulation dashboard
- 3-node workflow visualizer (Ingest → AI Parse → CRM Sync)
- Live console log panel with step-by-step progress
- Floating status cards with CSS animations

### 🧩 Features Section (Bento Grid + Accordion)
- **Desktop**: Interactive Bento Grid with active state highlighting
- **Mobile**: Accordion layout for the same feature set
- **State Preservation**: Active feature index is shared via React state — resizing the browser preserves which feature is selected

### 💰 Dynamic Pricing Engine
- **3 Plans**: Starter ($49), Professional ($129), Enterprise ($499)
- **Currency Switcher**: USD ($), EUR (€), INR (₹)
- **Billing Toggle**: Monthly / Annual (20% annual discount)
- **Dynamic Computation**: All prices are computed from a configuration object:
  - `basePriceMonthly` — base price in USD
  - `multiplier` — currency exchange rate
  - `regionalTariff` — purchasing power adjustment (e.g., 0.80 for INR)
  - `discount` — 20% annual discount
- **No hardcoded prices** — changing the config object updates all displayed values
- **Isolated rerenders** — only the Pricing component rerenders on currency/billing changes

### 💬 Testimonials
- Dual-row infinite marquee (CSS animation, no JS)
- Gradient fade edges for seamless looping
- Premium glassmorphism testimonial cards

### ❓ FAQ Accordion
- Smooth max-height CSS transitions
- Rotating plus/cross icon indicator
- Single-open accordion pattern

### 🦶 Footer
- Full-width conversion CTA block with gradient glow
- Newsletter email subscription form
- 4-column sitemap link grid
- Copyright bar with region indicator

### 🔍 SEO & Accessibility
- Semantic HTML5 elements throughout
- Proper heading hierarchy (single `<h1>`)
- Open Graph and Twitter Card metadata
- `lang="en"` and `colorScheme: "dark"` attributes
- Keyboard-accessible interactive elements

---

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind v4 theme, custom utilities, keyframes
│   ├── layout.tsx         # Root layout with SEO metadata & fonts
│   ├── page.tsx           # Landing page assembly
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx          # Glassmorphism navbar with mobile menu
│   ├── Hero.tsx            # Interactive hero with pipeline demo
│   ├── Features.tsx        # Bento grid (desktop) / Accordion (mobile)
│   ├── Pricing.tsx         # Dynamic multi-currency pricing engine
│   ├── Testimonials.tsx    # Dual-row infinite marquee
│   ├── FAQ.tsx             # Smooth accordion FAQ
│   └── Footer.tsx          # CTA block + sitemap footer
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested with v24)
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment
No environment variables are required. The project runs entirely client-side with static generation.

---

## 📐 Architecture Decisions

| Decision | Rationale |
|---|---|
| **No external UI libraries** | Zero dependency on Framer Motion, Shadcn, Radix, Headless UI, or Tailwind UI. All animations use native CSS keyframes and Tailwind utilities. |
| **Tailwind CSS v4 `@theme`** | Uses the new `@theme` directive for design tokens, `@utility` for custom classes, and `@keyframes` inside `@theme` for animations. |
| **Shared active index** | Features component uses a single `useState` for the active feature — both the Bento Grid (desktop) and Accordion (mobile) read from the same state, preserving selection on resize. |
| **Config-driven pricing** | A `PRICING_CONFIG` object defines base prices, currency multipliers, regional tariffs, and discount rate. The UI computes all displayed values dynamically. |
| **Static generation** | All pages are statically generated at build time. Client components (`"use client"`) are used only for interactive elements. |

---

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-brand-purple` | `hsl(262, 83%, 58%)` | Primary brand accent |
| `--color-brand-cyan` | `hsl(180, 100%, 50%)` | Secondary accent / highlights |
| `--color-brand-pink` | `hsl(325, 90%, 60%)` | Tertiary accent |
| `--background` | `#030712` | Page background (Neutral 950) |
| `--foreground` | `#f9fafb` | Text color (Neutral 50) |

---

## 📄 License

MIT License. Built for demonstration purposes.
