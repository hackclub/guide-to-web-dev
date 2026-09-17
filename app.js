const navList = document.getElementById("nav-list");
const contentEl = document.getElementById("guide-content");

let guides = [];

async function init() {
  try {
    const res = await fetch("guide/manifest.json");
    if (!res.ok) throw new Error(`manifest.json: HTTP ${res.status}`);
    guides = await res.json();
  } catch (err) {
    navList.innerHTML = `<p class="error">Couldn't load guide/manifest.json.<br>${err.message}</p>`;
    contentEl.innerHTML = `<p class="error">Are you opening this over http:// (not file://)? See README.md.</p>`;
    return;
  }

  renderNav();
  window.addEventListener("hashchange", loadFromHash);
  loadFromHash();
}

function renderNav() {
  navList.innerHTML = "";
  let lastSection = null;

  for (const guide of guides) {
    if (guide.section && guide.section !== lastSection) {
      lastSection = guide.section;
      const heading = document.createElement("div");
      heading.className = "nav-section-title";
      heading.textContent = guide.section;
      navList.appendChild(heading);
    }

    const link = document.createElement("a");
    link.className = "nav-link";
    link.href = `#${guide.file}`;
    link.textContent = guide.title || guide.file;
    link.dataset.file = guide.file;
    navList.appendChild(link);
  }
}

function currentFileFromHash() {
  const hash = decodeURIComponent(location.hash.replace(/^#/, ""));
  if (hash && guides.some((g) => g.file === hash)) return hash;
  return guides[0] ? guides[0].file : null;
}

async function loadFromHash() {
  const file = currentFileFromHash();
  if (!file) {
    contentEl.innerHTML = `<p class="error">No guides found. Add one to guide/ and list it in guide/manifest.json.</p>`;
    return;
  }

  highlightActive(file);
  contentEl.innerHTML = `<p class="loading">Loading…</p>`;

  try {
    const res = await fetch(`guide/${file}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const markdown = await res.text();
    contentEl.innerHTML = marked.parse(markdown);
  } catch (err) {
    contentEl.innerHTML = `<p class="error">Couldn't load guide/${file}.<br>${err.message}</p>`;
  }
}

function highlightActive(file) {
  for (const link of navList.querySelectorAll(".nav-link")) {
    link.classList.toggle("active", link.dataset.file === file);
  }
}

init();
