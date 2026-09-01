# The Vault — Vintage Designer Bag Catalog

A premium, fully static single-page catalog site for authenticated vintage designer bags.
Built with semantic HTML5, modern CSS, and vanilla JavaScript — no frameworks, no dependencies.

---

## Project Structure

```
the-vault/
├── index.html              ← Main page (open this in browser)
├── css/
│   └── styles.css          ← All styles (custom properties, layout, components)
├── js/
│   └── main.js             ← All JavaScript (nav, animations, form, tilt)
├── assets/
│   └── images/
│       ├── red-suede.jpg           ← Coach Red Suede Hamptons Satchel
│       ├── patchwork.jpg           ← Coach Patchwork Canvas Pochette
│       ├── fendi.jpg               ← Fendi Zucchino Jacquard Mini Baguette
│       ├── hobo.jpg                ← Coach Signature Crescent Hobo
│       ├── suede-panel.jpg         ← Coach Signature Suede Panel Baguette
│       ├── patchwork-leather.jpg   ← Artisan Multi-Leather Patchwork Hobo
│       └── cognac.jpg              ← Coach Heritage Saddle Baguette
└── README.md
```

---

## How to Open

### In a Browser (quick preview)
Just double-click `index.html` — it opens directly in any browser with no server needed.

### In VS Code (recommended)
1. Open the `the-vault/` folder in VS Code (`File → Open Folder`)
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already
3. Right-click `index.html` → **Open with Live Server**
4. The site opens at `http://127.0.0.1:5500` with hot-reload on save

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Markup     | Semantic HTML5                      |
| Styles     | Vanilla CSS — Grid, Flexbox, Custom Properties, `clamp()` |
| Scripts    | Vanilla JavaScript ES2020           |
| Fonts      | Google Fonts (non-blocking load)    |
| Images     | Local JPEG files                    |
| Icons      | Inline SVG (no external library)    |
| Nature art | Hand-coded inline SVG illustrations |

---

## Features

- **7 product cards** — 2 featured (full-width horizontal), 5 standard
- **Premium studio backgrounds** — individual radial-gradient per bag, colour-matched to each piece
- **Botanical SVG props** — rose bloom, calla lily, eucalyptus, autumn leaves, monstera leaf, wildflowers, flower vase, and human silhouette illustrations as studio props
- **CSS blend modes** — `mix-blend-mode: multiply` removes photo backgrounds on light-bg shots; `screen` for dark-bg shots
- **Sticky header** with blur backdrop on scroll
- **Mobile navigation** — hamburger toggle with ARIA states, closes on Escape key
- **Scroll spy** — active nav link updates as you scroll
- **Intersection Observer animations** — cards fade/slide up on scroll (no scroll event listeners)
- **3D card tilt** — subtle perspective tilt on mouse move (reduced-motion safe)
- **Contact form** — client-side validation with accessible error states and success message
- **Fully accessible** — skip link, ARIA landmarks, focus styles, semantic headings, `prefers-reduced-motion` support
- **Performance** — non-blocking fonts, `loading="lazy"` on below-fold images, passive scroll listeners, GPU-only animations (`transform`, `opacity`)

---

## Customisation

### Update a price
In `index.html`, find the `aria-label="Price: £XXX"` attribute on `.price-badge` and the `.price-display` span, and update both.

### Swap an image
Replace the file in `assets/images/` with a new JPEG of the same filename.

### Change a background colour
In `css/styles.css`, find the `.card-visual--[name]` class and update the `radial-gradient` values.

### Add a new bag
Copy any `<article class="product-card">` block in `index.html` and update the image path, alt text, name, description, and price.

---

## Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge (last 2 major versions).
