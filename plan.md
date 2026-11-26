
# Country Website Project Plan: Taiwan

> **For AI assistants reading this file:** this is the single source of truth for the project. Read sections 0 and 1 first, then the section for the task at hand. Follow the "Decisions" (section 12) over anything older. When a decision changes, update this file. Never invent licenses, creators or URLs: use only what the student confirms from the source page.

## 0. Quick Context and Current Status

- **Course assignment:** multi-page website about a place (student chose **Taiwan**). Plain HTML, CSS and a little JavaScript. **No templates or frameworks** (only a normalize/reset CSS file). Public GitHub repo. Content must be Creative Commons (or equivalent free-to-use, see section 9).
- **Student language:** Traditional Chinese speaker. **Website language: English only** (`lang="en"`).
- **Deadline:** none.
- **Status (update as you go):**
  - [x] Plan written and reviewed against the assignment requirements
  - [x] Visual direction chosen (section 5) and a home-page style preview made
  - [x] Wireframes for all 4 pages
  - [x] Images and video chosen, downloaded, license verified
  - [x] HTML, CSS, JS built
  - [x] Accessibility, responsive, validation passes
  - [x] Credits page complete
  - [ ] Public GitHub repo pushed

## 1. Project Overview

- **Topic:** Taiwan (country)
- **Pages:** 4 HTML pages (3 about Taiwan + 1 credits)
- **Visual style:** "Friendly travel guide": rounded hero photo, wave dividers between sections, soft pink and pale blue panels, deep navy text and buttons, lime accent, round badges and pill tags. The mood is inspired by a Japanese city tourism site (Obama City, Fukui, "Maruotto Obama") that the student liked, but the design must be **original**. Do not copy that site's logo, illustrations, text, photos or code. See section 5.1 for the style notes in words.
- **Media type:** exactly one `<video>` element
- **Technical constraints:** no HTML/CSS templates or frameworks; mobile-first CSS that works from 320px to 1920px; accessible; optimized media.

## 2. Site Structure

| Page | File | Purpose |
|------|------|---------|
| Home / Overview | `index.html` | Introduction to Taiwan, quick facts, featured video, quote, teaser links |
| Attractions | `attractions.html` | Key places to visit, images |
| Food | `food.html` | Famous dishes and night markets, table, contact form |
| Credits | `credits.html` | Attribution for all assets, code/font resources, AI tool used |

### Folder structure

```
taiwan-website/
├── index.html
├── attractions.html
├── food.html
├── credits.html
├── css/
│   ├── normalize.css
│   └── styles.css
├── js/
│   └── nav.js
├── fonts/
├── images/
├── video/
├── favicon/
├── plan.md
└── README.md
```

## 3. Required Elements Checklist and Placement

| Requirement | Planned location |
|-------------|------------------|
| One table | `food.html`: "Taiwanese dishes" table (dish / description / where to try it), with `<caption>`, `<thead>`, `<th scope>` |
| Two images (minimum) | `attractions.html` (several images with descriptive `alt`), plus a hero image on `index.html` |
| One video element | `index.html`: `<video controls>` (no autoplay) with `poster`, `preload="metadata"`, fallback text, an English transcript or text description on the page, and a WebVTT `<track kind="captions">` if the clip has speech or on-screen text |
| One blockquote | `index.html`: `<blockquote>` with `<cite>` (public-domain or CC source, short quote) |
| One contact form | `food.html`: a real *contact* form (name, email, optional "favourite dish" select, message, submit). Use `<label>`, `<fieldset>`/`<legend>` where grouping helps, proper input types, `required`, `autocomplete`, hint text, and `action` + `method` so it is valid. Needs no backend |
| Site navigation on all pages | `<nav>` inside the shared header, same links on every page (Home, Attractions, Food, Credits), `aria-current="page"` on the active link |
| SEO meta description | Unique `<meta name="description">` on every page |
| Required `<head>` basics | On every page: `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">` (needed for mobile-first), a unique `<title>`, favicon links, `site.webmanifest`, `<meta name="theme-color">` |
| Favicon (mobile, tablet, desktop) | `favicon.ico`, `favicon.svg`, `apple-touch-icon.png` (180×180), 192 and 512 px PNGs referenced in `site.webmanifest`, linked on all pages |
| External stylesheet | `css/styles.css` linked from all pages (plus `css/normalize.css`) |
| CSS Grid (at least once) | Attractions gallery layout and the home page quick-facts and "Pick up" cards |
| CSS Flexbox (at least once) | Header/navigation and footer |
| Custom font (at least one) | Nunito, **self-hosted** (`fonts/*.woff2`, `@font-face`, `font-display: swap`). Weights 600 and 800 only. Nunito is under the SIL Open Font License: credit it on `credits.html` |
| Skip-to-content link | First focusable element on every page, targeting `<main id="main">` |
| Credits page | Lists every asset, the page it is used on, creator and link, license, and the AI chat/resource used |

## 4. Page Content Plan

### 4.1 Home (`index.html`)
- Hero: title "Taiwan" + short tagline + hero image
- About Taiwan: location, population, capital, language, currency. Quick-facts grid (a `<dl>` styled with Grid is a good fit)
- Featured video with short description and transcript
- Blockquote with a short quote about Taiwan, with citation
- "Pick up" teaser cards (3) linking to Attractions and Food. They reuse photos from the attractions page
- Round navy section buttons ("What can you do in Taiwan?": Explore, Eat, Watch, Credits)

### 4.2 Attractions (`attractions.html`)
- Introduction paragraph
- 4–6 attractions as cards (e.g. Taipei 101, Taroko Gorge, Sun Moon Lake, Alishan, Jiufen, Tainan old streets/temples)
- Each card: image, heading, short description, best season to visit
- Grid layout; images lazy-loaded below the fold

### 4.3 Food (`food.html`)
- Introduction to Taiwanese food culture and night markets
- Table of signature foods (beef noodle soup, xiaolongbao, bubble tea, stinky tofu, oyster omelette, etc.). Romanized names only (e.g. "niu rou mian")
- Table must not break the 320px layout: wrap it in a container with `overflow-x: auto` (focusable with `tabindex="0"` and an accessible label) or restack rows on small screens
- Short section on famous night markets
- Contact form (see section 3)

### 4.4 Credits (`credits.html`)
- Per asset: name, creator (linked), source link, license (linked), **page(s) where it is used**
- Text sources section
- Code and font resources: normalize.css (name and link its license) and Nunito (OFL)
- AI chat/resource used (tool name, how it was used)
- Link to the GitHub repository
- Uses the same shared header, nav, skip link, favicon and meta description as other pages

## 5. Design Plan

### 5.1 Style notes (written description of the reference site, since images do not travel with this file)

The reference is a Japanese city tourism home page. Take only the *mood and layout ideas*, never the assets:
- Round logo badge at top-left overlapping the hero photo
- Navigation as a white panel with a wavy bottom edge, each item a small icon above a short label
- Large hero photo with rounded corners and a headline over a calm area (sky/water)
- A soft pink "Pick up" panel with a tilted heading and a row of image cards with short titles and small lime pill tags
- A wavy divider leading into a pale blue "About" section: text and info pills on the left, a simplified illustrated map with circular photo frames on the right
- A row of large round navy buttons with a dotted outer ring ("What can you do in …?")
- Navy footer/menu accents with lime highlights

**Deliberately not used (decided):** news ticker, survey banner, floating right-side menu, carousel (use a static 3-card grid instead: simpler and more accessible), and any "Plan a trip" / "Access" call-to-action tab in the header.

The reference screenshot is for the student's personal use only. Do not commit it to the public repo (keep it local or add it to `.gitignore`).

### 5.2 Colour palette (re-check contrast for WCAG AA)
- Page background: warm white `#FFFDF8`
- Main text, buttons and footer: deep navy `#12306B`
- Pale blue panels (About and buttons area): `#CFEAF0`
- Soft pink panel (Pick up): `#FDEFEC`
- Accent: lime `#C9D32E` (tags, circle button text on navy). Lime on white/cream is only about 1.6:1, so it fails WCAG for text and UI indicators. Always put navy text on lime, and make the active-nav marker navy (or navy plus lime), never lime alone
- Small label text on pale blue: teal `#1F6676`
- Illustration blues: `#6BBFCF`, sky `#A9DBE4`, sea `#2C7F94`
- White `#FFFFFF` for pills, nav panel and logo badge

### 5.3 Typography
- One family: Nunito (rounded, friendly), self-hosted
- Weights: 800 for headings, nav, buttons and labels; 600 for body text
- Hero heading about 68px desktop, 40px mobile; section headings 30–40px
- Small labels uppercase, wide letter-spacing, 12–13px
- Base font size 16–17px, line-height about 1.7

### 5.4 Component rules
- **Hero:** large photo, rounded corners (about 28px). Headline sits on a calm area and must keep AA contrast (add a subtle overlay or a solid label panel if needed)
- **Header:** white rounded panel with the navigation; round logo badge on the left. Desktop: links in a Flexbox row. Mobile: logo badge plus a navy "Menu" toggle button (see section 13). No call-to-action tab
- **Wave dividers:** simple inline SVG, `aria-hidden="true"`, between hero, pink panel, blue panel and footer
- **Pick up panel:** pink background, tilted heading (keep it readable), three cards with image, short title and lime pill tag
- **About section:** text and info pills left; on the right either a simple original SVG map of Taiwan with circular photo frames (needs a text label/alternative), or just 2–3 circular photos if time is short (**stretch goal**)
- **Round navy buttons** with a thin outer ring for main sections (Explore, Eat, Watch, Credits)
- **Video** in a rounded frame with a white border and lime outer ring; **quote** in a soft pink rounded card
- Buttons and tags are pill-shaped; touch targets at least 44px
- Decorative waves, rings and icons never carry meaning alone; visible focus outline on every link and button

### 5.5 Layout (mobile-first)
- Base styles target 320px; add `min-width` media queries at roughly 600px, 900px and 1200px
- Max content width about 1100–1200px, centered, so it still looks good at 1920px

### 5.6 Wireframes
- [x] Mobile and desktop layout for all 4 pages

**Common mobile layout:** skip link; round logo; Menu button; stacked nav when open; 16px page gutter; rounded content panels; 44px minimum controls.

**Common desktop layout (900px+):** logo left, four links in a horizontal Flexbox; 1180px maximum content width; cards and galleries expand into Grid columns.

- **Home:** hero image and title; blue facts panel; pink 3-card pickup Grid; full-width video; quote; four round links.
- **Attractions:** intro; 2-column tablet or 3-column desktop gallery of attraction cards.
- **Food:** two feature cards; horizontally scrollable dishes table; stacked form fields.
- **Credits:** centered content column with sections for media, code and AI assistance.

## 6. Accessibility Plan

- Skip-to-content link, visible on focus
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`
- One `<h1>` per page, logical heading order
- Descriptive `alt` on all content images; `alt=""` for decorative ones
- Visible focus styles; full keyboard navigation (test with Tab only)
- Colour contrast AA minimum (text and UI indicators)
- Video: no autoplay; captions track and/or transcript or text description
- Form: labels linked to inputs, hint and error text
- `lang="en"` on `<html>`
- Mobile menu button keyboard operable with `aria-expanded`
- Respect `prefers-reduced-motion`

## 7. Performance Plan

- Resize images to the displayed size, convert to WebP (or compressed JPEG), target under about 200 KB each
- `width`/`height` attributes and `loading="lazy"` for below-the-fold images
- Video: H.264 MP4 (optionally also WebM), about 720p, 15–40 s, ideally under about 5 MB, with `poster` and `preload="metadata"`
- Self-hosted woff2 font, only the weights used
- Minimal CSS, no unused code

## 8. Media Plan (images and video)

- **Who provides media:** the **student downloads** images and video from the source sites. The AI cannot reliably fetch files from arbitrary websites and must not guess licenses. The AI can suggest search terms and candidate pages, optimize files the student uploads (resize, WebP, compress, poster frame), and draft credits entries from details the student confirms on each source page.
- **Asset budget (about 9):** 1 hero, 5 attraction photos, 1–2 food photos, 1 video. Home "Pick up" cards reuse attraction photos (credit each asset once, listing every page that uses it).
- **Video (decided):** one short (15–40 s) Taiwan scenic or night-market clip from Pexels/Pixabay or Wikimedia Commons. A silent clip is easiest to make accessible (text description instead of captions). Not chosen yet.
- **Rejected video:** the Wikimedia Commons Li Mei-Shu "梅樹盛開在維基" showcase (CC BY 3.0). Reasons: art showcase rather than travel content, Chinese language, 4K and about 248 MB to trim. Also rejected as non-CC or unconfirmed: Vimeo "Postcards from Taiwan", Getty, GBH Openvault and news-site night-market videos.
- **How to find a clip (about 10 minutes):**
  1. Pexels or Pixabay: search "Taiwan", "Taipei" or "night market" in the Videos tab
  2. Wikimedia Commons: search "Taiwan", filter by file type "Videos"
  3. YouTube: search a topic, then Filters → Features → "Creative Commons"
  4. Check the license on the video page, then record creator, URL and license in the table in section 9

## 9. Content and Licensing Plan

Possible sources:
- Wikimedia Commons (CC BY, CC BY-SA, CC0 or public domain)
- Flickr or YouTube with the Creative Commons filter on
- Wikipedia/Wikivoyage text (CC BY-SA): credit it and rewrite in own words
- Pexels, Pixabay and Unsplash: they use their own free licenses, not Creative Commons. Credit the site, link the creator and link the site's license page. **Open question:** confirm once with the instructor that these are accepted for this project (they were accepted on a previous assignment).

Rules:
- Record creator, source URL, license and page used **immediately** when downloading each asset
- Keep the running list below, then transfer it to `credits.html`

| Asset | Type | Creator | Source link | License | Used on |
|-------|------|---------|-------------|---------|---------|
| (to fill) | | | | | |

## 10. Development Steps

1. **Setup:** GitHub repo, folder structure, `README.md`, add `normalize.css`
2. **Plan and sketch:** wireframes for each page
3. **Collect content:** find CC images and video, record credits, optimize files
4. **HTML:** shared header/nav/footer markup, then each page's content semantically
5. **CSS (mobile-first):** base → typography → layout (Flexbox, Grid) → components → media queries
6. **Favicon and meta:** favicon set, manifest, unique titles and descriptions
7. **Accessibility pass:** keyboard test, contrast check, screen reader check, skip link
8. **Responsive testing:** 320, 375, 768, 1024, 1440 and 1920 px
9. **Validation:** W3C HTML validator, W3C CSS validator, Lighthouse (accessibility, performance, SEO)
10. **Credits page:** complete and double-check every asset, with the page where each is used
11. **Publish:** push to the public GitHub repo (optionally GitHub Pages), verify it is public, README links the live site

## 11. Final Submission Checklist

- [x] 4 HTML pages (3 about Taiwan + credits)
- [x] 1 table, 2+ images, 1 video, 1 blockquote, 1 contact form
- [x] Navigation with links to every page, reused on all pages
- [x] Unique meta description (and title) on each page
- [x] Favicon works on mobile, tablet, desktop
- [x] External stylesheet shared by all pages
- [x] CSS Grid used at least once
- [x] CSS Flexbox used at least once
- [x] At least one custom font
- [x] Mobile-first CSS, works from 320px to 1920px
- [x] Skip-to-content link and full keyboard navigation
- [x] Images and video optimized
- [x] No templates or frameworks (only normalize/reset)
- [x] All content is Creative Commons (or accepted free license) and credited
- [x] Credits list every asset with creator link and page used, plus font, normalize.css and the AI resource
- [x] HTML and CSS validate with no errors
- [ ] Code is in a public GitHub repository

## 12. Decisions

- **Language:** English only, `lang="en"`, no Chinese text; romanized dish names.
- **Header:** no "Plan a trip" or other call-to-action tab. Navigation has four links only.
- **Mobile navigation:** collapsible menu with toggle button (section 13).
- **Pick up area:** static 3-card Grid, no carousel.
- **Video:** short Taiwan clip from Pexels/Pixabay or Wikimedia Commons (section 8). The student downloads it.
- **Media provider:** student downloads; AI helps optimize and draft credits.
- **Font:** Nunito self-hosted, weights 600 and 800.
- **Reference site:** mood only; nothing copied; screenshot not committed to the repo.
- **Deadline:** none.

## 13. Mobile Navigation Toggle Spec

- A real `<button>` inside the header, before the `<ul>` of links
- `aria-expanded="false"`, `aria-controls="site-menu"`, and a clear accessible name (visible text "Menu")
- Small JavaScript file (`js/nav.js`) toggles `aria-expanded` and a class on the menu. The menu is hidden on mobile only when JavaScript is active, so links still show if JS fails
- Escape closes the menu and returns focus to the button
- At about 900px and wider, hide the button and show the links in a Flexbox row
- Visible focus style and a touch target of at least 44×44px
- Respect `prefers-reduced-motion` for any open/close animation

## 14. Open Items

- [x] Wireframes for all 4 pages
- [x] Pick and download the video and all images; verify licenses on the source pages
- [x] Choose the blockquote text (short, public-domain or CC) with `<cite>` and credit
- [ ] Confirm with the instructor that Pexels/Pixabay/Unsplash are accepted
- [x] Decide whether the About section gets the SVG map (stretch) or just circular photos
- [ ] Create the GitHub repo name and confirm it is public
