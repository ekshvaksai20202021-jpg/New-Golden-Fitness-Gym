# Gym Prototype

A multi-page, frontend-only prototype website for a gym. Designed for high performance, dynamic animations, and easy re-branding.

## Tech Stack
- React 18 + Vite
- React Router v6
- Tailwind CSS
- Framer Motion (Page Transitions & Interactions)
- GSAP + ScrollTrigger (Scroll Animations)
- Lenis (Smooth Scrolling)
- React Helmet Async (SEO)

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## RE-BRAND IN 2 MINUTES

This entire prototype is driven by a single configuration file: `/src/config/site.js`.

To re-brand the gym for a new client, you **do not** need to edit the components. Simply open `/src/config/site.js` and change the following values:

- `gymName`, `tagline`
- `city`, `address`, `phone`, `whatsappNumber`, `email`, `instagram`, `mapEmbedUrl`, `openingHours`
- `colors.accent` (The primary pop color, defaults to Acid Lime `#C6FF00`)
- `colors.background` (Defaults to Near Black `#0A0A0A`)
- `colors.foreground` (Defaults to Off White `#F2EFE9`)
- Content arrays: `programs`, `trainers`, `membershipPlans`, `offers`, `testimonials`, `galleryImages`, `faqs`

*Note: All current content and images are dummy placeholders for demonstration purposes.*
