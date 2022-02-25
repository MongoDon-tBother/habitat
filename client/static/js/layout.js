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
    logoutBtn.classList.add("logout_btn");
    logoutBtn.onclick = logout;
    nav.appendChild(logoutBtn);
  } else {
    links = publicRoutes.map(createNavLink);
    homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    homeBtn.classList.add("logout_btn");
    homeBtn.onclick = home;
    nav.appendChild(homeBtn);
  }
}
function home() {
  window.location.hash = "#";
}

function updateMain(path) {
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
        renderHomepage();
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
  const main = document.querySelector("main");
  main.innerHTML = "";
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
