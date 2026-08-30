"use strict";

(() => {
  const data = window.SITE_DATA;
  const C = window.Components;
  const root = document.querySelector("#app");
  if (!data || !C || !root) return;

  const featured = data.entries.filter((entry) => entry.featured);
  const renderHome = () => C.shell("home", `
    <section class="hero section"><div class="container hero-grid"><div class="hero-copy">
      ${C.promptLine(data.home.command)}${C.title(data.home.title, "hero-title")}<h2 class="hero-accent reveal">${C.escapeHTML(data.home.accentTitle)}</h2>
      <p class="hero-description reveal">${C.escapeHTML(data.home.description)}</p>
      <div class="button-row reveal">${C.button({ ...data.home.primaryAction })}${C.button({ ...data.home.secondaryAction, variant: "secondary" })}</div>
    </div>${C.terminal()}</div></section>
    <section class="stats"><div class="container stats-grid">${data.statistics.map((item) => `<div class="stat reveal"><strong>${C.escapeHTML(item.value)}</strong><span>${C.escapeHTML(item.label)}</span></div>`).join("")}</div></section>
    <section class="section"><div class="container"><div class="section-heading reveal"><div><p class="kicker">[LATEST LOGS]</p><h2>Recent Build Logs</h2></div><a href="logs.html">view archive ${C.icon("arrow")}</a></div><div class="card-grid">${featured.map(C.entryCard).join("")}</div></div></section>`);

const renderLogs = () => {
  const categories = ["All", ...new Set(data.entries.map((entry) => entry.category))];

  return C.shell("logs", `${C.pageIntro({
    command: 'find ./research -type f | sort',
    title: "Research / Field Notes",
    description: "Documenting homelab builds, security research, troubleshooting, experiments and lessons learned through hands-on work.",
    count: `${data.entries.length} documented entries`
  })}

    <section class="section section--topless">
      <div class="container">

        <div class="archive-tools reveal">

          <label>
            search archive
            <input
              type="search"
              placeholder="Search projects, tools, technologies…"
              data-search-input
            >
          </label>

          <div class="filter-row">
            ${categories.map((category, index) =>
              `<button
                class="filter ${index === 0 ? "is-active" : ""}"
                data-filter="${C.escapeHTML(category)}"
                aria-pressed="${index === 0}"
              >
                ${C.escapeHTML(category)}
              </button>`
            ).join("")}
          </div>

          <p>
            <span data-result-count>${data.entries.length}</span>
            entries found
          </p>

        </div>

        <div class="card-grid" data-entry-grid>
          ${data.entries.map(C.entryCard).join("")}
        </div>

        <p class="empty-state" data-empty-state hidden>
          No entries match your search.
        </p>

      </div>
    </section>
  `);
};

  const renderHomelab = () => {
    const entries = data.entries.filter((entry) => entry.category === "Homelab" || ["Infrastructure", "Networking", "Containers", "Detection", "Systems"].includes(entry.category));
    return C.shell("homelab", `${C.pageIntro({ command: "tree ./homelab -L 2", title: "Homelab", description: "Proxmox infrastructure, network segmentation, vulnerable targets and defensive monitoring—documented as the lab develops." })}
      <section class="section section--topless"><div class="container"><div class="topology reveal"><span>INTERNET</span><b>→</b><span>pfSense/OPNSense</span><b>→</b><span>VLAN LAB</span><b>→</b><span>VMs + LXCs</span><b>→</b><span>Wazuh / Security Onion / Caldera</span></div><div class="section-heading reveal"><div><p class="kicker">[BUILD INDEX]</p><h2>Systems and build days</h2></div></div><div class="card-grid">${entries.map(C.entryCard).join("")}</div></div></section>`);
  };


  //About
const renderAbout = () => {
  const a = data.about;

  return C.shell(
    "about",
    `<section class="section">
      <div class="container container--narrow">

        ${C.promptLine(a.command)}
        ${C.title(a.title)}

        <div class="profile-terminal reveal">
          <div class="terminal-bar">
            <i></i><i></i><i></i>
            <span>profile.txt</span>
          </div>

          <div class="profile-body">
            <p>$ id</p>
            ${a.profile
              .map(
                ([key, value]) =>
                  `<p><b>&gt; ${C.escapeHTML(
                    key.padEnd(10, " ")
                  )}</b> : ${C.escapeHTML(value)}</p>`
              )
              .join("")}
          </div>
        </div>

        <p class="page-description reveal">
          ${C.escapeHTML(a.introduction)}
        </p>

        <div class="principles">
          ${a.principles
            .map(
              (item) => `
              <article class="principle reveal">
                <span>${C.escapeHTML(item.number)}</span>
                <div>
                  <h2>${C.escapeHTML(item.title)}</h2>
                  <p>${C.escapeHTML(item.text)}</p>
                </div>
              </article>
            `
            )
            .join("")}
        </div>

      </div>
    </section>`
  );
};

  const renderEntry = () => {
    const id = new URLSearchParams(location.search).get("id");
    const entry = data.entries.find((item) => item.id === id);
    if (!entry) return renderNotFound();
    document.title = `${entry.title} — Karabo Cyberlab`;
    return C.shell(entry.category === "Homelab" ? "homelab" : "logs", `<article class="entry section"><div class="container container--narrow">${C.promptLine(`cat ./research/${entry.id}.md`)}<a class="back-link reveal" href="logs.html">← back to archive</a>${C.title(entry.title)}
      <div class="entry-meta reveal"><time datetime="${C.escapeHTML(entry.date)}">${C.escapeHTML(entry.date)}</time><span>${C.escapeHTML(entry.category)}</span><span>${C.escapeHTML(entry.status)}</span></div>${C.tagList(entry.tags)}
      <p class="entry-lead reveal">${C.escapeHTML(entry.summary)}</p>
      <section class="entry-section reveal"><h2>Tools used</h2><ul class="tool-list">${entry.tools.map((tool) => `<li>${C.escapeHTML(tool)}</li>`).join("")}</ul></section>

      ${topologyTerminal(entry.topologyTerminal)}

      ${entry.body.map((paragraph) => `<p class="entry-copy reveal">${C.escapeHTML(paragraph)}</p>`).join("")}
      ${entry.images.map((image) => `<figure class="entry-image reveal"><img src="${C.escapeHTML(image.src)}" alt="${C.escapeHTML(image.alt)}"><figcaption>${C.escapeHTML(image.caption || "")}</figcaption></figure>`).join("")}
      <div class="entry-columns"><section class="entry-section reveal"><h2>Findings</h2><ul>${entry.findings.map((item) => `<li>${C.escapeHTML(item)}</li>`).join("")}</ul></section><section class="entry-section reveal"><h2>Lessons learned</h2><ul>${entry.lessons.map((item) => `<li>${C.escapeHTML(item)}</li>`).join("")}</ul></section></div>

      </div></article>`);
   };






  const topologyTerminal = (topology) => {
  if (!topology) return "";

  return `<section class="topology-terminal reveal" aria-label="Documented homelab topology">
    <div class="terminal-bar">
      <i></i><i></i><i></i>
      <span>nmap — homelab topology</span>
    </div>

    <div class="topology-terminal__body">
      <p><b>karabo@cyberlab:~$</b> ${C.escapeHTML(topology.command)}</p>
      <pre>${C.escapeHTML(topology.output)}</pre>
    </div>
  </section>`;
};






  const renderNotFound = () => C.shell("", `<section class="error section"><div class="container container--narrow">${C.promptLine("locate requested-page")}<p class="error-code">404</p>${C.title("Route not found")}<p class="page-description">The requested file does not exist or has moved.</p>${C.button({ label: "Return home", href: "index.html" })}</div></section>`);

  const renders = { home: renderHome, logs: renderLogs, homelab: renderHomelab, about: renderAbout, entry: renderEntry, "not-found": renderNotFound };
  root.innerHTML = (renders[root.dataset.page] || renderNotFound)();
  initializeNavigation(); initializeTerminal(); initializeArchive(); initializeNetwork(); initializeReveal();
  document.querySelectorAll("[data-current-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
})();

function initializeNavigation() {
  const toggle = document.querySelector("[data-menu-toggle]"); const nav = document.querySelector("[data-navigation]");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") !== "true"; toggle.setAttribute("aria-expanded", String(open)); document.body.classList.toggle("menu-open", open); });
  nav.addEventListener("click", () => { toggle.setAttribute("aria-expanded", "false"); document.body.classList.remove("menu-open"); });
}

function initializeTerminal() {
  const command = document.querySelector("[data-terminal-command]"); if (!command) return;
  const prompt = document.querySelector("[data-terminal-prompt]"); const output = document.querySelector("[data-terminal-output]"); const items = window.SITE_DATA.terminalCommands;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches; let itemIndex = 0; let charIndex = 0; let deleting = false;
  if (reduced) { prompt.textContent = items[0].prompt; command.textContent = items[0].command; output.textContent = items[0].output; return; }
  const tick = () => { const item = items[itemIndex]; prompt.textContent = item.prompt; const text = item.command;
    if (!deleting) { 
      charIndex += 1; 
      command.textContent = text.slice(0, charIndex); 
      
      if (charIndex >= text.length) { 
        output.textContent = item.output; 
        deleting = true; 
      return setTimeout(tick, 2900); 
    } 
    return setTimeout(tick, 58); 
  }
  charIndex -= 1; 
  command.textContent = text.slice(0, Math.max(0, charIndex)); 

    if (charIndex <= 0) { 
      output.textContent = ""; 
      deleting = false; 
      itemIndex = (itemIndex + 1) % items.length; return setTimeout(tick, 380); 
    } 
    setTimeout(tick, 26);
  }
  ; tick();
}

function initializeArchive() {
  const input = document.querySelector("[data-search-input]"); 
  const buttons = [...document.querySelectorAll("[data-filter]")]; 
  const cards = [...document.querySelectorAll("[data-entry-card]")];
  if (!input || !cards.length) return; let category = "All";
  const filter = () => { const term = input.value.trim().toLowerCase(); 
    let visible = 0; cards.forEach((card) => { const show = (category === "All" || card.dataset.category === category) && card.dataset.search.includes(term); card.hidden = !show; if (show) visible += 1; }); document.querySelector("[data-result-count]").textContent = visible; document.querySelector("[data-empty-state]").hidden = visible !== 0; };
        input.addEventListener("input", filter);
        buttons.forEach((button) => button.addEventListener("click", () => { category = button.dataset.filter; 
        buttons.forEach((b) => { const active = b === button; 
        b.classList.toggle("is-active", active); 
        b.setAttribute("aria-pressed", String(active)); }); filter(); }));
}

function initializeReveal() {
  const items = document.querySelectorAll(".reveal"); 
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return items.forEach((el) => el.classList.add("is-visible"));
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); 
    observer.unobserve(entry.target); } }), { threshold: .08 }); 
    items.forEach((item) => observer.observe(item));
}

function initializeNetwork() {
  const canvas = document.querySelector("[data-network-canvas]"); if (!canvas) return; const ctx = canvas.getContext("2d"); const css = getComputedStyle(document.documentElement);
  const zoom = Number(css.getPropertyValue("--background-zoom")) || 1.45; 
  const speed = Number(css.getPropertyValue("--background-speed")) || .18; 
  const opacity = Number(css.getPropertyValue("--background-particle-opacity")) || .45; 
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, points = []; const resize = () => { w = innerWidth; h = Math.max(innerHeight, document.documentElement.scrollHeight); 
  const dpr = Math.min(devicePixelRatio || 1, 2); 
    canvas.width = w * dpr; 
    canvas.height = h * dpr; 
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); 
    points = Array.from({ length: Math.max(20, Math.min(48, Math.round(w / 35))) }, () => ({ x: Math.random() * w, y: Math.random() * h, r: (2 + Math.random() * 2.8) * zoom, vx: (Math.random() - .5) * speed, vy: (Math.random() - .5) * speed })); 
  };
  
    const draw = () => { 
      ctx.clearRect(0, 0, w, h); 
      points.forEach((p, i) => { if (!reduced) { p.x = (p.x + p.vx + w) % w; p.y = (p.y + p.vy + h) % h;

     } 
     
     points.slice(i + 1).forEach((q) => { const d = Math.hypot(p.x - q.x, p.y - q.y); 
      if (d < 220 * zoom) { ctx.strokeStyle = `rgba(55,255,148,${(1 - d / (220 * zoom)) * opacity * .35})`; 
      ctx.beginPath(); ctx.moveTo(p.x, p.y); 
      ctx.lineTo(q.x, q.y); ctx.stroke(); } }); 
      ctx.fillStyle = `rgba(55,255,148,${opacity})`; 
      ctx.shadowColor = "#37ff94"; ctx.shadowBlur = 8 * zoom; 
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); 
      ctx.fill(); ctx.shadowBlur = 0; }); 
    if (!reduced) requestAnimationFrame(draw); 
  };
  resize(); 
  draw(); 
  addEventListener("resize", () => { 
    clearTimeout(window.networkResize); 
    window.networkResize = setTimeout(() => { resize(); 
    if (reduced) draw(); }, 150); 
  });
}
