# AI Coding Agent Instructions for Art109 Web Tutorials

## Project Overview
This repository contains a series of web development tutorials for an art course (Art109), progressing from basic HTML to advanced CSS layouts, JavaScript DOM manipulation, and interactive net art using p5.js. The structure emphasizes static web projects with no build system - all files are served directly.

## File Structure Conventions
- **Tutorials**: `tutorials/{topic-number}-{topic}/` (e.g., `1-html/`, `2-css/`, `3-net-art/`)
- **Sub-tutorials**: Each tutorial has numbered subfolders like `01-html/`, `02-html/`
- **Core files per tutorial**:
  - `index.html` - Main page
  - `css/style.css` - Stylesheet
  - `js/main.js` - JavaScript (when present)
  - `images/` - Static assets
  - `media/` - For videos/GIFs in net art

## Portfolio Projects
Multi-page portfolios follow this structure:
- Root: `index.html`, `about.html`, `cv.html`
- `css/style.css`, `js/hamburger.js` (mobile nav)
- `projects/` - Individual project pages (e.g., `missedconnections.html`)
- `images/` - Thumbnails and full-size images

## Key Patterns & Conventions

### HTML Structure
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Navigation: Anchor links for single-page (`#section-id`) or separate pages
- Images: Always use `<img>` with `srcset` for responsive images (e.g., `srcset="image-320.jpg 320w, image-640.jpg 640w" sizes="800px"`)

### CSS Layouts
- Grid-based portfolios: `.flex-container-grid` with `.portfolio-item.flex-item-grid`
- Hamburger menu: `.hamburger` button toggles `.nav-menu.active`
- Responsive design: Mobile-first with media queries

### JavaScript Interactions
- DOM manipulation: `document.querySelector()`, `addEventListener()`, `classList.toggle()`
- Hamburger menu: Toggle `.active` class on nav menu (see `js/hamburger.js`)
- p5.js integration: Load from CDN, sketch in `p5js/sketch.js`, canvas positioned with `z-index: -2` for background

### External Libraries
- **baguetteBox**: For image lightboxes - include `css/baguetteBox.css`, `js/baguetteBox.js`, add `data-caption` to links
- **p5.js**: For generative art - load `p5.js` and `p5.sound.min.js` from CDN, create WEBGL canvas in `setup()`

## Development Workflow
- No build tools required - edit files directly
- Test locally: Open `index.html` in browser or run `python -m http.server 8000` for local server
- Add new tutorial: Create numbered folder under appropriate topic, copy structure from existing (e.g., `tutorials/2-css/10-new-tutorial/`)
- Image optimization: Provide multiple sizes (320w, 640w, 1280w) for responsive loading

## Common Tasks
- Adding portfolio item: Create `.portfolio-item.flex-item-grid` div with `<a href="projects/page.html"><img srcset="..."><h3>Title</h3><p>Description</p></a>`
- Implementing nav: Use `<nav class="navbar"><button class="hamburger">≡</button><ul class="nav-menu">...`
- Interactive elements: Attach event listeners in `DOMContentLoaded` for buttons/images

Reference examples: `tutorials/2-css/06-css-portfolio-grid-template/` (grid layout), `tutorials/2-css/09-css-portfolio-grid-lightbox/` (lightbox), `tutorials/3-net-art/1-gifs-video-webcam/` (media integration)</content>
<parameter name="filePath">/Users/jordanmedina/Documents/github/art109/.github/copilot-instructions.md