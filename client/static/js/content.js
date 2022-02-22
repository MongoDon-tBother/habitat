const { requestLogin, requestRegistration } = require("./auth");
const { handleEdit, handleDone, handleDelete } = require("./btn_handlers");
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

  const shelf = document.createElement("div");
  shelf.id = "shelf";
  main.appendChild(shelf);
}

function renderLoginForm() {
  const main = document.querySelector("main");
  const fields = [
    {
      tag: "input",
      attributes: { type: "email", name: "email", placeholder: "Email",  pattern:".+@gmail\.com", title: "Email incorrect or incomplete"}
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "password",
        placeholder: "Password",
        pattern: "[a-z]{5,12}", 
        title:"Invalid password"
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
      attributes: { type: "text", name: "username", placeholder: "Username" , required: "true",  pattern: "[a-z]{5,12}",  title:"5 to 12 lowercase letters"}
    },
    {
      tag: "input",
      attributes: { type: "email", name: "email", placeholder: "Email" ,   required: "true" ,   pattern:".+@gmail\.com",  title:"please input your gmail account"}
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "password",
        placeholder: "Password",
        required: "true",
        pattern: "[a-z]{5,12}", 
        // title:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        title:"5 to 12 lowercase letters"
      }
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "passwordConfirmation",
        placeholder: "Confirm Password",
        required: "true",
        // pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$", 
        title:"Password doesn't match"
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
  title.classList.add("title", "left_title");
  title.innerText = `Welcome back ${localStorage.getItem("username")}!`;
  lhWrapper.appendChild(title);

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
  title.innerText = `Habits:`;
  title.classList.add("title", "right_title");
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
  addCard()
}

// card section
const habitName = (habits) => {
  let habitName = document.createElement("h2");
  habitName.classList.add("habit_name", "card_child");
  habitName.innerText = habits;
  return habitName;
};

const frequencySection = (frequency) => {
  let frequencySection = document.createElement("div");
  frequencySection.classList.add("frequency_section", "card_child");
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

/**
 * Creates and returns the card containing a habit
 * @param  {string} name - The name of the habit
 * @param  {string} frequency - How often the habit is repeated
 * @param  {int} streakNum - How many times in a row the habit has been completed
 * @param  {arr} subhabitsCont - Any subhabits it has
 * @param  {int} habitId - The id in the DB
 */
const createCard = (name, frequency, streakNum, subhabitsCont, habitId) => {
  let card = document.createElement("div");
  card.classList.add("card");
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

function renderSubHabitForm() {
  const newHabitForm = document.getElementById("newHabitForm")
  const subHabitForm = document.createElement("form")
  newHabitForm.appendChild(subHabitForm)
  const subHabitName = document.createElement("input");
  subHabitName.id = "subHabitName";
  subHabitName.placeholder = "Subhabit Name";
  subHabitForm.appendChild(subHabitName);
}

function renderNewHabitForm() {
  let lhWrapper = document.querySelector(".left_page");
  const newHabitForm = document.createElement("form");
  newHabitForm.id = "newHabitForm"; 
  lhWrapper.appendChild(newHabitForm);
  const newHabitName = document.createElement('input')
  newHabitName.id = 'newHabitName'
  newHabitName.placeholder = "Habit Name"
  newHabitForm.appendChild(newHabitName)

  const FreqLabel = document.createElement("label")
  FreqLabel.textContent = "Frequency"
  newHabitForm.appendChild(FreqLabel)

  const FreqMon = document.createElement("input")
  FreqMon.type = "checkbox";
  FreqMon.value = 1;
  FreqMon.name = "days[]";
  FreqMon.classList.add('days') 
  newHabitForm.appendChild(FreqMon);

  const FreqTue = document.createElement("input");
  FreqTue.type = "checkbox";
  FreqTue.value = 1;
  FreqTue.name = "days[]";
  FreqTue.classList.add("days"); 
  newHabitForm.appendChild(FreqTue);

  const FreqWed = document.createElement("input");
  FreqWed.type = "checkbox";
  FreqWed.value = 1;
  FreqWed.name = "days[]";
  FreqWed.classList.add("days"); 
  newHabitForm.appendChild(FreqWed);

  const FreqThur = document.createElement("input");FreqThur.type = "checkbox";
  FreqThur.value = 1;
  FreqThur.name = "days[]";
  FreqThur.classList.add("days"); 
  newHabitForm.appendChild(FreqThur);

  const FreqFri = document.createElement("input");
  FreqFri.type = "checkbox";
  FreqFri.value = 1;
  FreqFri.name = "days[]";
  FreqFri.classList.add("days"); 
  newHabitForm.appendChild(FreqFri);

  const FreqSat = document.createElement("input");
  FreqSat.type = "checkbox";
  FreqSat.value = 1;
  FreqSat.name = "days[]";
  FreqSat.classList.add("days"); 
  newHabitForm.appendChild(FreqSat);

  const FreqSun = document.createElement("input");
  FreqSun.type = "checkbox";
  FreqSun.value = 1;
  FreqSun.name = "days[]"; 
  FreqSun.classList.add("days"); 
  newHabitForm.appendChild(FreqSun);
  const farray = [];
  document.querySelectorAll(".days").forEach((f) => farray.push(f.checked));


  const addSubHabit = document.createElement("div");
  addSubHabit.textContent = "Add Subhabit +";
  newHabitForm.appendChild(addSubHabit);
  addSubHabit.addEventListener("click", renderSubHabitForm)


  const newHabitSubmit = document.createElement("input");
  newHabitSubmit.type = 'submit';
  newHabitSubmit.value = "Create";
  newHabitForm.appendChild(newHabitSubmit);
  addEventListener(
    "submit",
    postHabit
  );

}

// creating a new card for habits - the plus card
const addCard = () => {
  let wrapper = document.querySelector(".habits_wrapper");

  let addDiv = document.createElement("div");
  addDiv.classList.add("add_div", "card");
  addDiv.innerText = "+";
  addDiv.addEventListener("click", renderNewHabitForm)
  

  wrapper.appendChild(addDiv);
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
  btn.classList.add("habit_btn", `${text}_btn`);
  btn.innerText = text;

  return btn;
};

module.exports = {
  renderHomepage,
  renderLoginForm,
  renderSignupForm,
  renderHabitPage,
  addCard
};
