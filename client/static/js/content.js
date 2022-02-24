const { requestLogin, requestRegistration } = require("./auth");
const { handleEdit, handleDone, handleDelete } = require("./btn_handlers");
const {
  dateCheck,
  createFrequencySelect,
  renderSubHabitInput
} = require("./handler_helpers");
const { getAllUserHabits, postHabit } = require("./requests");

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

  const extra_book = document.createElement("div");
  extra_book.id = "extra_book";
  main.appendChild(extra_book);

  const tilted_book = document.createElement("div");
  tilted_book.id = "tilted_book";
  main.appendChild(tilted_book);

  const pot_top = document.createElement("div");
  pot_top.id = "pot_top";
  main.appendChild(pot_top);

  const pot_top_shadow = document.createElement("div");
  pot_top_shadow.id = "pot_top_shadow";
  main.appendChild(pot_top_shadow);

  const pot_bottom = document.createElement("div");
  pot_bottom.id = "pot_bottom";
  main.appendChild(pot_bottom);

  const flower = document.createElement("span");
  flower.classList = "flower";
  main.appendChild(flower);

  const flower_stem = document.createElement("div");
  flower_stem.id = "flower_stem";
  main.appendChild(flower_stem);

  // for the book details
  const login_book_top = document.createElement("div");
  login_book_top.id = "login_book_top";
  login_book.appendChild(login_book_top);

  const login_book_bottom = document.createElement("div");
  login_book_bottom.id = "login_book_bottom";
  login_book.appendChild(login_book_bottom);

  const signup_book_top = document.createElement("div");
  signup_book_top.id = "signup_book_top";
  signup_book.appendChild(signup_book_top);

  const signup_book_bottom = document.createElement("div");
  signup_book_bottom.id = "signup_book_bottom";
  signup_book.appendChild(signup_book_bottom);

  const extra_book_top = document.createElement("div");
  extra_book_top.id = "extra_book_top";
  extra_book.appendChild(extra_book_top);

  const extra_book_bottom = document.createElement("div");
  extra_book_bottom.id = "extra_book_bottom";
  extra_book.appendChild(extra_book_bottom);

  const tilted_book_top = document.createElement("div");
  tilted_book_top.id = "tilted_book_top";
  tilted_book.appendChild(tilted_book_top);

  const tilted_book_bottom = document.createElement("div");
  tilted_book_bottom.id = "tilted_book_bottom";
  tilted_book.appendChild(tilted_book_bottom);

  // shelf section
  const shelf = document.createElement("div");
  shelf.id = "shelf";
  main.appendChild(shelf);

  const shelf_shadow = document.createElement("div");
  shelf_shadow.id = "shelf_shadow";
  main.appendChild(shelf_shadow);

  const shelf_bottom_right = document.createElement("div");
  shelf_bottom_right.id = "shelf_bottom_right";
  main.appendChild(shelf_bottom_right);

  const shelf_bottom_left = document.createElement("div");
  shelf_bottom_left.id = "shelf_bottom_left";
  main.appendChild(shelf_bottom_left);
}

function renderLoginForm() {
  const main = document.querySelector("main");
  const fields = [
    {
      tag: "input",
      attributes: {
        type: "email",
        name: "email",
        placeholder: "Email",
        pattern: ".+@gmail.com",
        title: "Email incorrect or incomplete"
      }
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
  
  const login_form = document.createElement("div");
  login_form.id = "login_form";
  main.appendChild(login_form);

  const login_front_cover = document.createElement("div");
  login_front_cover.id = "login_front_cover";
  main.appendChild(login_front_cover);


  const login_back_cover = document.createElement("div");
  login_back_cover.id = "login_back_cover";
  main.appendChild(login_back_cover);

  // const login_form_pages = document.createElement("div");
  // login_form_pages.id = "login_form_pages";
  // login_form_pages.classList.add("page1","page2", "page3", "page4", "page5", "page6", "page7")
  // main.appendChild(login_form_pages);

  
  // need to make a div for pages and the center shadow 


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
  const main = document.querySelector("main");
  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerText = `Welcome back ${localStorage.getItem("username")}!`;
  main.appendChild(title);
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

  const editContainer = document.createElement("div");
  editContainer.classList.add("edit_container");
  lhWrapper.appendChild(editContainer);

  return lhWrapper;
};

/**
 * Generates the container and loads the content for the right page
 */
const createRightPage = async () => {
  const rhWrapper = document.createElement("div");
  rhWrapper.classList.add("right_page", "book_page");

  const title = document.createElement("h2");
  title.innerText = `Habits`;
  title.classList.add("title", "right_title");
  rhWrapper.appendChild(title);

  const habitsWrapper = document.createElement("div");
  habitsWrapper.classList.add("habits_wrapper");
  rhWrapper.appendChild(habitsWrapper);

  const allHabits = await createHabitCards();
  allHabits.sort((a, b) => {
    if (a.classList.contains("habit_complete")) {
      a = 1;
    } else {
      a = 0;
    }
    if (b.classList.contains("habit_complete")) {
      b = 1;
    } else {
      b = 0;
    }
    return a - b;
  });
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
      habit.habitId,
      habit.complete
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
  addCard();
}

// card section
const habitName = (habits) => {
  let habitName = document.createElement("h3");
  habitName.classList.add("habit_name", "card_child");
  habitName.innerText = habits;
  return habitName;
};

const frequencySection = (frequency) => {
  let frequencySection = document.createElement("div");
  frequencySection.classList.add("frequency_section", "card_child");
  const daysArr = ["M", "T", "W", "T", "F", "S", "S"];
  let keepDays = "";
  frequency.forEach((elem, index) => {
    if (elem) {
      keepDays += `<div class="f_day active_day">${daysArr[index]}</div>`;
    } else {
      keepDays += `<div class="f_day inactive_day">${daysArr[index]}</div>`;
    }
  });
  frequencySection.innerHTML = keepDays.toString();
  return frequencySection;
};

const streak = (streak) => {
  let streakDiv = document.createElement("div");
  streakDiv.classList.add("streak", "card_child");
  streakDiv.innerText = `Streak: ${streak}`;
  return streakDiv;
};

/**
 * Creates and returns the card containing a habit
 * @param  {string} name - The name of the habit
 * @param  {string} frequency - How often the habit is repeated
 * @param  {int} streakNum - How many times in a row the habit has been completed
 * @param  {arr} subhabitsCont - Any subhabits it has
 * @param  {int} habitId - The id in the DB
 * @param {string} complete - A timestamp of when this was last completed
 */
const createCard = (name, frequency, streakNum, habitId, complete) => {
  let card = document.createElement("div");
  card.classList.add("card");
  if (!dateCheck(complete, frequency)) card.classList.add("habit_complete");
  card.id = `habit_id_${habitId}`;
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete_btn", "btn");
  deleteBtn.innerText = "X";
  card.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", handleDelete);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card_content");
  cardContent.append(
    habitName(name),
    frequencySection(frequency),
    streak(streakNum)
  );

  const cardBtns = document.createElement("div");
  cardBtns.classList.add("card_btns");
  cardBtns.append(createBtn("edit"), createBtn("done"));

  card.append(cardContent, cardBtns);
  // card.querySelector(".edit_btn").addEventListener("click", handleEdit);
  card.querySelector(".done_btn").addEventListener("click", handleDone);
  card.addEventListener("click", handleEdit);
  return card;
};

// function renderSubHabitInput() {
//   const newHabitForm = document.getElementById("newHabitForm");
//   const subHabitName = document.createElement("input");
//   subHabitName.name = "subHabitName";
//   subHabitName.classList.add("subHabitName");
//   subHabitName.placeholder = "Subhabit Name";
//   newHabitForm.appendChild(subHabitName);
// }

function renderNewHabitForm() {
  let lhWrapper = document.querySelector(".edit_container");
  lhWrapper.innerHTML = "";

  const title = document.createElement("h2");
  title.innerText = `New Habit`;
  title.classList.add("title", "left_title");
  lhWrapper.appendChild(title);

  const newHabitForm = document.createElement("form");
  newHabitForm.id = "newHabitForm";
  lhWrapper.appendChild(newHabitForm);
  const newHabitName = document.createElement("input");
  newHabitName.id = "newHabitName";
  newHabitName.placeholder = "Habit Name";
  newHabitName.required = "true";
  const habitLabel = document.createElement("label");
  habitLabel.htmlFor = "newHabitName";
  habitLabel.innerText = "What's your habit called?";
  newHabitForm.appendChild(habitLabel);
  newHabitForm.appendChild(newHabitName);

  newHabitForm.appendChild(createFrequencySelect([1, 1, 1, 1, 1, 1, 1]));

  const addSubHabit = document.createElement("div");
  addSubHabit.textContent = "Add Subhabit +";
  newHabitForm.append(addSubHabit);
  addSubHabit.addEventListener("click", renderSubHabitInput);

  const newHabitSubmit = document.createElement("input");
  newHabitSubmit.type = "submit";
  newHabitSubmit.value = "Create";
  newHabitSubmit.classList.add("btn", "lh_btn", "create_btn");
  newHabitForm.appendChild(newHabitSubmit);
  addEventListener("submit", postHabit);
}

// creating a new card for habits - the plus card
const addCard = () => {
  let wrapper = document.querySelector(".habits_wrapper");

  let addDiv = document.createElement("div");
  addDiv.classList.add("add_div", "card");
  addDiv.innerText = "+";

  addDiv.addEventListener("click", renderNewHabitForm);

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
  const btn = document.createElement("button");
  btn.classList.add("habit_btn", `${text}_btn`, "btn");
  btn.innerText = text;

  return btn;
};

module.exports = {
  renderHomepage,
  renderLoginForm,
  renderSignupForm,
  createBook,
  createLeftPage,
  renderHabitPage,
  addCard
};
