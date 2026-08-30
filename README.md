# Karabo Cyberlab Portfolio

A fully editable, responsive cybersecurity portfolio built with plain HTML, CSS and JavaScript. It uses a Linux terminal-inspired interface, an animated network background and a data-driven research archive.

No framework or build process is required.

## Pages

- `index.html` — homepage and animated terminal
- `about.html` — profile and working principles
- `logs.html` — searchable/filterable research archive
- `homelab.html` — focused homelab index
- `entry.html?id=homelab-day-01` — reusable individual entry template
- `404.html` — not-found page

The Contact page, links, form and related JavaScript have been removed.

## Quick start

Open `index.html` directly, or run a local server from this folder:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Edit content

All main content lives in `assets/js/site-data.js`. Edit the `terminalCommands` array to change the type/erase terminal loop. Edit `entries` to update research items.

To add an entry:

1. Duplicate one object in `SITE_DATA.entries`.
2. Give it a unique `id`.
3. Edit its title, date, tags, summary, tools, findings and lessons.
4. Link to it with `entry.html?id=your-new-id`.

To add an image, place it in `assets/images/`, then add this to the entry:

```js
images: [{
  src: "assets/images/my-screenshot.png",
  alt: "A useful description of the screenshot",
  caption: "Optional caption"
}]
```

Before publishing screenshots, remove passwords, tokens, public IP addresses and personal data.

## Edit the floating background

At the top of `assets/css/styles.css`, change:

```css
--background-zoom: 1.45;
--background-speed: 0.18;
--background-particle-opacity: 0.45;
--background-blur: 0.3px;
```

The comments beside those variables explain practical ranges. The JavaScript reads the values automatically.

## Navigation

Edit the `navigation` array in `assets/js/site-data.js`. To add a completely new page, copy one of the small HTML files and add its renderer to `assets/js/app.js`.

## Deployment

For GitHub Pages, upload this folder to a repository and enable Pages from the main branch and root folder.

For Vercel, import the repository. No framework preset or build command is required. The included `vercel.json` enables clean URLs and basic response headers.

## Structure

```text
nullframe/
├── index.html
├── about.html
├── logs.html
├── homelab.html
├── entry.html
├── 404.html
├── vercel.json
├── README.md
└── assets/
    ├── css/styles.css
    ├── images/
    │   ├── signal-map.svg
    │   ├── cipher-grid.svg
    │   └── cloud-node.svg
    └── js/
        ├── site-data.js
        ├── components.js
        └── app.js
```

## Accessibility and performance

- Keyboard-visible focus states
- Semantic navigation and headings
- Responsive mobile menu
- Reduced-motion support
- Lightweight local SVG placeholders
- No runtime dependency or package installation
