// Builds the page from data.js and handles the tabs.
// You normally don't need to touch this file.

const linkLabels = { github: "GitHub", demo: "Live demo", devpost: "Devpost", paper: "Paper", writeup: "Write-up" };

// ---------- Card builder (shared by every section) ----------
function cardHTML(item, badgeText) {
  const tags = (item.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
  const links = Object.entries(item.links || {})
    .filter(([, url]) => url)
    .map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener">${linkLabels[k] || k} ↗</a>`)
    .join("");
  const badge = badgeText ? `<span class="badge">${badgeText}</span>` : "";
  const award = item.award ? `<p class="award">${item.award}</p>` : "";

  return `
    <article class="card">
      ${badge}
      <h3>${item.title}</h3>
      ${award}
      <p>${item.description}</p>
      <div class="tags">${tags}</div>
      <div class="card-links">${links}</div>
    </article>`;
}

function renderGrid(gridId, items, makeBadge) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = items.length
    ? items.map((item) => cardHTML(item, makeBadge(item))).join("")
    : `<p class="empty muted">Nothing here yet. Check back soon.</p>`;
}

// ---------- Sub-tab filters (Projects + Extracurriculars) ----------
function setupFilters(filtersId, categories, onChange) {
  const box = document.getElementById(filtersId);
  const all = [{ key: "all", label: "All" }, ...categories];
  box.innerHTML = all
    .map((c) => `<button class="filter${c.key === "all" ? " active" : ""}" data-filter="${c.key}">${c.label}</button>`)
    .join("");

  box.querySelectorAll(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      box.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      onChange(btn.dataset.filter);
    });
  });
  onChange("all");
}

const labelFor = (cats, key) => (cats.find((c) => c.key === key) || {}).label || key;

setupFilters("project-filters", PROJECT_CATEGORIES, (filter) => {
  const items = PROJECTS.filter((p) => filter === "all" || p.categories.includes(filter));
  renderGrid("project-grid", items, (p) => labelFor(PROJECT_CATEGORIES, p.categories[0]));
});

setupFilters("extra-filters", EXTRA_CATEGORIES, (filter) => {
  const items = EXTRACURRICULARS.filter((e) => filter === "all" || e.category === filter);
  renderGrid("extra-grid", items, (e) => labelFor(EXTRA_CATEGORIES, e.category));
});

// ---------- Courses ----------
renderGrid("course-grid", COURSES, (c) => c.code);

// ---------- Thoughts ----------
(function renderThoughts() {
  const list = document.getElementById("thought-list");
  const sorted = [...THOUGHTS].sort((a, b) => b.date.localeCompare(a.date));
  list.innerHTML = sorted
    .map(
      (t) => `
      <li>
        <a href="${t.url}">
          <time>${t.date}</time>
          <span class="thought-title">${t.title}</span>
          <span class="muted">${t.summary}</span>
        </a>
      </li>`
    )
    .join("");
})();

// ---------- Header tabs: show one section at a time ----------
const panels = [...document.querySelectorAll(".tab-panel")];
const tabLinks = [...document.querySelectorAll(".tabs a")];

function showTab() {
  const id = location.hash.slice(1);
  const target = panels.find((p) => p.id === id) ? id : "about";
  panels.forEach((p) => (p.hidden = p.id !== target));
  tabLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + target));
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", showTab);
showTab();
// The browser jumps to #section on page load; undo that so the tab starts at the top.
window.addEventListener("load", () => setTimeout(() => window.scrollTo(0, 0), 0));

document.getElementById("year").textContent = new Date().getFullYear();
