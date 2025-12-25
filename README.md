<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b598c890-9f78-4709-abdc-71c17f886206" /># 🌑 Midnight Glass

![License](https://img.shields.io/badge/license-MIT-6366f1?style=flat-square)
![Design](https://img.shields.io/badge/design-glassmorphism-cyan?style=flat-square)
![Vibe](https://img.shields.io/badge/vibe-atmospheric-f43f5e?style=flat-square)

> **"A digital garden wrapped in obsidian and light."**

**Midnight Glass** is a personal portfolio template designed for creatives who live in dark mode. It features a responsive bento-grid layout, a physics-based spotlight cursor effect, and deep, atmospheric styling without the bloat of heavy frameworks.

## 🔮 The Aesthetic

The design philosophy revolves around **immersion**:
* **The Void:** A deep `#050505` background heavily textured with SVG noise to prevent color banding and add grit.
* **The Spotlight:** A Javascript-driven radial gradient that tracks your mouse, revealing borders and inner glows only when you interact with them.
* **Liquid Glass:** Modals and panels use high-saturation blur filters (`backdrop-filter: blur(40px) saturate(180%)`) to create a premium, "Apple-dark-mode" feel.

## ✨ Features

* **🔦 Interactive Spotlight:** Cards react to cursor position, creating a dynamic lighting effect.
* **🍱 Bento Grid:** A masonry-style layout for showcasing skills, links, and stats.
* **🎵 Audio Visualizers:** Custom CSS animations simulating music equalizers (see `stellaris.html`).
* **📺 Static Noise:** TV-static animations for headers to give a retro-analog feel (see `series.html`).
* **⚡ Zero-Build:** Built with vanilla HTML/JS and Tailwind CSS (CDN). No `npm install` required.

## 📂 Project Structure

The project is modularized to share styles and logic across different "worlds" (pages):

```
/
├── index.html      # The Hub (Bento Grid)
├── blog.html       # The Log (Grid Layout)
├── series.html     # "The Watchlist" (TV/Anime Collection)
├── stellaris.html  # "Stellaris" (Music Collection)
├── style.css       # The Paint (Unified CSS variables & effects)
└── script.js       # The Brain (Spotlight logic & Modals)
```

### 🚀 Deployment

Since this uses a unified `style.css` and `script.js`, it is ready to be hosted on any static provider (GitHub Pages, Vercel, Netlify).

# Local Setup

1. Clone the repository:
Bash
```
    git clone https://github.com/cozyyuukii/midnight-glass.git
```
    
2. Open `index.html` in your browser.

# 🎨 Customization
Changing the Accent Color

The theme relies on Tailwind's color palette. To shift from Indigo to Emerald (for example):

1. Open `style.css`.
2. Find references to `indigo-500` colors in the `::selection` and `spotlight-card` styles.
3. Replace with `emerald-500` (hex `#10b981)`.

Adding Content

To add a new project to the Bento Grid in index.html:
```
<a href="#" class="spotlight-card group rounded-3xl p-8 ...">
    </a>
```
Note: The spotlight effect automatically attaches to any element with the class `spotlight-card`.

### 📄 Credits

Icons: [Font Awesome 6](https://fontawesome.com/)
Texture: [Grainy Gradients](https://grainy-gradients.vercel.app/)
Font: [Inter](https://rsms.me/inter/) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

<p align="center"> Crafted with ☕ and Code by <b>yuukii.</b> </p>
