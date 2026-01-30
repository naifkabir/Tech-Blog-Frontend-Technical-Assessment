# 🧠 Tech Blog – Frontend Technical Assessment

A modern, fast, and SEO‑optimized tech blog built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. The project demonstrates best practices in frontend architecture, accessibility, performance optimization, and technical SEO.

> ⚡ Built with a strong focus on **quality over speed**, while also embracing **AI-assisted development** as a practical tool in today’s fast‑moving engineering workflows.

---

## 🔗 Live Demo & Repository

- **Live URL (Vercel):** [https://tech-blog-website-sigma.vercel.app/]
- **GitHub Repository:** [https://github.com/naifkabir/Tech-Blog-Frontend-Technical-Assessment]

---

## 📌 Project Overview

This project is a single‑page tech blog application that fetches and displays articles from a public API. Users can search articles, filter them by category, and read full content in an accessible modal — all while maintaining excellent SEO and Lighthouse scores.

The goal was to simulate a **real‑world production frontend**, not just a demo.

---

## 🛠️ Technology Stack

- **Next.js (App Router)** – Server Components, Metadata API, SEO routes
- **TypeScript** – Strict typing for maintainability and safety
- **Tailwind CSS** – Utility‑first styling for speed and consistency
- **shadcn/ui** – Accessible, headless UI components (Dialog, Select, Card, Button)
- **Next/Image** – Image optimization and performance
- **Vercel** – Deployment and hosting

### 🤖 AI‑Assisted Development

AI tools were intentionally used during development to:

- Accelerate boilerplate creation
- Validate SEO and accessibility best practices
- Cross‑check Lighthouse optimization strategies

This mirrors modern professional workflows where AI is used as a **productivity multiplier**, not a replacement for engineering judgment.

---

## ✨ Features

### 🏠 Home Page

- Header, Hero section, Article grid (10 posts), Footer
- Responsive layout:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns

### 🔍 Search

- Search across **title**, **description**, and **content**
- Real‑time result count
- Graceful “No results found” state

### 🗂 Category Filter

- Dynamically generated from API data
- Implemented using **shadcn/ui Select**
- Active category state
- Works together with search (combined filtering)

### 🪟 Article Modal

- Full article content displayed in a modal
- Built using **shadcn/ui Dialog**
- Supports:
  - ESC key
  - Overlay click
  - Keyboard navigation

- Accessible and focus‑trapped

### 📱 Accessibility

- Semantic HTML (`header`, `main`, `section`, `article`, `time`)
- Keyboard navigation (Tab / Enter / ESC)
- Proper heading hierarchy (single H1)
- WCAG AA color contrast

---

## 🔍 SEO Strategy

### 1️⃣ Meta Tags

Implemented using Next.js Metadata API:

- Page title (≤ 60 characters)
- Meta description (≤ 160 characters)
- Open Graph tags (title, description, image)
- Twitter Card metadata

### 2️⃣ Semantic HTML

- Proper HTML5 landmarks
- Clear document structure for screen readers and crawlers
- Logical heading order (H1 → H2 → H3)

### 3️⃣ Structured Data (JSON‑LD)

#### WebSite Schema (Homepage)

- Helps search engines understand the site as a whole

#### Article Schema (Blog Modal)

- Injected dynamically when an article is opened
- Includes title, description, image, publish date, and author

This improves search visibility and eligibility for rich results.

### 4️⃣ Image Optimization

- All images use Next.js `<Image />`
- Fixed dimensions to prevent layout shift
- Lazy loading by default
- Descriptive `alt` text for accessibility and SEO

### 5️⃣ Technical SEO

- `robots.txt` generated via App Router metadata
- `sitemap.xml` auto‑generated
- Clean, flat URL structure
- HTTPS via Vercel

---

## ⚡ Performance Optimizations

- Server‑side data fetching (Server Components)
- No client‑side fetching for initial content
- Minimal JavaScript on the client
- Optimized images and fonts
- Skeleton loaders instead of spinners

---

## 📊 Lighthouse Scores

Screenshots are included in the `/screenshots` directory:

- ✅ Performance: **90+**
- ✅ SEO: **95+**
- ✅ Accessibility: **85+**
- ✅ Best Practices: **90+**

> Lighthouse was run in Chrome using a production build.

---

## 🧠 Search & Filter Logic

- Articles are fetched once from the API
- Filtering is performed client‑side
- Search and category filters are combined into a single predicate
- Case‑insensitive matching across multiple fields

This approach avoids unnecessary re‑fetching while remaining performant for the dataset size.

---

## 🚧 Challenges Faced

- Configuring external images for `next/image`
- Implementing structured data correctly with modals
- Balancing accessibility with custom UI components
- Ensuring Lighthouse scores remained high while using rich UI elements

Each challenge was addressed using Next.js and shadcn best practices.

---

## ▶️ Getting Started Locally

```bash
npm install
npm run dev
```

Then open: [http://localhost:3000](http://localhost:3000)

---

## 📌 Final Notes

This project reflects:

- Modern frontend engineering standards
- Real‑world SEO and accessibility considerations
- Practical use of AI tools to improve developer productivity

Thank you for reviewing! 🙌
