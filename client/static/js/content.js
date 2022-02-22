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

  main.appendChild(wrapperDiv)
  const createCard = document.createElement('div')
  createCard.textContent = 'creating Card'
  wrapperDiv.appendChild(createCard)

  const habitDropdown = document.createElement('div')
  habitDropdown.textContent = 'habitDropdown'
  wrapperDiv.appendChild(habitDropdown)

  const habitOptions = document.createElement('h2')
  habitOptions.textContent = 'habitOptions'
  wrapperDiv.appendChild(habitOptions)

  const periodToggle = document.createElement('div')
  periodToggle.textContent = 'periodToggle - day or weekly'
  wrapperDiv.appendChild(periodToggle)

  const timeChecklist = document.createElement('div')
  timeChecklist.textContent = 'timeChecklist - day or weekly'
  wrapperDiv.appendChild(timeChecklist)

  const dayChecklist = document.createElement('div')
  dayChecklist.textContent = 'dayChecklist '
  wrapperDiv.appendChild(dayChecklist)
  // this will be if day is selected, then div will drop with tasks to do throughout day

  const dayCheck = document.createElement('h2')
  dayCheck.textContent = 'dayCheck '
  wrapperDiv.appendChild(dayCheck)
  // the actual list of activties of habits they wish to for the day - the habit option would be hidden along side the week checklist
  

  const weekChecklist = document.createElement('div')
  weekChecklist.textContent = 'weekChecklist'
  wrapperDiv.appendChild(weekChecklist)
  // radio buttons so when clicked, it will filter which days the habit are for through the week

  
  const notesDiv = document.createElement('div')
  notesDiv.textContent = 'notesDiv'
  wrapperDiv.appendChild(notesDiv)

  const updateButton = document.createElement('div ')
  updateButton.textContent = 'updateButton'
  wrapperDiv.appendChild(updateButton)
}



  wrapperDiv.appendChild(addhabit)

}




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

// card section 
const habitName = (habits) => {
  let habitName = document.createElement("h2");
  habitName.classList.add("habitName", "card_child");
  return habitName;
};

const timeSection = (time) => {
  let timeSection = document.createElement("div");
  timeSection.classList.add("timeSection", "card_child");
  return timeSection;
};

const frequencySection = (frequency) => {
  let frequencySection = document.createElement("div");
  frequencySection.classList.add("frequencySection", "card_child");
  return frequencySection;
};

// Creates the message part on diary journal 
const noteSection = (body) => {
  
  let notes = document.createElement("p");
  notes.classList.add("notes_elem", "card_child");
  notes.innerText = 'Notes:'

  return notes;
};

const createCard = (habits, time, frequencey, body) => {
  let wrapper = document.querySelector(".wrapper");
  let card = document.createElement("div");
  card.classList.add("card");
  card.append(
    habitName(habits),
    timeSection(time),
    frequencySection(frequency),
    noteSection(body)
  );
};

// creating a new card for habits
const addCard = () => {
  let wrapper = document.querySelector(".wrapper");

  let addDiv = document.createElement("div");
  addDiv.classList.add("add_div", "card", "no_tag");
  addDiv.innerText = "+";
  addDiv.addEventListener("click", showForm);


  wrapper.prepend(addDiv);
};


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

