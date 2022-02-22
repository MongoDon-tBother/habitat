const { currentUser, logout } = require("./auth");
const {
  renderHomepage,
  renderLoginForm,
  renderSignupForm,
  renderHabitPage
} = require("./content");

const nav = document.querySelector("nav");

const publicRoutes = ["#", "#login", "#register"];
const privateRoutes = ["#habit"];

window.addEventListener("hashchange", updateContent);

function updateNav() {
  nav.innerHTML = "";
  let links;
  let logoutBtn;
  if (currentUser()) {
    links = privateRoutes.map(createNavLink);
    logoutBtn = document.createElement("button");
    logoutBtn.textContent = "Logout";
    logoutBtn.onclick = logout;
    nav.appendChild(logoutBtn);
  } else {
    links = publicRoutes.map(createNavLink);
  }
  links.forEach((l) => nav.insertBefore(l, logoutBtn));
}

function updateMain(path) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  if (path) {
    switch (path) {
      case "#login":
        renderLoginForm();
        break;
      case "#register":
        renderSignupForm();
        break;
      case "#habit":
        renderHabitPage();
        break;
      default:
        render404();
        break;
    }
  } else {
    renderHomepage();
  }
}

function createNavLink(route) {
  const link = document.createElement("a");
  link.textContent =
    route === "#" ? "Home" : `${route[1].toUpperCase()}${route.substring(2)}`;
  link.href = route;
  return link;
}

function updateContent() {
  const path = window.location.hash;
  if (privateRoutes.includes(path) && !currentUser()) {
    window.location.hash = "#";
  } else if (!privateRoutes.includes(path) && currentUser()) {
    window.location.hash = "#habit";
  } else {
    updateNav();
    updateMain(path);
  }
}

async function loadIndexFor(category) {
  modal.style.display = "none";
  const data = await getAll(category);
  data.forEach((a) => renderCard(a, category));
}

function renderCard(data, category) {
  let link = document.createElement("a");
  let card = document.createElement("div");
  card.className = "card";
  link.href = `#${category}/${data.id}`;
  card.textContent = data.name || data.title;
  link.appendChild(card);
  main.appendChild(link);
}

module.exports = { updateContent };
