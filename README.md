# Excellence International School — Website Redesign

> **Dettroin Internship Assignment** | Web Development Track

A modern, fully responsive redesign of [Excellence International School](https://excellenceinternationalschool.com/) — Aligarh's top CBSE school. Built from scratch with React 18 + Vite, replacing the original slow WordPress/Elementor site with a blazing-fast, premium static web application.

---

## 👤 Intern Details

| Field | Value |
|-------|-------|
| **Full Name** | Yash Tyagi |
| **Intern ID** | Not yet assigned |
| **Email** | yashxtyagi06@gmail.com |
| **GitHub Username** | [Yashtyagi2406](https://github.com/Yashtyagi2406) |
| **Selected Website** | https://excellenceinternationalschool.com |
| **Live Demo** | *(Vercel URL — to be added after deployment)* |

---

## 🛠️ Technologies Used

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 |
| **Build Tool** | Vite 9 |
| **Routing** | React Router v6 |
| **Styling** | Vanilla CSS (CSS Modules) |
| **Animations** | CSS Keyframes + IntersectionObserver |
| **Icons** | React Icons (Font Awesome 5) |
| **Fonts** | Google Fonts — Playfair Display, Plus Jakarta Sans |
| **Deployment** | Vercel |

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero, About snippet, Programs, Why Choose Us, Stats, Testimonials, CTA |
| **About** | `/about` | History, Mission/Vision, Principal's Message, Timeline, Values, Team |
| **Gallery** | `/gallery` | Filterable masonry grid with lightbox (6 categories, 15 items) |
| **Contact** | `/contact` | Admission form, Info cards, Map, WhatsApp CTA, FAQ accordion |

---

## ✨ Key Improvements Made

### Design & UI
- ❌ **Original**: Generic Elementor template, flat colors, zero animations
- ✅ **Redesign**: Deep forest green + golden amber palette, glassmorphism, premium typography, Playfair Display headings

### Performance
- ❌ **Original**: ~3–5 second load (WordPress + Elementor overhead, 50+ HTTP requests)
- ✅ **Redesign**: ~200ms build time, <1s page load, 0 WordPress overhead (pure static)

### Animations
- ❌ **Original**: None
- ✅ **Redesign**: Typewriter hero text, scroll-triggered fade/slide animations, count-up stats counters, testimonial carousel, hover micro-animations

### Navigation
- ❌ **Original**: Basic WordPress nav
- ✅ **Redesign**: Glassmorphism sticky navbar with scroll progress bar, animated mobile hamburger overlay, top info bar

### Pages
- ❌ **Original**: Basic homepage + static pages
- ✅ **Redesign**: 4 fully built pages — Home (7 sections), About (6 sections), Gallery (filter + lightbox), Contact (form + FAQ)

### Responsiveness
- ❌ **Original**: Partially responsive (Elementor breakpoints)
- ✅ **Redesign**: Pixel-perfect at 375px, 768px, 1024px, and 1440px with CSS Grid + Flexbox

### Accessibility
- ✅ Semantic HTML5 (nav, main, section, footer)
- ✅ ARIA labels on all interactive elements
- ✅ Keyboard-navigable gallery lightbox (Escape, Arrow keys)
- ✅ Unique `id` attributes on all buttons/forms

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Navbar/          # Glassmorphism sticky nav with progress bar
│   ├── Footer/          # 4-column footer with socials
│   └── ScrollToTop/     # Route-change scroll reset
├── pages/
│   ├── Home/
│   │   └── sections/    # HeroSection, AboutSnippet, ProgramsSection,
│   │                    # WhyChooseUs, StatsSection, Testimonials, CTABanner
│   ├── About/           # Full about page with timeline
│   ├── Gallery/         # Filter tabs + masonry + lightbox
│   └── Contact/         # Form + map + FAQ accordion
├── index.css            # Global design system & CSS variables
└── App.jsx              # Root with React Router
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📊 Git Commit History

| # | Commit | Description |
|---|--------|-------------|
| 1 | `Initial project setup` | Vite + React + dependencies scaffolding |
| 2 | `Homepage completed` | Hero, Programs, Stats, Testimonials, CTA |
| 3 | `About page added` | Timeline, Values, Principal's message |
| 4 | `Gallery completed` | Masonry grid, filter tabs, lightbox |
| 5 | `Navbar implemented` | Scroll progress bar, route-aware nav |
| 6 | `Contact page created` | Form, map, WhatsApp CTA, FAQ |
| 7 | `Responsive improvements` | Mobile breakpoints, WhyChooseUs section |
| 8 | `Performance optimization` | Font loading, Vite config, CSS minify |
| 9 | `Bug fixes` | FaShield icon fix, build error resolution |
| 10 | `Add README.md` | Full project documentation |
| 11 | `Final deployment` | Vercel configuration + live URL |

---

## 🔗 Links

- **GitHub Repository**: https://github.com/Yashtyagi2406/DETTROIN-INT-YASH-Website
- **Original Website**: https://excellenceinternationalschool.com
- **Live Demo**: *(coming after Vercel deployment)*
- **Dettroin CEO LinkedIn**: https://www.linkedin.com/in/tarunverma-dettroin/
- **Dettroin Company**: https://www.linkedin.com/company/dettroin/

---

*Made with ❤️ by Yash Tyagi — Dettroin Web Development Internship 2026*
