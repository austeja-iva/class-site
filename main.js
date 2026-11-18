// Builds the project cards and the thoughts list from data.js.
// You normally don't need to touch this file.

const linkLabels = { github: "GitHub", demo: "Live demo", devpost: "Devpost", paper: "Paper" };

function renderProjects(filter) {
  const grid = document.getElementById("project-grid");
  const items = PROJECTS.filter((p) => filter === "all" || p.type === filter);

  grid.innerHTML = items
    .map((p) => {
      const tags = (p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
      const links = Object.entries(p.links || {})
        .filter(([, url]) => url)
        .map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener">${linkLabels[k] || k} ↗</a>`)
        .join("");
      const badge = p.type === "competition" ? `<span class="badge">Competition</span>` : "";
      const award = p.award ? `<p class="award">${p.award}</p>` : "";

      return `
        <article class="card">
          ${badge}
          <h3>${p.title}</h3>
          ${award}
          <p>${p.description}</p>
          <div class="tags">${tags}</div>
          <div class="card-links">${links}</div>
        </article>`;
    })
    .join("");
}

function renderThoughts() {
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
}

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

renderProjects("all");
renderThoughts();
document.getElementById("year").textContent = new Date().getFullYear();
