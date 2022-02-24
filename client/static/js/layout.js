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

module.exports = { updateContent };
