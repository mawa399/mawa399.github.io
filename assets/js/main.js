/* =====================================================================
   main.js — Logique du site (langue, thème, rendu, fenêtres, formulaire)
   Les textes sont dans content.js : rien à modifier ici en temps normal.
   ===================================================================== */
(function () {
  "use strict";
  document.documentElement.classList.add("js");
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ic = (id) => `<svg class="icon" aria-hidden="true"><use href="#${id}"/></svg>`;
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };

  let lang = store.get("lang") === "en" ? "en" : "fr";
  const t = (k) => (UI[lang] && UI[lang][k]) || UI.fr[k] || k;

  /* ---------- Liens de profil et photo ---------- */
  $$(".js-mail").forEach((a) => (a.href = "mailto:" + PROFILE.email));
  $$(".js-mail-text").forEach((s) => (s.textContent = PROFILE.email));
  $$(".js-linkedin").forEach((a) => (a.href = PROFILE.linkedin));
  $$(".js-github").forEach((a) => (a.href = PROFILE.github));
  $$(".js-cv").forEach((a) => (a.href = PROFILE.cv));
  $("#year").textContent = new Date().getFullYear();
  const photo = $("#photo");
  photo.onload = () => { photo.hidden = false; $("#photo-ph").hidden = true; };
  photo.onerror = () => photo.remove();
  photo.src = PROFILE.photo;

  /* ---------- Textes fixes ---------- */
  function applyTexts() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    $("#lang-toggle").textContent = lang === "fr" ? "EN" : "FR";
    document.title = lang === "fr" ? "Mawa DIAW · Géomaticien / Développeur SIG" : "Mawa DIAW · Geomatics Specialist / GIS Developer";
  }

  /* ---------- À propos ---------- */
  function renderAbout() {
    $("#edu").innerHTML = EDUCATION.map((e) => { const [a, b, c] = e[lang]; const [years, place] = c.split(" · "); return `<li><span class="edu-year">${esc(years)}</span><div class="edu-body"><b>${esc(a)}</b><span>${esc(b)}</span><small>${esc(place || "")}</small></div></li>`; }).join("");
    $("#langs").innerHTML = LANGUAGES.map((l) => `<li><b>${esc(l[lang][0])}</b><span>${esc(l[lang][1])}</span></li>`).join("");
    $("#savoir").innerHTML = SAVOIR[lang].map((s) => `<li>${esc(s)}</li>`).join("");
    $("#etre").innerHTML = SAVOIR_ETRE[lang].map((s) => `<li>${esc(s)}</li>`).join("");
    $("#pipeline").innerHTML = PIPELINE.map((p) => `<li class="reveal"><span class="round-ic">${ic(p.icon)}</span><h4>${esc(p[lang][0])}</h4><p>${esc(p[lang][1])}</p></li>`).join("");
    $("#hobbies").innerHTML = HOBBIES.map((h) => `<li class="reveal"><span class="round-ic">${ic(h.icon)}</span><h4>${esc(h[lang][0])}</h4><p>${esc(h[lang][1])}</p></li>`).join("");
  }

  /* ---------- Visuels pour les projets sans capture ---------- */
  function cover(kind, seed) {
    let s = seed; const r = () => (s = (s * 9301 + 49297) % 233280) / 233280;
    let g = "";
    if (kind === "network") {
      const main = [[20, 190], [120, 168], [220, 178], [330, 140], [450, 125], [520, 118]];
      for (let x = -40; x <= 560; x += 48) g += `<line x1="${x}" y1="0" x2="${x + 70}" y2="281" class="b" stroke-width=".7" opacity=".5"/>`;
      g += `<polyline points="${main.map((p) => p.join(",")).join(" ")}" class="a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
      const nodes = [...main];
      main.slice(0, 5).forEach((m, i) => { const d = i % 2 ? 1 : -1; let p = m; const pts = [p]; for (let k = 0; k < 2; k++) { p = [p[0] + 20 + r() * 26, p[1] + d * (32 + r() * 18)]; pts.push(p); nodes.push(p); } g += `<polyline points="${pts.map((q) => q.map((v) => v.toFixed(0)).join(",")).join(" ")}" class="a" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>`; });
      nodes.forEach((n) => { const hot = r() < .3; g += `<circle cx="${n[0].toFixed(0)}" cy="${n[1].toFixed(0)}" r="${hot ? 8 : 6}" class="fbg"/><circle cx="${n[0].toFixed(0)}" cy="${n[1].toFixed(0)}" r="${hot ? 8 : 6}" class="${hot ? "c" : "a"}" stroke-width="2.4"/>`; });
    } else if (kind === "grid") {
      for (let x = 0; x < 25; x++) for (let y = 0; y < 13; y++) {
        const d = Math.hypot(x - 13, (y - 6) * 1.5) + r() * 2.2;
        const cls = d < 4 ? "fa" : d < 7.5 ? "fc" : null;
        g += cls ? `<rect x="${12 + x * 21}" y="${8 + y * 21}" width="16" height="16" rx="3" class="${cls}" opacity="${cls === "fc" ? .75 : .9}"/>` : `<rect x="${12 + x * 21}" y="${8 + y * 21}" width="16" height="16" rx="3" class="b" stroke-width=".8"/>`;
      }
    } else if (kind === "flow") {
      const cols = [70, 200, 330, 460];
      for (let c = 0; c < 3; c++) for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { if (r() < .5) continue; const y1 = 70 + i * 70, y2 = 70 + j * 70; g += `<path d="M${cols[c] + 26} ${y1} C ${cols[c] + 70} ${y1}, ${cols[c + 1] - 70} ${y2}, ${cols[c + 1] - 26} ${y2}" class="a" stroke-width="1.8" opacity=".5"/>`; }
      cols.forEach((x, c) => [0, 1, 2].forEach((i) => { g += `<rect x="${x - 26}" y="${70 + i * 70 - 17}" width="52" height="34" rx="6" class="${c === 3 ? "fc" : "fa"}" opacity="${c === 1 || c === 2 ? .8 : 1}"/>`; }));
    } else {
      for (let k = 0; k < 10; k++) { const rad = 20 + k * 19, pts = []; for (let a = 0; a <= 60; a++) { const th = (a / 60) * Math.PI * 2; const rr = rad * (1 + .12 * Math.sin(th * 3 + k * .4) + .07 * Math.cos(th * 5 - k * .3)); pts.push(`${(270 + rr * Math.cos(th) * 1.45).toFixed(1)},${(140 + rr * Math.sin(th)).toFixed(1)}`); } g += `<polygon points="${pts.join(" ")}" class="${k % 3 === 2 ? "a" : "b"}" stroke-width="${k % 3 === 2 ? 1.6 : 1}"/>`; }
      for (let i = 0; i < 16; i++) g += `<circle cx="${(40 + r() * 460).toFixed(0)}" cy="${(25 + r() * 230).toFixed(0)}" r="${(3 + r() * 4).toFixed(1)}" class="fc"/>`;
    }
    return `<svg class="pat" viewBox="0 0 540 281" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect class="fbg" width="540" height="281"/>${g}</svg>`;
  }
  const media = (p, i) => (p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy" decoding="async">` : cover(p.cover, 11 + i * 37));

  /* ---------- Projets ---------- */
  let filter = "all";
  function actions(p, small) {
    const cls = small ? "btn btn-ghost btn-sm" : "btn btn-ghost";
    let h = "";
    if (p.demo) h += `<a class="${cls}" href="${esc(p.demo)}" target="_blank" rel="noopener">${ic("i-external")}${t("btn.demo")}</a>`;
    if (p.github && p.github !== "prive") h += `<a class="${cls}" href="${esc(p.github)}" target="_blank" rel="noopener">${ic("i-github")}${t(p.privateCode ? "btn.showcase" : "btn.code")}</a>`;
    if (small && p.screenshots.length > 1) h += `<button type="button" class="${cls}" data-shots="${p.id}">${ic("i-image")}${t("btn.shots")}</button>`;
    if (p.github === "prive" || p.privateCode) h += `<span class="note">${ic("i-lock")}${t("btn.private")}</span>`;
    return h;
  }
  function renderProjects() {
    $("#project-grid").innerHTML = PROJECTS.map((p, i) => {
      const d = p[lang];
      const tags = p.stack.slice(0, 5).map((s) => `<span class="tag">${esc(s)}</span>`).join("") + (p.stack.length > 5 ? `<span class="tag tag-more">+${p.stack.length - 5}</span>` : "");
      return `<article class="card reveal" data-cats="${p.categories.join(" ")}">
        <button type="button" class="card-media" data-open="${p.id}" aria-label="${esc(t("btn.details") + " : " + d.title)}">${media(p, i)}${p.pro ? `<span class="badge">${ic("i-briefcase")}${t("badge.pro")}</span>` : ""}</button>
        <div class="card-body">
          <p class="kicker">${esc(d.kicker)}</p>
          <h3>${esc(d.title)}</h3>
          <p class="card-summary">${esc(d.summary)}</p>
          <div class="card-tags">${tags}</div>
          <div class="card-actions"><button type="button" class="btn btn-primary btn-sm" data-open="${p.id}">${t("btn.details")}${ic("i-arrow")}</button>${actions(p, true)}</div>
        </div>
      </article>`;
    }).join("") + `<a class="card card-more" href="${esc(PROFILE.github)}?tab=repositories" target="_blank" rel="noopener">
        <span class="more-ic">${ic("i-github")}</span>
        <h3>${t("more.title")}</h3>
        <p>${t("more.text")}</p>
        <span class="btn btn-primary btn-sm">${t("more.btn")}${ic("i-external")}</span>
      </a>`;
    applyFilter(filter);
  }
  function applyFilter(f) {
    filter = f;
    $$("#filters .tab").forEach((b) => { const on = b.dataset.filter === f; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", on); });
    $$("#project-grid .card:not(.card-more)").forEach((c) => { c.hidden = !(f === "all" || c.dataset.cats.split(" ").includes(f)); if (!c.hidden) c.classList.add("is-visible"); });
  }

  /* ---------- Fenêtre projet ---------- */
  const modal = $("#modal"); let lastFocus = null;
  function openProject(id, push = true) {
    const i = PROJECTS.findIndex((x) => x.id === id); if (i < 0) return;
    const p = PROJECTS[i], d = p[lang];
    lastFocus = document.activeElement;
    $("#modal-content").innerHTML = `
      <button type="button" class="icon-btn modal-close" data-close aria-label="${t("modal.close")}">${ic("i-x")}</button>
      <div class="modal-hero">${media(p, i)}</div>
      <div class="modal-body">
        <p class="kicker">${p.pro ? esc(t("badge.pro")) + " · " : ""}${esc(d.kicker)}</p>
        <h2 id="modal-title">${esc(d.title)}</h2>
        <p class="modal-summary">${esc(d.summary)}</p>
        <div class="modal-actions">${actions(p, false)}</div>
        <section class="m-sec"><h3>${t("modal.context")}</h3><p>${esc(d.context)}</p></section>
        <section class="m-sec"><h3>${t("modal.steps")}</h3><ol class="m-steps">${d.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol></section>
        <section class="m-sec"><h3>${t("modal.results")}</h3><ul class="m-results">${d.results.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></section>
        <section class="m-sec"><h3>${t("modal.stack")}</h3><div class="card-tags">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div></section>
        ${p.screenshots.length > 1 ? `<section class="m-sec" id="m-gallery"><h3>${t("modal.gallery")}</h3><div class="gallery">${p.screenshots.map((s, k) => `<button type="button" data-lb="${k}" aria-label="${t("modal.gallery")} ${k + 1}"><img src="${esc(s)}" alt="" loading="lazy"></button>`).join("")}</div></section>` : ""}
      </div>`;
    modal.dataset.id = id;
    if (!modal.open) modal.showModal();
    modal.scrollTop = 0;
    if (push && location.hash !== "#" + id) history.pushState(null, "", "#" + id);
  }
  modal.addEventListener("close", () => {
    if (PROJECTS.some((p) => "#" + p.id === location.hash)) history.pushState(null, "", location.pathname + location.search + "#projets");
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest("[data-close]")) modal.close();
    const b = e.target.closest("[data-lb]"); if (b) openLightbox(modal.dataset.id, +b.dataset.lb);
  });

  /* ---------- Visionneuse ---------- */
  const lb = $("#lightbox"); let list = [], idx = 0;
  function openLightbox(id, i) { list = PROJECTS.find((x) => x.id === id).screenshots; idx = i; showLb(); lb.showModal(); }
  function showLb() { $("#lb-img").src = list[idx]; $("#lb-prev").hidden = $("#lb-next").hidden = list.length < 2; }
  $("#lb-close").addEventListener("click", () => lb.close());
  $("#lb-prev").addEventListener("click", () => { idx = (idx - 1 + list.length) % list.length; showLb(); });
  $("#lb-next").addEventListener("click", () => { idx = (idx + 1) % list.length; showLb(); });
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", (e) => { if (e.key === "ArrowLeft") $("#lb-prev").click(); if (e.key === "ArrowRight") $("#lb-next").click(); });

  /* ---------- Compétences ---------- */
  function renderSkills() {
    $("#skills").innerHTML = SKILLS.map((g) => `
      <article class="skill-card reveal">
        <div class="skill-head"><span class="round-ic">${ic(g.icon)}</span><h3>${esc(g[lang])}</h3></div>
        <ul class="logos">${g.tools.map((x) => `<li class="logo-item">${x.logo ? `<span class="logo"><img src="assets/img/logos/${esc(x.logo)}.svg" alt="" width="20" height="20" loading="lazy"></span>` : `<span class="logo abbr">${esc(x.abbr)}</span>`}<span class="n">${esc(x.name)}</span></li>`).join("")}</ul>
      </article>`).join("");
  }

  /* ---------- Expériences ---------- */
  function renderTimeline() {
    $("#timeline").innerHTML = EXPERIENCES.map((e) => {
      const d = e[lang];
      return `<li class="tl-item reveal"><article class="tl-card">
        <h3>${esc(d.role)} <span class="org">· ${esc(e.org)}</span></h3>
        <p class="tl-meta"><span>${ic("i-calendar")}${esc(d.dates)}</span><span>${ic("i-pin")}${esc(e.place)}</span></p>
        <p class="tl-context"><b>${t("exp.context")}</b> ${esc(d.context)}</p>
        <p class="tl-lab">${t("exp.missions")}</p>
        <ul class="tl-missions">${d.missions.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
        <p class="tl-impact">${ic("i-target")}<span><b>${t("exp.impact")}</b> ${esc(d.impact)}</span></p>
        <div class="tl-tags">${e.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
        ${e.project ? `<button type="button" class="tl-link" data-open="${e.project}">${t("exp.link")}${ic("i-arrow")}</button>` : ""}
      </article></li>`;
    }).join("");
  }

  /* ---------- Apparition au défilement ---------- */
  let io = null;
  function observe() {
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((el) => el.classList.add("is-visible")); return; }
    if (!io) io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("is-visible"); io.unobserve(x.target); } }), { rootMargin: "0px 0px -6% 0px", threshold: .04 });
    $$(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
  }

  /* ---------- Rendu complet ---------- */
  function renderAll() {
    applyTexts(); renderAbout(); renderProjects(); renderSkills(); renderTimeline(); observe();
    if (modal.open && modal.dataset.id) openProject(modal.dataset.id, false);
  }

  /* ---------- Événements ---------- */
  document.addEventListener("click", (e) => {
    const o = e.target.closest("[data-open]"); if (o) { openProject(o.dataset.open); return; }
    const s = e.target.closest("[data-shots]"); if (s) { openProject(s.dataset.shots); const g = $("#m-gallery"); if (g) setTimeout(() => g.scrollIntoView({ block: "start" }), 60); return; }
    const f = e.target.closest("#filters .tab"); if (f) applyFilter(f.dataset.filter);
  });
  $("#lang-toggle").addEventListener("click", () => { lang = lang === "fr" ? "en" : "fr"; store.set("lang", lang); renderAll(); });
  $("#theme-toggle").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next); store.set("theme", next);
  });
  const nav = $("#main-nav"), menu = $("#menu-toggle");
  menu.addEventListener("click", () => { const open = !nav.classList.contains("is-open"); nav.classList.toggle("is-open", open); menu.setAttribute("aria-expanded", open); });
  $$("#main-nav a").forEach((a) => a.addEventListener("click", () => { nav.classList.remove("is-open"); menu.setAttribute("aria-expanded", "false"); }));
  if ("IntersectionObserver" in window) {
    const links = new Map($$("#main-nav a").map((a) => [a.getAttribute("href").slice(1), a]));
    const spy = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { links.forEach((a) => a.classList.remove("is-current")); const a = links.get(x.target.id); if (a) a.classList.add("is-current"); } }), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------- Formulaire : ouvre la messagerie ---------- */
  $("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.currentTarget; let ok = true;
    $$("input, textarea", f).forEach((el) => { const bad = !el.checkValidity() || !el.value.trim(); el.classList.toggle("is-invalid", bad); if (bad) ok = false; });
    if (!ok) { $("#form-msg").textContent = t("form.error"); return; }
    const name = $("#f-name").value.trim(), email = $("#f-email").value.trim(), msg = $("#f-msg").value.trim();
    const subject = (lang === "fr" ? "Contact portfolio : " : "Portfolio contact: ") + name;
    location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg + "\n\n" + name + " (" + email + ")")}`;
    $("#form-msg").textContent = t("form.note");
  });

  renderAll();
  const h = location.hash.slice(1);
  if (PROJECTS.some((p) => p.id === h)) openProject(h, false);
  addEventListener("popstate", () => { const k = location.hash.slice(1); if (PROJECTS.some((p) => p.id === k)) openProject(k, false); else if (modal.open) modal.close(); });
})();
