# CLAUDE.md — LionMindAI Landing Page

## Project Overview

**Agency:** LionMindAI  
**Founder:** Cédric  
**Tagline:** FOCUS. DISCIPLINE. GROWTH.  
**Core offer:** AI automation solutions for Dutch/English-speaking SMBs — primarily Benelux market  
**Primary CTA:** Book a discovery call  
**Tech stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion  
**Languages:** Bilingual — Dutch (primary) + English toggle  

LionMindAI is a founder-led AI agency that builds practical automation tools for real businesses: chatbots, voice AI, intake systems, scheduling tools. Not theoretical. Not agency fluff. Results that show up in the calendar and the bank account.

---

## Brand Identity

### Logo
- File: `/assets/ChatGPT Image 3 mei 2026, 15_13_53.png`
- Description: Split-face lion — left half is a realistic lion, right half is a digital brain circuit. All in Royal Gold on Midnight Black.
- Always render on dark backgrounds. Never invert. Never add drop shadows.
- Use full logo (lion + wordmark + tagline) in the navbar and footer.
- The wordmark reads: **LIONMIND AI** — "LIONMIND" bold, "AI" in a bracketed badge style
- Tagline beneath: **FOCUS. DISCIPLINE. GROWTH.** in spaced small caps

### Color System

| Name          | Hex       | Usage |
|---------------|-----------|-------|
| Midnight Black | `#0B0B0F` | Primary background — 80% of all surfaces |
| Royal Gold    | `#D4AF37` | Logo, headlines, primary buttons, borders on hero, section dividers |
| Pure White    | `#FFFFFF` | Body text, contrast text on dark sections |
| Steel Grey    | `#9CA3AF` | Subtext, meta labels, less critical UI |
| Electric Blue | `#2563EB` | Interactive only — links, hover states, focus rings — use sparingly |

**Color Rule:**  
80% Midnight Black / 15% Pure White / 5% Royal Gold  
Gold should feel *earned*. Only use it on the most important element per section. Do not scatter gold everywhere.

### Typography

| Role        | Font   | Weight | Notes |
|-------------|--------|--------|-------|
| Headlines (H1, H2) | Sora | 700–800 | Large, commanding — can go 72–96px on hero |
| Subheadings (H3, H4) | Sora | 600 | Section titles, card titles |
| Body text | Inter | 400–500 | Paragraph text, descriptions |
| Labels / Caps | Inter | 600 | Uppercase tracking, badges, nav items |
| Mono / code | JetBrains Mono | 400 | Only if showing tech stack or code snippets |

Import via Google Fonts: `Sora:wght@400;600;700;800` and `Inter:wght@400;500;600`.

### Design Principles

1. **Restraint over excess.** Every element earns its place. No decorative clutter.
2. **Gold is a weapon.** Use it once per section for maximum impact.
3. **Density signals expertise.** Avoid sparse "startup" layouts. Fill space with substance.
4. **Dark = premium.** The site should feel like a Bloomberg terminal meets a luxury brand.
5. **Motion is purposeful.** Animate to direct attention, not to entertain.
6. **Bilingual, not doubled.** Switching language is seamless — content adapts, layout never breaks.

---

## Site Architecture

### Single-Page Landing (sections scroll in order)

```
/ (root)
├── [lang] → nl (default) or en
│
├── Navbar (sticky, glass effect on scroll)
├── Section 1: Hero
├── Section 2: Problem Statement (The Cost of Standing Still)
├── Section 3: Services (What We Build)
├── Section 4: Case Studies / Proof (Real Results)
├── Section 5: How It Works (3-step process)
├── Section 6: About the Founder
├── Section 7: Tech Stack (credibility signal)
├── Section 8: FAQ
├── Section 9: Final CTA (Book Your Call)
└── Footer
```

### Additional Routes
- `/nl` — Dutch default
- `/en` — English version
- `/book` — Calendly embed or booking page (future)
- `/privacy` — Privacy policy (GDPR, Benelux)

---

## i18n / Bilingual Strategy

Use Next.js built-in i18n with `next-intl` or `next-i18next`.

**Default locale:** `nl` (Dutch)  
**Secondary locale:** `en` (English)

Language switcher: top-right of navbar — a simple `NL | EN` toggle. Active language in Royal Gold, inactive in Steel Grey.

### Copy Dictionary Structure

```ts
// messages/nl.json and messages/en.json
{
  "nav": { "services": "...", "results": "...", "about": "...", "cta": "..." },
  "hero": { "badge": "...", "h1": "...", "sub": "...", "cta_primary": "...", "cta_secondary": "..." },
  "problem": { ... },
  "services": { ... },
  "cases": { ... },
  "process": { ... },
  "about": { ... },
  "faq": { ... },
  "final_cta": { ... },
  "footer": { ... }
}
```

---

## Section-by-Section Specifications

---

### NAVBAR

**Behavior:**
- Transparent on load
- On scroll > 50px: glass morphism — `background: rgba(11,11,15,0.85)`, `backdrop-filter: blur(12px)`, thin gold border bottom `1px solid rgba(212,175,55,0.15)`
- Sticky at top, z-index 100

**Left:** LionMindAI logo (full logo, ~140px wide)  
**Center:** Navigation links — Services | Results | Process | About | FAQ  
**Right:** Language toggle (NL | EN) + "Book a Call" button (gold filled, Sora 600)

**Mobile:** Hamburger menu — slides in full-screen overlay in Midnight Black with gold accent lines

---

### SECTION 1: HERO

**Goal:** Immediately communicate what LionMindAI does, who it's for, and what to do next.

**Layout:** Full-viewport-height. Two columns on desktop (left: text, right: visual). Single column on mobile.

**Left column content:**

Badge (above headline):
```
🦁 AI Automation · Benelux
```
Small pill badge — gold border, gold text, black background

**H1 (Dutch):**
```
Jouw concurrent antwoordt al om 3 uur 's nachts.
```
**H1 (English):**
```
Your competitor already answers at 3am.
```

**Subheadline (Dutch):**
```
LionMindAI bouwt AI-systemen die leads kwalificeren, afspraken boeken en klanten opvolgen — terwijl jij slaapt. Geen hype. Geen bullshit. Alleen resultaten.
```
**Subheadline (English):**
```
LionMindAI builds AI systems that qualify leads, book appointments and follow up with clients — while you sleep. No hype. No bullshit. Just results.
```

**CTA buttons:**
- Primary: "Boek een gesprek" / "Book a Call" — gold filled, Sora 700, large
- Secondary: "Bekijk onze resultaten" / "See Our Results" — ghost button, white border, scroll-to anchor

**Right column visual:**
- Animated dashboard mockup or abstract lion + circuit graphic
- Gold particle animation on dark background (subtle, not distracting)
- OR: Full logo centered with slow pulse glow animation in gold

**Micro-detail:** A subtle animated counter beneath the CTA:
```
✓ 3 actieve klanten  ·  ✓ Gemiddeld €297/mo per systeem  ·  ✓ Benelux-specialist
```
Steel grey text, small, scrolling ticker or static.

**Background:** Pure `#0B0B0F`. No gradient. Possibly a subtle noise texture at 2–3% opacity.

---

### SECTION 2: PROBLEM STATEMENT

**Title (Dutch):** `Wat jouw bedrijf nu kost.`  
**Title (English):** `What your business is losing right now.`

**Layout:** 3-column card grid on desktop, stacked on mobile

**Cards (pain points):**

| Icon | Stat | Description (NL) | Description (EN) |
|------|------|---|---|
| 📞 | 62% | Van zakelijke oproepen na 18:00 gaan naar voicemail | Of business calls after 6pm go to voicemail |
| 💸 | €480 | Is de gemiddelde waarde van een gemiste lead in de dienstensector | Is the average missed lead value in the service sector |
| 🕐 | 4.2u | Verliest een ondernemer per dag aan handmatige opvolging | Lost daily by SMB owners on manual follow-up |

**Section tone:** This should feel like a punch. Short. Blunt. No padding.

**Below cards — a one-liner hook:**
```
NL: "Terwijl jij dit leest, pakt een concurrent die lead op."
EN: "While you're reading this, a competitor is picking up that lead."
```
Bold, centered, Royal Gold text. No button here. Let it breathe.

---

### SECTION 3: SERVICES — WHAT WE BUILD

**Title (NL):** `Wat wij bouwen.`  
**Title (EN):** `What we build.`

**Subtitle (NL):** `Geen generieke software. Systemen die werken voor jóuw bedrijf.`  
**Subtitle (EN):** `Not generic software. Systems that work for your specific business.`

**Layout:** 2x2 grid on desktop. Stacked on mobile. Each card has: icon, service name, 2-sentence description, "Meer info →" link in gold.

**Service Cards:**

**1. AI Chatbot & Intake Systeem**
```
NL: Vangt leads op 24/7, stelt kwalificatievragen en plant afspraken rechtstreeks in jouw agenda — volledig automatisch.
EN: Captures leads 24/7, asks qualifying questions and books appointments directly into your calendar — fully automated.
```
Tag: `Bewezen · €297/mo`

**2. AI Telefoonbeantwoording**
```
NL: Een voice AI die je telefoon opneemt na sluitingstijd, leads kwalificeert en urgente gevallen doorstuurt. Nooit meer een gemiste oproep.
EN: A voice AI that answers your phone after hours, qualifies leads and escalates urgent cases. Never miss a call again.
```
Tag: `Populair bij tandartsen & loodgieters`

**3. Automatische Klantenopvolging**
```
NL: E-mail- en SMS-sequenties die leads warm houden, offertes opvolgen en herboekingen triggeren — zonder dat jij een vinger uitsteekt.
EN: Email and SMS sequences that keep leads warm, follow up on quotes and trigger rebookings — without you lifting a finger.
```

**4. Custom AI Tools**
```
NL: Dashboards, beslissingstools en workflow-automaties op maat gebouwd voor jouw specifieke bedrijfsproces.
EN: Dashboards, decision tools and workflow automations custom-built for your specific business process.
```

**Card design:**
- Dark card: `#111118` background (slightly lighter than page bg)
- Gold top border, 2px
- Icon in gold (Lucide icons or custom SVG)
- On hover: card lifts slightly (`translateY(-4px)`), gold border glows subtly

---

### SECTION 4: CASE STUDIES / PROOF

**Title (NL):** `Echte resultaten. Echte bedrijven.`  
**Title (EN):** `Real results. Real businesses.`

**Layout:** 2 featured case studies side by side + 1 horizontal stat bar below.

**Case Study 1: Belgian Plumber**
```
Client: Loodgietersbedrijf · Antwerp region
System: AI chatbot + Google Calendar intake
Result: Vangt leads op na 18:00 / Automates booking / €297/mo recurring
Quote: "We hadden vorige week 4 nieuwe aanvragen via de chatbot. Allemaal geboekt zonder dat ik één bericht hoefde te sturen."
```

**Case Study 2: Dental Practice / Home Services**
```
Client: Tandartspraktijk · Benelux
System: AI voice answering service — after-hours lead qualification
Result: Kwalificeert spoedgevallen automatisch / Boekt urgente slots / Slaapt de eigenaar
```

**Stat bar (full-width, below cards):**
```
3 actieve klanten  ·  €297/mo gemiddeld per systeem  ·  <1 week implementatie  ·  0 gemiste leads 's nachts
```
Gold numbers, white labels, black background strip.

**Design note:** Case study cards should feel like mini editorial pieces. Not testimonials with star ratings. Real business outcomes, presented like a brief case file.

---

### SECTION 5: HOW IT WORKS

**Title (NL):** `Van gesprek tot systeem in minder dan een week.`  
**Title (EN):** `From conversation to live system in under a week.`

**Layout:** 3-step horizontal timeline on desktop, vertical on mobile

**Step 1: Intake gesprek (30 min)**
```
NL: We praten over jouw bedrijf, de bottlenecks en welk systeem de meeste impact heeft. Gratis, geen verplichtingen.
EN: We talk about your business, the bottlenecks and which system will have the most impact. Free, no obligations.
```

**Step 2: Bouw & configuratie (3–5 dagen)**
```
NL: We bouwen het systeem op basis van jouw processen. Jij ziet het live vóór het getest wordt op klanten.
EN: We build the system based on your processes. You see it live before it's tested on customers.
```

**Step 3: Live & schaalbaar**
```
NL: Je systeem gaat live. We monitoren, optimaliseren en schalen zodra de resultaten er zijn.
EN: Your system goes live. We monitor, optimise and scale once results are in.
```

**Each step:** Number in Royal Gold (large, Sora 800), title in white, description in Steel Grey. Connected by thin gold line/dots.

---

### SECTION 6: ABOUT THE FOUNDER

**Title (NL):** `Gebouwd door iemand die het begrijpt.`  
**Title (EN):** `Built by someone who gets it.`

**Layout:** Left: photo placeholder (circular, gold ring border) or logo mark. Right: copy.

**Copy (Dutch):**
```
Ik ben Cédric. Ik heb op de productievloer gewerkt bij Toyota. Ik weet hoe het voelt als je te druk bent om bij te houden, te weinig mensen hebt en elk gemist telefoontje geld kost.

LionMindAI bouwt geen oplossingen voor VC-backed startups. We bouwen voor loodgieters die om 22:00 nog bereikbaar willen zijn zonder hun avond op te geven. Voor tandartsen die nooit meer een spoedgeval willen missen. Voor ondernemers die écht willen groeien.

Geen groot agencyteam. Geen overhead. Alleen systemen die werken.
```

**Copy (English):**
```
I'm Cédric. I've worked on the production floor at Toyota. I know what it feels like to be too busy to keep up, understaffed, and watching every missed call cost you money.

LionMindAI doesn't build solutions for VC-backed startups. We build for plumbers who want to be reachable at 10pm without giving up their evening. For dentists who never want to miss an emergency. For business owners who actually want to grow.

No big agency team. No overhead. Just systems that work.
```

**Beneath:** Skills grid — 6 pills in steel grey with gold hover:
```
AI Product Scoping  ·  Python & Data Tools  ·  Voice AI  ·  Benelux Market  ·  Dutch/Flemish  ·  Rapid MVP Building
```

**Bottom of section — social proof line:**
```
"Actief trader · Toyota production floor ervaring · Benelux AI-specialist"
```

---

### SECTION 7: TECH STACK (Credibility Signal)

**Title (NL):** `Gebouwd op tools die werken.`  
**Title (EN):** `Built on tools that work.`

**Layout:** Single row of logos/badges, centered, muted — not a feature. A signal.

**Tools to show:**
- n8n / Make (automation)
- Voiceflow / VAPI (voice AI)
- OpenAI / Anthropic Claude (LLM)
- Google Calendar API
- Twilio (SMS/calls)
- Python / Streamlit (custom tools)
- Vercel (deployment)

**Design:** Grayscale logos on dark background. On hover: slight brightness increase + gold tint. No color. This section should be quiet.

---

### SECTION 8: FAQ

**Title (NL):** `Veelgestelde vragen.`  
**Title (EN):** `Frequently asked questions.`

**Layout:** Accordion — question in white Sora 600, answer in Steel Grey Inter 400. Gold `+` / `-` toggle icon.

**Questions:**

**NL/EN Q1:** Hoe snel kan een systeem live gaan? / How fast can a system go live?
```
In de meeste gevallen zijn we binnen 5 werkdagen live. We hebben al systemen opgeleverd in 3 dagen voor urgente situaties.
/ In most cases we're live within 5 working days. We've delivered systems in 3 days for urgent situations.
```

**NL/EN Q2:** Wat kost het? / What does it cost?
```
Instapmodellen starten vanaf €297/maand (recurring). Complexere systemen op offerte. We bespreken dit in het gratis intake-gesprek.
/ Entry models start from €297/month (recurring). Complex systems on quote. We discuss this in the free intake call.
```

**NL/EN Q3:** Heb ik technische kennis nodig? / Do I need technical knowledge?
```
Nul. We bouwen, configureren en onderhouden alles. Jij krijgt een systeem dat gewoon werkt.
/ Zero. We build, configure and maintain everything. You get a system that just works.
```

**NL/EN Q4:** Voor welke sectoren werken jullie? / What sectors do you work with?
```
Primair: dienstenbedrijven in de Benelux — loodgieters, elektriciens, tandartsen, schoonmaakbedrijven, lokale horeca. Maar ook breder als de use case klopt.
/ Primarily: service businesses in the Benelux — plumbers, electricians, dentists, cleaning companies, local hospitality. But also broader when the use case fits.
```

**NL/EN Q5:** Wat als het systeem niet werkt voor mijn bedrijf? / What if the system doesn't work for my business?
```
We doen een intake-gesprek vóór we iets bouwen. Als het niet de juiste fit is, zeggen we dat eerlijk. We nemen geen projecten aan die we niet kunnen waarmaken.
/ We do an intake call before we build anything. If it's not the right fit, we say so honestly. We don't take on projects we can't deliver.
```

---

### SECTION 9: FINAL CTA

**Layout:** Full-width, dark section with subtle gold gradient glow behind text (radial, very subtle, 10% opacity max).

**H2 (NL):** `Klaar om leads te stoppen met missen?`  
**H2 (EN):** `Ready to stop missing leads?`

**Sub (NL):** `Boek een gratis intake-gesprek van 30 minuten. Geen verplichtingen. Geen verkooppraat. Gewoon eerlijk advies.`  
**Sub (EN):** `Book a free 30-minute intake call. No obligations. No sales pitch. Just honest advice.`

**CTA Button:** "Boek een gesprek" / "Book a Call" — large, gold filled, Sora 700  
**Below button:** `📅 Gemiddelde responstijd: < 24 uur` / `📅 Average response time: < 24 hours` — Steel Grey, small

---

### FOOTER

**Layout:** 3 columns

**Column 1:** Logo + tagline (FOCUS. DISCIPLINE. GROWTH.) + short one-liner  
**Column 2:** Links — Services, Results, Process, About, FAQ, Book a Call  
**Column 3:** Contact — email (from Cédric's contact) + "Based in Belgium · Serving Benelux"

**Bottom bar:** `© 2026 LionMindAI · Privacy Policy · Alle rechten voorbehouden`

**Design:** Very minimal. No heavy footer. Gold divider line at top of footer only.

---

## Component Library

All components live in `src/components/`. Use this naming convention:

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── LanguageToggle.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── FounderSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── FinalCtaSection.tsx
│   └── ui/
│       ├── GoldButton.tsx
│       ├── GhostButton.tsx
│       ├── ServiceCard.tsx
│       ├── CaseStudyCard.tsx
│       ├── StatBar.tsx
│       ├── ProcessStep.tsx
│       ├── FaqItem.tsx
│       ├── Badge.tsx
│       └── SectionLabel.tsx
├── app/
│   ├── [locale]/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── messages/
│   ├── nl.json
│   └── en.json
└── lib/
    ├── i18n.ts
    └── constants.ts
```

---

## Animation Guidelines (Framer Motion)

**Principle:** Animate entrance and focus. Never animate decoration.

### Standard entrance animation (use for all sections):
```ts
const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}
```

### Stagger children (cards, steps):
```ts
const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}
```

### Gold glow on hover (buttons):
```css
box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
transition: box-shadow 0.3s ease;
```

### Counter animation (hero stats):
Use `react-countup` triggered when element enters viewport.

### Navbar scroll effect:
Use `useScroll` from Framer Motion to detect scroll position and apply glass morphism class.

**Never:** Parallax that breaks layout, infinite loops, autoplay carousels, animations > 600ms.

---

## Tailwind Configuration

```ts
// tailwind.config.ts
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0B0B0F',
        gold: '#D4AF37',
        white: '#FFFFFF',
        grey: '#9CA3AF',
        blue: '#2563EB',
        card: '#111118',
      },
      fontFamily: {
        headline: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-glow': 'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)',
      }
    }
  }
}
```

---

## Conversion Optimization Rules

1. **One CTA per section max.** The nav CTA, hero CTA, and final section CTA are the only gold buttons. Everywhere else: text links.
2. **No popups.** No exit-intent modals. No cookie banners that block content (minimal GDPR notice in footer link).
3. **Booking flow:** "Book a Call" button opens Calendly inline embed or navigates to `/book`. Do NOT open a mailto. Use a real calendar.
4. **Social proof proximity:** Place the stat bar (3 clients, €297/mo, <1 week) within visual range of every CTA.
5. **Trust signals:** Belgium flag micro-icon next to "Benelux specialist" text. Dutch-default language signals local relevance.
6. **Load order:** Hero must render < 1.5s. Defer all animations until after paint. No CLS on the headline.

---

## SEO & Metadata

```ts
// app/[locale]/layout.tsx metadata
export const metadata = {
  title: 'LionMindAI — AI Automation voor Benelux KMO\'s',
  description: 'LionMindAI bouwt AI-chatbots, voice AI en automatiseringssystemen voor Belgische en Nederlandse KMO\'s. Boek een gratis gesprek.',
  openGraph: {
    title: 'LionMindAI — AI Automation · Benelux',
    description: 'Van gemiste leads naar geautomatiseerde groei. Gebouwd voor KMO\'s in België en Nederland.',
    image: '/og-image.png', // 1200x630 branded image
    locale: 'nl_BE',
  },
  twitter: {
    card: 'summary_large_image',
  }
}
```

**Target keywords (Dutch):**
- AI automatisering België
- chatbot voor loodgieters
- AI telefoonbeantwoording tandarts
- lead automatisering KMO Benelux

---

## Performance Requirements

- Lighthouse score: ≥ 90 on all metrics
- LCP < 2.5s
- No layout shift on font load (use `font-display: swap` + preconnect to Google Fonts)
- Images: WebP format, `next/image` with proper sizing
- Logo: Serve as optimized PNG via `next/image`, also have SVG version if possible
- No unused CSS from Tailwind (purge is on by default in Next.js)

---

## Development Setup

```bash
# Initialize project
npx create-next-app@latest lionmindai --typescript --tailwind --app --src-dir

# Install dependencies
npm install framer-motion next-intl lucide-react react-countup

# Dev server
npm run dev

# Build
npm run build
```

**Environment variables:**
```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/lionmindai/discovery
NEXT_PUBLIC_DEFAULT_LOCALE=nl
```

---

## Deployment

Target: **Vercel** (zero-config Next.js)  
Domain: `lionmindai.be` or `lionmindai.com`  
Analytics: Vercel Analytics (built-in, no cookie consent required for basic metrics)

---

## Content Tone Guide

**Do:**
- Short sentences. Max 20 words per sentence.
- Lead with the outcome, not the feature.
- Use numbers whenever possible (€297, 3 days, 62%).
- Speak directly to the business owner, not to "companies".
- Dutch copy should sound natural, not translated from English.

**Don't:**
- "Cutting-edge AI-powered solutions that leverage..." → never
- Passive voice
- Hedging ("might help", "could potentially")
- Jargon the client wouldn't use themselves
- More than 3 words in a sentence that mean the same thing

**Voice example:**
```
Bad:  "Our advanced AI automation platform helps optimize your business processes."
Good: "Je telefoon neemt op om 23:00. Jij slaapt. De lead staat 's morgens in je agenda."
```

---

## What to Build First (Priority Order)

1. Project setup + Tailwind config + font imports
2. Navbar component (with language toggle placeholder)
3. Hero section (full, with animations)
4. i18n setup with Dutch and English dictionaries
5. Services section
6. Problem section
7. Case studies section
8. Process section
9. Founder section
10. FAQ section
11. Final CTA section
12. Footer
13. Mobile responsive pass (all sections)
14. Animation pass (Framer Motion on all sections)
15. SEO metadata + OG image
16. Performance audit

---

*Last updated: 2026-05-03 · Founder: Cédric · LionMindAI*
