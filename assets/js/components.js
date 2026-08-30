"use strict";

window.Components = (() => {
  const escapeHTML = (value = "") => String(value)
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#039;");

  const icon = (name) => ({
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>'
  }[name] || "");

  const button = ({ label, href, variant = "primary" }) => `
    <a class="button button--${escapeHTML(variant)}" href="${escapeHTML(href)}">
      <span>${escapeHTML(label)}</span><span class="button__icon">${icon("arrow")}</span>
    </a>`;

  const title = (text, className = "page-title") => `
    <h1 class="${className} reveal"><span>${escapeHTML(text)}</span><span class="title-cursor" aria-hidden="true"></span></h1>`;

  const header = (activePage) => {
    const { brand, navigation } = window.SITE_DATA;
    return `<header class="site-header" data-header><div class="container header-inner">
      <a class="brand" href="index.html" aria-label="Home"><span>[</span>${escapeHTML(brand.name)}<b>${escapeHTML(brand.accent)}</b><span>]</span></a>
      <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">${icon("menu")}<span class="menu-close">${icon("close")}</span></button>
      <nav class="site-nav" id="site-nav" data-navigation aria-label="Primary navigation">${navigation.map((item) => `
        <a class="${item.page === activePage ? "is-active" : ""}" href="${escapeHTML(item.href)}" ${item.page === activePage ? 'aria-current="page"' : ""}>/${escapeHTML(item.label)}</a>`).join("")}</nav>
    </div></header>`;
  };

  const background = () => `<div class="network-background" aria-hidden="true"><canvas data-network-canvas></canvas><div class="grid-layer"></div><div class="glow glow--one"></div><div class="glow glow--two"></div></div>`;

  const footer = () => { const { footer: data, socialLinks } = window.SITE_DATA; return `
    <footer class="site-footer"><div class="container footer-inner"><p>${escapeHTML(data.text)}</p><div>${socialLinks.map((link) => `<a href="${escapeHTML(link.href)}" target="_blank" rel="noreferrer">${escapeHTML(link.label)}</a>`).join("")}</div><small>© <span data-current-year></span></small></div></footer>`; };

  const shell = (page, content) => `<div class="site">${background()}${header(page)}<main>${content}</main>${footer()}</div>`;

  const promptLine = (command, path = "~$") => `<p class="prompt-line reveal"><span>karabo@cyberlab</span><b>:${escapeHTML(path)}</b> ${escapeHTML(command)}</p>`;

  const pageIntro = ({ command, title: heading, description = "", count = "" }) => `
    <section class="page-intro section"><div class="container container--narrow">${promptLine(command)}${title(heading)}
      ${description ? `<p class="page-description reveal">${escapeHTML(description)}</p>` : ""}
      ${count ? `<p class="page-count reveal">${escapeHTML(count)}</p>` : ""}</div></section>`;

  const tagList = (tags) => `<div class="tag-list">${tags.map((tag) => `<span>[${escapeHTML(tag)}]</span>`).join("")}</div>`;

  const entryCard = (entry) => `<article class="entry-card reveal" data-entry-card data-search="${escapeHTML([entry.title, entry.summary, entry.category, ...entry.tags, ...entry.tools].join(" ").toLowerCase())}" data-category="${escapeHTML(entry.category)}">
    <div class="entry-card__top"><span>${escapeHTML(entry.category)}</span><span class="status">${escapeHTML(entry.status)}</span></div>
    <time datetime="${escapeHTML(entry.date)}">${escapeHTML(entry.date)}</time>
    <h3><a href="entry.html?id=${encodeURIComponent(entry.id)}">${escapeHTML(entry.title)}</a></h3>
    <p>${escapeHTML(entry.summary)}</p>${tagList(entry.tags)}
    <a class="entry-link" href="entry.html?id=${encodeURIComponent(entry.id)}">open entry ${icon("arrow")}</a>
  </article>`;

  const terminal = () => `<section class="terminal reveal" aria-label="Animated terminal"><div class="terminal-bar"><i></i><i></i><i></i><span>karabo@cyberlab:~</span></div><div class="terminal-body"><div><span data-terminal-prompt>karabo@cyberlab:~$</span> <span data-terminal-command></span><span class="terminal-cursor" aria-hidden="true"></span></div><p data-terminal-output aria-live="polite"></p></div></section>`;

  return { escapeHTML, icon, button, title, shell, promptLine, pageIntro, tagList, entryCard, terminal };
})();
