# Excellence International School — Website Redesign

> **Dettroin Internship Assignment** | Web Development Track

A modern, fully responsive, high-performance redesign of [Excellence International School](https://excellenceinternationalschool.com/) — Aligarh's premier CBSE institution. Built with React 18 + Vite, replacing the original WordPress site with a blazing-fast, static web application featuring executive **Royal Navy Blue & Metallic Gold** aesthetics, authentic school photography, interactive widgets, and seamless navigation.

---

## 🔗 Live Links & Details

| Field | Details |
|-------|---------|
| **Live Production Demo** | 🚀 [https://dettroin-int-yash-website.vercel.app/](https://dettroin-int-yash-website.vercel.app/) |
| **GitHub Repository** | 📦 [Yashtyagi2406/DETTROIN-INT-YASH-Website](https://github.com/Yashtyagi2406/DETTROIN-INT-YASH-Website) |
| **Original Website** | 🌐 [excellenceinternationalschool.com](https://excellenceinternationalschool.com/) |
| **Full Name** | Yash Tyagi |
| **Email** | yashxtyagi06@gmail.com |
| **GitHub Username** | [Yashtyagi2406](https://github.com/Yashtyagi2406) |

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|-----------|
| **Core** | React 18 (Hooks, Router v6, Suspense) |
| **Build Tool** | Vite 8 (Ultra-fast HMR & ~200ms production bundler) |
| **Styling** | Vanilla CSS (CSS Modules + Global Tokens) |
| **Design System** | Executive Royal Navy (`#0b1a30`) & Metallic Gold (`#d4af37`) Palette |
| **Icons** | React Icons (`FontAwesome`) |
| **Typography** | Playfair Display & Plus Jakarta Sans (Google Fonts) |
| **Deployment** | Vercel (CI/CD Automated Deployment) |

---

## 📄 Site Structure & Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | 6-Slide Home Banner Carousel, Animated Ticker, About Snippet, Academic Stages, Interactive Age & Admission Calculator, Why Choose Us, Legacy Stats, Testimonials, FAQ Accordion, CTA Banner |
| **About Us** | `/about` | School Vision & Mission, 4 Educational Pillars, Authentic Academic Framework, Leadership, Values |
| **Academics** | `/academics` | Dynamic Hero backgrounds for Pre-Primary (`/academics/pre-primary`), Primary (`/academics/primary`), Middle (`/academics/middle`), and Daycare (`/academics/daycare`) |
| **Admissions** | `/admissions` | Step-by-step Procedure, Fee Structure, Interactive Admission Enquiry Form (`/admissions/enquiry`) |
| **School Facilities**| `/facilities` | 8 Detailed Facility Cards (Smart Classrooms, Science/Tech Labs, Library, Sports Complex, GPS Buses, 24/7 Security) |
| **Gallery** | `/gallery` | 27 authentic school photos grid with 60fps GPU zoom hover & modal Lightbox popup |
| **Blog** | `/blog` | Articles on CBSE curriculum, holistic development, and parenting advice |
| **Contact Us** | `/contact` | Official Ramghat Road Address, Phone (+91 7055582117), Interactive Contact Form, Google Maps Embed |

---

## ✨ Key Features & Enhancements

- 🎨 **Executive Royal Navy & Metallic Gold Design**: Redesigned from scratch with rich Sapphire Navy gradients (`#060f1e` → `#0b1a30` → `#173b6c`), geometric gold line patterns, and metallic gold action buttons (`#d4af37`).
- 🖼️ **100% Authentic Imagery & Branding**: Integrated real school logo, 6 original website home banner slides, classroom photos across Pre-Primary, Primary, Middle, and Daycare stages, and 27 original school gallery photos.
- 🧮 **Interactive Admission & Age Calculator**: Parents can select their child's grade (Playgroup to Class VIII) to calculate age eligibility, timings, key subjects, and book a campus visit with 1 click.
- ⚡ **Floating Quick Actions FAB Dock**: Bottom-left glassmorphic floating action bar for instant Phone Call (`+91 7055582117`), Google Maps Directions, and Admission Enquiry.
- 💬 **WhatsApp Float Button**: Fixed bottom-right direct WhatsApp chat link (`+91 7055582117`).
- 📍 **Exact Official Address & Map Pin**: Pinned to *Excellence International School, Ramghat Road, Aligarh 202001, Uttar Pradesh*.
- ⚡ **Blazing Fast Performance**: Zero WordPress overhead, pure static bundle building in ~200ms with instant page switches.

---

## 🗂️ Project Architecture

```
src/
├── components/
│   ├── Navbar/               # Navbar with topbar info & dropdowns
│   ├── Footer/               # 4-column footer with official contacts
│   ├── TickerBanner/         # Infinite marquee achievement ticker
│   ├── AdmissionCalculator/ # Interactive grade & age eligibility tool
│   ├── FloatingQuickActions/# Quick call, maps & enquiry FAB dock
│   ├── WhatsAppButton/       # Floating WhatsApp chat trigger
│   └── ScrollToTop/          # Automatic scroll reset on route change
├── pages/
│   ├── Home/
│   │   └── sections/        # HeroSection (carousel), AboutSnippet, AcademicStages,
│   │                        # WhyChooseUs, StatsSection, Testimonials, FAQSection, CTABanner
│   ├── About/               # School Vision/Mission, Pillars & Academic System
│   ├── Academics/           # Dynamic hero backgrounds per stage
│   ├── Admissions/          # Step-by-step procedure & interactive form
│   ├── Facilities/          # 8 detailed school facility cards
│   ├── Gallery/             # 27 photo grid & lightbox modal
│   ├── Blog/                # Educational articles
│   └── Contact/             # Form, Google Maps iframe & info cards
├── index.css                # Global CSS variables & design tokens
└── App.jsx                  # Root router layout
```

---

## 🚀 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/Yashtyagi2406/DETTROIN-INT-YASH-Website.git

# Navigate into directory
cd "Dettroin Assignment"

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

*Made with ❤️ by Yash Tyagi — Dettroin Web Development Internship 2026*
