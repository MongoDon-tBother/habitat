(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
async function requestLogin(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    };
    const r = await fetch(`http://localhost:3000/auth/login`, options);
    const data = await r.json();
    if (!data.success) {
      throw new Error("Login not authorised");
    }
    login(data.token);
  } catch (err) {
    console.warn(err);
  }
}

async function requestRegistration(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    };
    const r = await fetch(`http://localhost:3000/auth/register`, options);
    const data = await r.json();
    if (data.err) {
      throw Error(data.err);
    }
    requestLogin(e);
  } catch (err) {
    console.warn(err);
  }
}

function login(token) {
  const user = jwt_decode(token);
  localStorage.setItem("token", token);
  localStorage.setItem("username", user.username);
  localStorage.setItem("userEmail", user.email);
  localStorage.setItem("userID", user.userID);
  window.location.hash = "#habit";
}

function logout() {
  localStorage.clear();
  window.location.hash = "#login";
}

function currentUser() {
  const username = localStorage.getItem("username");
  return username;
}

module.exports = { currentUser, requestLogin, requestRegistration, logout };

},{}],2:[function(require,module,exports){
const { requestLogin, requestRegistration } = require("./auth");

function renderHomepage() {
  const main = document.querySelector("main");
  const logo = document.createElement("img");
  logo.id = "logo";
  logo.src =
    "https://images-platform.99static.com//n7liZzsSMdHX6uDJpYOA2QTUVeA=/163x13:1335x1185/fit-in/500x500/99designs-contests-attachments/116/116335/attachment_116335822";
  logo.alt = "habitat logo";
  main.appendChild(logo);
  const login_book = document.createElement("div");
  login_book.id = "login_book";
  main.appendChild(login_book);

  const signup_book = document.createElement("div");
  signup_book.id = "signup_book";
  main.appendChild(signup_book);

  const shelf = document.createElement("div");
  shelf.id = "shelf";
  main.appendChild(shelf);
}

function renderLoginForm() {
  const main = document.querySelector("main");
  const fields = [
    {
      tag: "input",
      attributes: { type: "email", name: "email", placeholder: "Email" }
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "password",
        placeholder: "Password"
      }
    },
    { tag: "input", attributes: { type: "submit", value: "Login" } }
  ];
  const form = document.createElement("form");
  fields.forEach((f) => {
    let field = document.createElement(f.tag);
    Object.entries(f.attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      form.appendChild(field);
    });
  });
  form.addEventListener("submit", requestLogin);
  main.appendChild(form);
}

function renderSignupForm() {
  const main = document.querySelector("main");
  const fields = [
    {
      tag: "input",
      attributes: { type: "text", name: "username", placeholder: "Username" }
    },
    {
      tag: "input",
      attributes: { type: "email", name: "email", placeholder: "Email" }
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "password",
        placeholder: "Password"
      }
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "passwordConfirmation",
        placeholder: "Confirm Password"
      }
    },
    { tag: "input", attributes: { type: "submit", value: "Create Account" } }
  ];
  const form = document.createElement("form");
  fields.forEach((f) => {
    let field = document.createElement(f.tag);
    Object.entries(f.attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      form.appendChild(field);
    });
  });
  form.addEventListener("submit", requestRegistration);
  main.appendChild(form);
}

function renderHabitPage() {
  const main = document.querySelector("main");
  const newHabit = document.createElement("div");
  newHabit.textContent = "newHabit";
  main.appendChild(newHabit);

  const welcomeMessage2 = document.createElement("h1");
  welcomeMessage2.textContent = `Welcome back ${localStorage.getItem(
    "username"
  )}!`;
  main.appendChild(welcomeMessage2);

  const welcomeMessage = document.createElement("h2");
  welcomeMessage.textContent =
    "YO BITCHESSSSSSSSSSS THIS IS YO MFING PAGE WHERRE YOU KEEP TRACCK OF YO HABITS ";
  main.appendChild(welcomeMessage);

  const leftpage = document.createElement("div");
  leftpage.id = "leftpage";
  leftpage.textContent = "Left Page";
  main.appendChild(leftpage);

  const rightpage = document.createElement("div");
  rightpage.id = "rightpage";
  rightpage.textContent = "Right Page";
  main.appendChild(rightpage);

  /*
  const today = new Date().toISOString().substring(0, 10);
  const todaysDate = document.createElement('div')
  todaysDate.innerHTML =
    '<input type="date" name="inputHabitsDate">';
  rightpage.append(todaysDate)
  todaysDate.querySelector(".inputHabitsDate").setAttribute("value", today);

 

  const wrapperDiv = document.createElement('div')
  wrapperDiv.id = 'wrapper'
  wrapperDiv.classList = 'wrapper'
  wrapperDiv.textContent = 'this is the wrapper of wraps rap rap'
  wrapperDiv.style.display = 'block'
  rightpage.appendChild(wrapperDiv)
  const addhabit = document.createElement("h1");
  addhabit.textContent = "Click to add habit"
  
  wrapperDiv.appendChild(addhabit)



  const modalsection = document.createElement('section')
  modalsection.id = 'modal'
  modalsection.style = 'display: none;'
  leftpage.appendChild(modalsection)

  const modali = document.createElement("i")
  modalsection.appendChild(modali)
  const modala = document.createElement("a")
  modala.href = "#"
  modala.addEventListener('click', () => {
    window.location.reload();
  })
  modala.textContent = 'x'
  modali.appendChild(modala)
  const modalh2 = document.createElement("h2")
  modalsection.appendChild(modalh2)
  const modalarticle = document.createElement('article')
  modalsection.appendChild(modalarticle);

*/
}

/*

function renderLoginForm() {
  const deardiary = document.createElement("h1");
  deardiary.id = "deardiary";
  deardiary.textContent = "Dear Diary";
  main.appendChild(deardiary);

  const loginform = document.createElement('form');
  loginform.id = "loginform";

  const usernamelabel = document.createElement("label");
  usernamelabel.textContent = "Username";
  loginform.appendChild(usernamelabel);
  const usernameinput = document.createElement("input");
  usernameinput.type = "text";
  usernameinput.id = "usernameinput";
  loginform.appendChild(usernameinput);

  const passwordlabel = document.createElement("label");
  passwordlabel.textContent = "Password";
  loginform.appendChild(passwordlabel);
  const passwordinput = document.createElement("input");
  passwordinput.type = "password";
  passwordinput.id = "passwordinput";
  loginform.appendChild(passwordinput);

  const submitinput = document.createElement("input");
  submitinput.type = 'submit'
  submitinput.value = "Login"
  loginform.appendChild(submitinput)

  loginform.addEventListener("submit", requestLogin);
  main.appendChild(loginform)


}

function renderSignupForm() {
  const signup = document.createElement("h1");
  signup.id = "signup";
  signup.textContent = "Create Account";
  main.appendChild(signup);

  const signupform = document.createElement("form");
  signupform.id = "signupform";

  const createusernamelabel = document.createElement("label");
  createusernamelabel.textContent = "Username";
  signupform.appendChild(createusernamelabel);

    const createusernameinput = document.createElement("input");
    createusernameinput.type = "text";
    createusernameinput.id = "createusernameinput";
    signupform.appendChild(createusernameinput);

   const createemaillabel = document.createElement("label");
   createemaillabel.textContent = "Email";
   signupform.appendChild(createemaillabel);
   const createemailinput = document.createElement("input");
   createemailinput.type = "email";
   createemailinput.id = "createemailinput";
   signupform.appendChild(createemailinput);

  const createpasswordlabel = document.createElement("label");
  createpasswordlabel.textContent = "Password";
  signupform.appendChild(createpasswordlabel);
  const createpasswordinput = document.createElement("input");
  createpasswordinput.type = "password";
  createpasswordinput.id = "createpasswordinput";
  signupform.appendChild(createpasswordinput);

   const confirmpasswordlabel = document.createElement("label");
   confirmpasswordlabel.textContent = "Confirm Password";
   signupform.appendChild(confirmpasswordlabel);
   const confirmpasswordinput = document.createElement("input");
   confirmpasswordinput.type = "password";
   confirmpasswordinput.id = "confirmpasswordinput";
   signupform.appendChild(confirmpasswordinput);

  const createsubmitinput = document.createElement("input");
  createsubmitinput.type = "submit";
  createsubmitinput.value = "Login";
  signupform.appendChild(createsubmitinput);

  signupform.addEventListener("submit", requestRegistration);
  main.appendChild(signupform);
}

*/

function render404() {
  const error = document.createElement("h2");
  error.textContent = "Oops, we can't find that page sorry!";
  main.appendChild(error);
}

module.exports = {
  renderHomepage,
  renderLoginForm,
  renderSignupForm,
  renderHabitPage
};

},{"./auth":1}],3:[function(require,module,exports){
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

},{"./auth":1,"./content":2}],4:[function(require,module,exports){
const { updateContent } = require("./layout");

const main = document.querySelector("main");

updateContent();

},{"./layout":3}]},{},[4]);
