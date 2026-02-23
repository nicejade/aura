<div align="center">
  <a href="https://www.lovejade.cn/" target="_blank">
    <img width="80"
    src="https://github.com/nicejade/aura/blob/main/public/favicon.svg?raw=true">
  </a>
  <h1>Aura</h1>
  <p><strong>Build your digital aura.</strong></p>
  <p>
    A beautifully crafted, animation-rich personal homepage template.<br/>
    Designed to help you present your projects, blogs, and digital identity — with elegance.
  </p>

<a href="https://www.lovejade.cn/">Live Demo</a> · <a href="#getting-started">Get Started</a> · <a href="#customization">Customize</a>

<br/><br/>

  <img src="https://img.shields.io/badge/vue-3.5-4FC08D?logo=vuedotjs&logoColor=white" alt="Vue 3.5" />
  <img src="https://img.shields.io/badge/tailwindcss-3.3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3.3" />
  <img src="https://img.shields.io/badge/gsap-3.12-88CE02?logo=greensock&logoColor=white" alt="GSAP 3.12" />
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" />
</div>

<br/>

<p align="center">
  <img src="https://www.lovejade.cn/mockup.png" alt="Aura Preview" width="800" />
</p>

## Features

- **Scroll-Driven Animations** — Smooth reveal, zoom, and horizontal scroll effects powered by GSAP ScrollTrigger.
- **Fully Responsive** — Thoughtfully adapted across mobile (320px+), tablet (768px+), and desktop (1440px+).
- **Modular Sections** — Hero banner, project showcase, blog gallery, featured product highlight, and more — each as an independent Vue component.
- **SEO Ready** — Semantic HTML, Open Graph, Twitter Cards, and JSON-LD structured data built in.
- **Minimalist Aesthetic** — Clean layouts, gradient accents, generous whitespace, and custom typography.
- **Performance Optimized** — Lazy-loaded images, debounced handlers, and efficient animation triggers.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Vue 3](https://vuejs.org/) + [Vue Router 4](https://router.vuejs.org/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) + SCSS |
| Animation | [GSAP 3](https://gsap.com/) + ScrollTrigger |
| Build | [Vite](https://vite.dev/) |
| Extras | [medium-zoom](https://github.com/francoischalifour/medium-zoom) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 16
- [pnpm](https://pnpm.io/) (recommended) or npm

### Install & Run

```bash
# Clone the repository
git clone https://github.com/nicejade/aura.git
cd aura

# Install dependencies
pnpm install
# or: npm install

# Start development server
pnpm start
# or: npm start
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
pnpm build
```

Output will be generated in the `dist/` directory, ready for static hosting.

## Project Structure

```
aura/
├── index.html           # HTML entry (Vite) with SEO meta tags
├── public/
│   ├── images/          # Section images (banner, projects, blogs)
│   └── svgs/            # Social media & UI icons
├── src/
│   ├── assets/
│   │   ├── css/         # Global styles & Tailwind directives
│   │   ├── font/        # Custom typefaces
│   │   └── icons/       # Component-level icons
│   ├── components/
│   │   ├── Banner.vue          # Hero section
│   │   ├── ScrollReveal.vue    # Project showcase (scroll reveal)
│   │   ├── HorizontalScroll.vue # Blog gallery (horizontal scroll)
│   │   ├── ScrollZoom.vue      # Featured project (scroll zoom)
│   │   ├── Wechats.vue         # Social QR codes
│   │   ├── LifeSpent.vue       # Life visualization widget
│   │   ├── GPTWordbook.vue     # Interactive word cards
│   │   ├── Footer.vue          # Footer with links & social icons
│   │   └── Elevator.vue        # Scroll-to-top button
│   ├── helper/
│   │   └── utils.js     # Shared utilities
│   ├── views/
│   │   └── Home.vue     # Page composition
│   ├── router/          # Route definitions
│   ├── App.vue          # Root component
│   └── main.js          # Application entry
├── tailwind.config.js   # Tailwind theme & breakpoints
└── package.json
```

## Customization

Aura is designed as a starting point. Here's how to make it yours:

### 1. Branding

- **Site title & meta** — Edit `index.html` at project root to update the title, description, OG tags, and favicons.
- **Banner** — Modify `src/components/Banner.vue` to change the hero headline, tagline, and CTA link.
- **Colors** — Adjust the brand palette in `tailwind.config.js` under `selfCustomColors`.

### 2. Content

- **Projects** — Update the three project cards in `src/components/ScrollReveal.vue` with your own titles, descriptions, images, and links.
- **Blogs** — Edit the `BLOGS_LIST` array in `src/components/HorizontalScroll.vue`.
- **Featured project** — Replace the content in `src/components/ScrollZoom.vue`.
- **Footer links** — Modify `footerInfoArr` in `src/components/Footer.vue`.

### 3. Sections

Each section is a standalone Vue component imported in `src/views/Home.vue`. You can freely **reorder**, **remove**, or **add** sections:

```html
<template>
  <div class="page-container">
    <Banner />
    <!-- Add, remove, or reorder sections here -->
    <ScrollReveal />
    <HorizontalScroll />
    <footer />
  </div>
</template>
```

### 4. Images

Replace the static assets in `public/images/` with your own. Maintain the same dimensions for best results, or update the corresponding component styles.

### 5. Analytics

Swap the Google Analytics ID in `index.html` with your own, or remove the script entirely.

## Deployment

Aura outputs a static `dist/` folder. Deploy it anywhere:

| Platform | Command / Guide |
| --- | --- |
| [Vercel](https://vercel.com/) | Connect repo → auto-detected |
| [Netlify](https://www.netlify.com/) | Build command: `pnpm build`, publish dir: `dist` |
| [GitHub Pages](https://pages.github.com/) | Push `dist/` to `gh-pages` branch |
| [Cloudflare Pages](https://pages.cloudflare.com/) | Build command: `pnpm build`, output dir: `dist` |
| Any static host | Upload the `dist/` folder |

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Crafted with care by <a href="https://github.com/nicejade">nicejade</a></sub>
</div>
