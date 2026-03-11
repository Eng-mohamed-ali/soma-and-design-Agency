I can see the issue - you're seeing the raw markdown code instead of the formatted README because the code block is visible. Here's the **clean, professional README** without the code block markers:

---

```markdown
<div align="center">
  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="SOMA Design & Marketing Logo" width="120" height="120" style="border-radius: 50%;">
  
  # SOMA Design & Marketing 🎨
  
  ### *Enterprise-Grade Digital Agency Platform*
  
  [![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://mohacoder.github.io/som)
  [![React](https://img.shields.io/badge/react-18.3.1-blue.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/vite-5.4.14-purple.svg)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/tailwind-4.0.0-38B2AC.svg)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/framer--motion-12.5.0-ff69b4.svg)](https://www.framer.com/motion/)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/mohacoder/som/pulls)
</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Responsive Design](#responsive-design)
- [Design System](#design-system)
- [Pages Overview](#pages-overview)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About The Project

SOMA Design & Marketing is a premium, enterprise-grade digital agency website built for institutions, NGOs, and government organizations across East Africa. The platform showcases professional services, portfolio projects, academy courses, and establishes digital credibility with a modern, luxurious interface.

### Why SOMA?

✅ **Institutional Focus** - Tailored for NGOs and government clients  
✅ **Af-Somali Support** - First platform with courses in Somali language  
✅ **Enterprise Credibility** - Trust indicators and professional design  
✅ **Conversion Optimized** - Strategic CTAs and user flow  
✅ **Performance First** - Lighthouse scores >90  

---

## ✨ Key Features

### 🎯 Core Functionality

| Feature | Description |
|---------|-------------|
| **Modern React Architecture** | Built with React 18 and Vite for optimal performance |
| **Type-Safe Development** | PropTypes for component reliability |
| **Dark/Light Mode** | Seamless theme switching with localStorage persistence |
| **Fully Responsive** | Flawless experience across all devices (mobile, tablet, desktop) |

### 🎨 UI/UX Excellence

- **Framer Motion Animations** - Smooth, professional page transitions and micro-interactions
- **Tailwind CSS** - Utility-first styling with custom design system
- **Glassmorphism Effects** - Modern, luxurious interface elements
- **Bento Grid Layouts** - Contemporary content organization
- **Custom Components** - Reusable UI library (Card, Button, Badge, etc.)

### 📱 Key Pages & Sections

```
HERO SECTION
• Dynamic parallax scrolling
• Animated headlines
• CTA buttons with hover effects

STATS & TRUST BADGES
• Live counter animations
• Partner organization logos

SERVICES GRID
• Interactive service cards
• Feature tags with hover states

PORTFOLIO GALLERY
• Filterable project showcase
• Case study cards with results

ACADEMY COURSES
• Course catalog with Af-Somali
• Pricing and curriculum preview

TEAM PROFILES
• Professional team member cards
• Social links and expertise tags

TESTIMONIALS CAROUSEL
• Auto-rotating success stories
• Client quotes with ratings

CONTACT FORM
• Formspree email integration
• Validation with error handling

FLOATING WHATSAPP
• Quick chat interface
• Pre-defined message templates
```

### 🔧 Technical Highlights

- **Code Splitting** - Lazy loading for optimal performance
- **Error Boundary** - Graceful error handling with user-friendly fallback
- **Scroll Restoration** - Smooth scroll behavior on route changes
- **SEO Optimized** - Semantic HTML and meta tags
- **Accessibility** - WCAG compliant with keyboard navigation

---

## 🛠️ Tech Stack

| Category | Technologies | Version |
|----------|-------------|---------|
| **Core** | React + Vite | 18.3.1 / 5.4.14 |
| **Routing** | React Router DOM | 7.3.0 |
| **Styling** | Tailwind CSS | 4.0.0 |
| **Animations** | Framer Motion | 12.5.0 |
| **Icons** | Lucide React | 0.477.0 |
| **Form Handling** | Formspree API | - |
| **Deployment** | GitHub Pages | - |
| **Package Manager** | npm | 10+ |

---

## 📁 Project Structure

```
som/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── PageWrapper.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── ServicesGrid.jsx
│   │   │   └── AcademyBento.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Badge.jsx
│   │       ├── ThemeToggle.jsx
│   │       └── FloatingWhatsApp.jsx
│   ├── data/
│   │   └── constants.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Courses.jsx
│   │   ├── Contact.jsx
│   │   ├── Terms.jsx
│   │   ├── Privacy.jsx
│   │   └── NotFound.jsx
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
└── tailwind.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Git** (v2.30 or higher)

### Installation

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/mohacoder/som.git
cd som
```

#### 2️⃣ Install dependencies

```bash
npm install
```

#### 3️⃣ Start development server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

#### 4️⃣ Build for production

```bash
npm run build
```

#### 5️⃣ Preview production build

```bash
npm run preview
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |

---

## 📱 Responsive Design

### Breakpoints

| Breakpoint | Device | Layout Strategy |
|------------|--------|-----------------|
| `< 640px` | Mobile | Single column, hamburger menu |
| `640px - 1024px` | Tablet | 2-column grids, optimized spacing |
| `> 1024px` | Desktop | Full layout, mega menu |

### Mobile Optimizations

- ✅ Touch-friendly buttons (44x44px minimum)
- ✅ Hamburger menu with smooth drawer animation
- ✅ Body scroll lock when menu open
- ✅ Responsive typography with `clamp()`
- ✅ Stacked layouts for better readability

---

## 🎨 Design System

### Colors

```css
/* Primary Colors */
--color-soma-cyan: #00E5FF;     /* Primary accent - buttons, highlights */
--color-soma-dark: #000000;      /* Dark background */
--color-soma-card: #0b0b0b;      /* Card background */
--color-soma-border: #1f1f1f;    /* Border color */

/* Semantic Colors */
--color-success: #10b981;        /* Success states */
--color-warning: #f59e0b;        /* Warning states */
--color-error: #ef4444;          /* Error states */
--color-info: #3b82f6;           /* Info states */
```

### Typography

```css
/* Font Family */
--font-primary: 'Plus Jakarta Sans', sans-serif;
--font-secondary: 'Inter', system-ui, sans-serif;

/* Type Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
```

### Spacing

```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
--spacing-2xl: 4rem;    /* 64px */
--spacing-3xl: 6rem;    /* 96px */
```

### Animations

```css
/* Timing */
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;

/* Easing */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

---

## 📄 Pages Overview

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home.jsx` | Hero section, stats, features, trust badges, CTA |
| `/about` | `About.jsx` | Company story, team profiles, values, timeline |
| `/services` | `Services.jsx` | Detailed service offerings with feature tags |
| `/portfolio` | `Portfolio.jsx` | Case studies, project gallery with filtering |
| `/courses` | `Courses.jsx` | Academy course catalog with search and filters |
| `/contact` | `Contact.jsx` | Contact form with validation, business info |
| `/terms` | `Terms.jsx` | Terms and conditions with table of contents |
| `/privacy` | `Privacy.jsx` | GDPR/CCPA compliant privacy policy |
| `*` | `NotFound.jsx` | 404 page with navigation options |

---

## 🌐 Deployment

### Deploy to GitHub Pages

#### Step 1️⃣ Update Configuration Files

**`vite.config.js`**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/som/', // Replace with your repository name
})
```

**`package.json`** (add these lines)

```json
{
  "homepage": "https://mohacoder.github.io/som",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### Step 2️⃣ Install gh-pages

```bash
npm install --save-dev gh-pages
```

#### Step 3️⃣ Deploy

```bash
npm run deploy
```

#### Step 4️⃣ Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Branch**, select `gh-pages`
3. Click **Save**
4. Wait 2-3 minutes for deployment

#### Step 5️⃣ Update Router (if needed)

```jsx
<BrowserRouter basename="/som">
  {/* Your routes */}
</BrowserRouter>
```

### Environment Variables

Create `.env` file:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
VITE_ANALYTICS_ID=your-analytics-id
```

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### Contribution Guidelines

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Coding Standards

- ✅ Follow existing code style
- ✅ Use PropTypes for component props
- ✅ Write meaningful commit messages
- ✅ Test across different devices
- ✅ Ensure dark mode compatibility

---

## 📝 License

Distributed under the **MIT License**.

```
MIT License

Copyright (c) 2024 SOMA Design & Marketing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact

### SOMA Design & Marketing

<div align="center">

| Method | Contact |
|--------|---------|
| **Website** | [https://mohacoder.github.io/som](https://mohacoder.github.io/som) |
| **Email** | [info@soma.design](mailto:info@soma.design) |
| **Phone** | [+358 45 174290](tel:+35845174290) |
| **WhatsApp** | [+358 45 1742902](https://wa.me/358451742902) |
| **GitHub** | [@mohacoder](https://github.com/mohacoder) |

### Social Media

[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/soma)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/soma)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/company/soma)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/soma)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/soma)

</div>

---

## 🙏 Acknowledgments

### Special Thanks To

- **[React](https://reactjs.org/)** - UI library
- **[Vite](https://vitejs.dev/)** - Build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide Icons](https://lucide.dev/)** - Icon set
- **[Unsplash](https://unsplash.com/)** - Stock images
- **[Formspree](https://formspree.io/)** - Form handling

### Resources

- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Cheat Sheet](https://tailwindcomponents.com/cheatsheet/)
- [Framer Motion Examples](https://www.framer.com/motion/examples/)

---

<div align="center">
  
  ### ⭐ If you found this project helpful, please give it a star! ⭐
  
  <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fmohacoder%2Fsom&countColor=%23263759" alt="Visitors">
  
  ---
  
  **Built with ❤️ by the SOMA Team**
  
  *© 2024 SOMA Design & Marketing. All rights reserved.*
  
  [⬆ Back to Top](#soma-design--marketing-)
  
</div>
```

---

6. **Fixed the back to top link** to work properly

Just copy this entire content and paste it directly into your README.md file - no code blocks needed!
