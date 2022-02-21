const main = document.querySelector("main");

const publicRoutes = ["#", "#login", "#signup"];
const privateRoutes = ["#habit"];

window.addEventListener("hashchange", updateContent);


function updateMain(path) {
  main.innerHTML = "";
  if (path) {
    switch (path) {
      case "#login":
        renderLoginForm();
        break;
      case "#signup":
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







updateContent();
