# Paramvir Singh — Developer Portfolio

A cinematic, poster-style editorial portfolio for **Paramvir Singh** — Software & Web Developer (Python, C/C++, Frontend) and CS student based in Bhiwani, Haryana, India.

Built with pure **HTML + CSS + vanilla JavaScript** (zero external UI/animation libraries).

---

## 🎨 Design & Animation Specifications

- **Theme**:
  - Background: `#0a0a0a`
  - Accent Red-Orange: `#e8412c`
  - Off-White Text: `#f1ece4`
  - Muted Text: `#8f8981`
  - Divider Borders: `#2a2623`
  - Blueprint Blue: `#4da3ff`
- **Typography**:
  - Headlines: Google Font **Anton** (massive, tight line-height, uppercase)
  - Small text & Code: **JetBrains Mono**
  - Handwritten accents: **Caveat**
- **Animations (Universal Easing: `cubic-bezier(.16, 1, .3, 1)`)**:
  - **Load Intro (~2.7s, click to skip)**:
    - Black screen with left-edge red line drawing down.
    - Spinning dashed loader ring in center.
    - 7 pastel multiplayer cursor tags (`Motion`, `Copy`, `Review`, `Design`, `Ship`, `Debug`, `Tester`) popping in staggered by 110ms with square icons.
    - 3 translucent blueprint wireframe frames with 6px white corner handles and Figma-like blue labels.
    - Smooth 1.1s fade-out revealing the hero.
  - **Hero Entrance**:
    - Giant "PORTFOLIO" text with a glossy gradient (`#ff4d2e, #d6301f, #6b160d, transparent`) rises 90px while un-blurring from 14px to 0.
    - Black & white cutout photo (`assets/photo.png`) zooms from 1.1 to 1.
    - Headline and role rise with a 0.55s delay.
    - **Lerped Scroll Parallax**: Continuous `requestAnimationFrame` lerping on PORTFOLIO and the cutout photo.
  - **Headlines & Selection Box**:
    - Lines slide up from behind masks (`translateY(110%)` to `0`) with 80ms stagger.
    - Blue selection box with 4 white corner handles flashes on reveal and appears on hover.
  - **Floating Multiplayer Cursors**:
    - 7 pastel tags drift with orbital sin/cos motion while tracking the mouse with `lerp .05` (no jitter, 60fps).
  - **Scroll Reveals**:
    - Elements rise 46px + un-blur.
    - Animated number counter easing.
    - Sticky-note quote card drops in rotated -6° and smoothly settles at 3°.
  - **Accessibility**:
    - Strict `prefers-reduced-motion` compliance.

---

## 📁 File Structure

```
portfolio/
├── index.html      # Semantic HTML document with animation landmarks
├── styles.css      # Theme variables, universal easing, 60fps keyframes, responsive rules
├── main.js         # Top-level PROJECTS, SKILLS, TIMELINE arrays & animation engine
├── assets/
│   └── photo.png   # Portrait cutout (B&W styling applied via CSS)
└── README.md       # Documentation & deployment guide
```

---

## ✏️ How to Edit Projects, Skills & Timeline

All dynamic content is cleanly declared at the top of [`main.js`](file:///Users/paramvirsingh/Desktop/all%20projects/portfolio/main.js):

- **Projects**: Modify the `PROJECTS` array (title, description, outcomes, tech stack, links).
- **Skills**: Modify the `SKILLS` array (category name and bulleted list).
- **Timeline**: Modify the `TIMELINE` array (year, role/degree, organization, description).

Any edit immediately re-renders the DOM without touching HTML structure.

---

## 🚀 Deployment Guide

### Option 1: GitHub Pages

1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete cinematic portfolio"
   git branch -M main
   ```
2. Connect your GitHub repository:
   ```bash
   git remote add origin https://github.com/github-param-83-vir/<repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings → Pages**.
   - Under **Build and deployment > Source**, choose `Deploy from a branch`.
   - Set Branch to `main` and folder to `/ (root)`.
   - Click **Save**. Your site will be live at `https://github-param-83-vir.github.io/<repo-name>/`.

### Option 2: Vercel

1. Install Vercel CLI (`npm i -g vercel`) or sign in at [vercel.com](https://vercel.com).
2. Run:
   ```bash
   vercel
   ```
3. Follow the CLI prompts (Framework preset: **Other**, Output directory: `./`).
4. Your site will instantly be deployed with a live HTTPS URL.
