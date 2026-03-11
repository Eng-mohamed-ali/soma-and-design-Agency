<div align="center">
  <h1>SOMA Design & Marketing</h1>
  <p><strong>Modern digital agency website built with React, Vite, and Tailwind CSS</strong></p>
  <p>
    <a href="https://eng-mohamed-ali.github.io/soma-and-design-Agency/"><strong>Live Demo</strong></a>
    ·
    <a href="https://github.com/Eng-mohamed-ali/soma-and-design-Agency"><strong>Repository</strong></a>
  </p>
</div>

---

## Overview

SOMA Design & Marketing is a professional agency website created to present digital services, portfolio work, training content, and contact options in a modern, responsive interface. The project focuses on clean design, smooth user experience, and strong presentation across desktop, tablet, and mobile devices.

This website was built with React and Vite, styled with Tailwind CSS, and enhanced with Framer Motion animations and Lucide icons.

---

## Features

* Responsive layout for mobile, tablet, and desktop
* Modern landing page with animated sections
* Dedicated pages for services, portfolio, courses, about, contact, privacy, and terms
* Smooth UI interactions using Framer Motion
* Reusable component-based architecture
* Floating WhatsApp contact button
* Clean navigation and structured page layout
* GitHub Pages deployment support

---

## Tech Stack

### Frontend

* React 19
* React DOM 19
* React Router DOM 7
* Vite 7

### Styling and UI

* Tailwind CSS via `@tailwindcss/vite`
* Framer Motion
* Lucide React
* PropTypes

### Tooling

* ESLint
* gh-pages
* npm

---

## Project Structure

```text
soma-and-design-Agency/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
└── vite.config.js
```

---

## Pages

* **Home** — main landing page and brand presentation
* **About** — company introduction and background
* **Services** — service offerings and highlights
* **Portfolio** — project showcase
* **Courses** — academy or learning section
* **Academy** — educational content section
* **Contact** — contact details and communication options
* **Privacy** — privacy policy page
* **Terms** — terms and conditions page
* **Not Found** — fallback page for invalid routes

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/Eng-mohamed-ali/soma-and-design-Agency.git
cd soma-and-design-Agency
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the Vite development server    |
| `npm run build`   | Builds the app for production         |
| `npm run preview` | Previews the production build locally |
| `npm run lint`    | Runs ESLint                           |
| `npm run deploy`  | Deploys the app to GitHub Pages       |

---

## Deployment

This project is configured for deployment to GitHub Pages.

### Deployment steps

1. Build the project:

```bash
npm run build
```

2. Deploy the generated `dist` folder:

```bash
npm run deploy
```

### Important configuration

The Vite configuration uses the repository name as the base path:

```js
base: '/soma-and-design-Agency/'
```

This is required for GitHub Pages deployment to work correctly.

Live site:

**[https://eng-mohamed-ali.github.io/soma-and-design-Agency/](https://eng-mohamed-ali.github.io/soma-and-design-Agency/)**

---

## Design Goals

* Professional visual presentation
* Strong readability and clean spacing
* Consistent user experience across pages
* Responsive behavior on smaller devices
* Smooth and modern interactions

---

## Notes

* If you use client-side routing on GitHub Pages, page refreshes on nested routes may require additional router configuration.
* Large bundles can be optimized later with lazy loading and code splitting.
* This project is a strong base for an agency website and can be expanded with backend integrations, CMS support, analytics, or contact form services.

---

## Future Improvements

* Add SEO metadata for every page
* Improve code splitting for performance
* Add form backend or email service integration
* Add project filtering and dynamic content loading
* Add admin dashboard or CMS integration
* Add testimonials and blog sections

---

## Contributing

If you want to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your work
5. Push the branch
6. Open a pull request

---

## License

This project is for portfolio and educational use unless a different license is added later.

---

## Author

**Mohamed Ali**

* GitHub: [https://github.com/Eng-mohamed-ali](https://github.com/Eng-mohamed-ali)
* Project Repo: [https://github.com/Eng-mohamed-ali/soma-and-design-Agency](https://github.com/Eng-mohamed-ali/soma-and-design-Agency)
* Live Site: [https://eng-mohamed-ali.github.io/soma-and-design-Agency/](https://eng-mohamed-ali.github.io/soma-and-design-Agency/)

---

<div align="center">
  <p>Built with care using React, Vite, Tailwind CSS, and Framer Motion.</p>
</div>
