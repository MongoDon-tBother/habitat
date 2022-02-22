const { requestLogin, requestRegistration } = require("./auth");
const { handleEdit, handleDone } = require("./btn_handlers");
const { getAllUserHabits } = require("./requests");

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
/**
 * Creates the book element
 */
const createBook = () => {
  const book = document.createElement("div");
  book.classList.add("book");

  return book;
};
/**
 * Generates the container and welcome text for the left hand page
 */
const createLeftPage = () => {
  const lhWrapper = document.createElement("div");
  lhWrapper.classList.add("left_page", "book_page");

  const title = document.createElement("h1");
  title.innerText = `Welcome back ${localStorage.getItem("username")}!`;
  lhWrapper.appendChild(title);

  return lhWrapper;
};

/**
 * Generates the container and loads the content for the right page
 */
const createRightPage = async () => {
  const rhWrapper = document.createElement("div");
  rhWrapper.classList.add("right_page", "book_page");

  const title = document.createElement("h2");
  title.innerText = `Habits:`;
  rhWrapper.appendChild(title);

  const habitsWrapper = document.createElement("div");
  habitsWrapper.classList.add("habits_wrapper");
  rhWrapper.appendChild(habitsWrapper);

  const allHabits = await createHabitCards();
  allHabits.forEach((habit) => {
    habitsWrapper.appendChild(habit);
  });

  return rhWrapper;
};
/**
 * Returns an array containing all of the habits for the current user
 */
async function createHabitCards() {
  const habits = await getAllUserHabits();
  const habitsArr = [];
  for (let habit of habits) {
    const newCard = createCard(
      habit.name,
      habit.frequency,
      habit.streak,
      habit.subhabits,
      habit.habitId
    );
    habitsArr.push(newCard);
  }
  return habitsArr;
}

async function renderHabitPage() {
  const main = document.querySelector("main");
  const book = createBook();
  book.append(createLeftPage(), await createRightPage());
  main.appendChild(book);

  // const welcomeMessage = document.createElement("h2");
  // welcomeMessage.textContent =
  //   "YO BITCHESSSSSSSSSSS THIS IS YO MFING PAGE WHERRE YOU KEEP TRACCK OF YO HABITS ";
  // main.appendChild(welcomeMessage);

  // const leftpage = document.createElement("div");
  // leftpage.id = "leftpage";
  // leftpage.textContent = "Left Page";
  // book.appendChild(leftpage);

  // const rightpage = document.createElement("div");
  // rightpage.id = "rightpage";

  // const rhWrapperDiv = document.createElement("div");
  // rhWrapperDiv.classList.add("rh_wrapper");
  // rightpage.appendChild(rhWrapperDiv);
  // book.appendChild(rightpage);

  // const today = new Date().toISOString().substring(0, 10);
  // const todaysDate = document.createElement("div");
  // todaysDate.innerHTML = '<input type="date" name="inputHabitsDate">';
  // rightpage.append(todaysDate);
  // todaysDate.querySelector(".inputHabitsDate").setAttribute("value", today);

  // const wrapperDiv = document.createElement("div");
  // wrapperDiv.id = "lh_wrapper";
  // wrapperDiv.classList = "lh_wrapper";
  // wrapperDiv.textContent = "this is the wrapper of wraps rap rap";

  // leftpage.appendChild(wrapperDiv);
  // const createCardDiv = document.createElement("div");
  // createCardDiv.textContent = "creating Card";
  // wrapperDiv.appendChild(createCardDiv);

  // const habitDropdown = document.createElement("div");
  // habitDropdown.textContent = "habitDropdown";
  // wrapperDiv.appendChild(habitDropdown);

  // const habitOptions = document.createElement("h2");
  // habitOptions.textContent = "habitOptions";
  // wrapperDiv.appendChild(habitOptions);

  // const periodToggle = document.createElement("div");
  // periodToggle.textContent = "periodToggle - day or weekly";
  // wrapperDiv.appendChild(periodToggle);

  // const timeChecklist = document.createElement("div");
  // timeChecklist.textContent = "timeChecklist - day or weekly";
  // wrapperDiv.appendChild(timeChecklist);

  // const dayChecklist = document.createElement('div')
  // dayChecklist.textContent = 'dayChecklist '
  // wrapperDiv.appendChild(dayChecklist)
  // // this will be if day is selected, then div will drop with tasks to do throughout day

  // const dayCheck = document.createElement('h2')
  // dayCheck.textContent = 'dayCheck '
  // wrapperDiv.appendChild(dayCheck)
  // // the actual list of activties of habits they wish to for the day - the habit option would be hidden along side the week checklist

  // const weekChecklist = document.createElement("div");
  // weekChecklist.textContent = "weekChecklist";
  // wrapperDiv.appendChild(weekChecklist);
  // // radio buttons so when clicked, it will filter which days the habit are for through the week

  // const notesDiv = document.createElement("div");
  // notesDiv.textContent = "notesDiv";
  // wrapperDiv.appendChild(notesDiv);

  // const updateButton = document.createElement("div");
  // updateButton.textContent = "updateButton";
  // wrapperDiv.appendChild(updateButton);
  // // wrapperDiv.appendChild(addhabit);
}

// const subHabits = (subHabits) => {
//   if (!subHabits) return "";
//   let subHabit = document.createElement("div");
//   subHabit.classList.add("subHabits", "card_child");
//   subHabit.innerText = subHabits;
//   return subHabit;
// };

// card section
const habitName = (habits) => {
  let habitName = document.createElement("h2");
  habitName.classList.add("habitName", "card_child");
  habitName.innerText = habits;
  return habitName;
};

// const timeSection = (time) => {
//   let timeSection = document.createElement("div");
//   timeSection.classList.add("timeSection", "card_child");
//   timeSection.innerText = time;
//   return timeSection;
// };

const frequencySection = (frequency) => {
  let frequencySection = document.createElement("div");
  frequencySection.classList.add("frequencySection", "card_child");
  const daysArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let keepDays = [];
  frequency.forEach((elem, index) => {
    if (elem) keepDays.push(daysArr[index]);
  });

  if (keepDays.length === 7) keepDays = "Every day";
  if (keepDays.toString() === "Mon,Tue,Wed,Thu,Fri") {
    keepDays = "Weekdays";
  }
  if (keepDays.toString() === "Sat,Sun") keepDays = "Weekends";
  if (keepDays.length === 1) keepDays = `Weekly on ${keepDays[0]}`;

  frequencySection.innerText = keepDays;
  return frequencySection;
};

const streak = (streak) => {
  let streakDiv = document.createElement("div");
  streakDiv.classList.add("streak", "card_child");
  streakDiv.innerText = streak;
  return streakDiv;
};

// Creates the message part on diary journal
// const noteSection = (body) => {
//   let notes = document.createElement("p");
//   notes.classList.add("notes_elem", "card_child");
//   notes.innerText = "Notes:";

//   return notes;
// };
/**
 * Creates and returns the card containing a habit
 * @param  {string} name - The name of the habit
 * @param  {string} frequency - How often the habit is repeated
 * @param  {int} streakNum - How many times in a row the habit has been completed
 * @param  {Object} subhabitsCont - Any subhabits it has
 * @param  {int} habitId - The id in the DB
 */
const createCard = (name, frequency, streakNum, subhabitsCont, habitId) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.id = `habit_id_${habitId}`;

  const cardContent = document.createElement("div");
  cardContent.classList.add("card_content");
  cardContent.append(
    habitName(name),
    frequencySection(frequency),
    streak(streakNum)
    // subHabits(subhabitsCont)
  );

  const cardBtns = document.createElement("div");
  cardBtns.classList.add("card_btns");
  cardBtns.append(createBtn("edit"), createBtn("done"));

  card.append(cardContent, cardBtns);
  card.querySelector(".edit_btn").addEventListener("click", handleEdit);
  card.querySelector(".done_btn").addEventListener("click", handleDone);

  return card;
};

// creating a new card for habits - the plus card
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

/**
 * Creates a btn with an id matching it's text
 * @param  {string} text - The text to display on the btn
 */
const createBtn = (text) => {
  const btn = document.createElement("btn");
  btn.classList.add("habit_btn", `${text}_btn`);
  btn.innerText = text;

  return btn;
};

module.exports = {
  renderHomepage,
  renderLoginForm,
  renderSignupForm,
  renderHabitPage,
  addCard,
  createCard
};
