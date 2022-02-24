const dateCheck = (doneDate, frequency) => {
  const today = new Date().toString().split(" ").slice(0, 4);
  const todayDay = today[0];
  const lastCompleted = new Date(parseInt(doneDate))
    .toString()
    .split(" ")
    .slice(0, 4);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const matchingDay = days.indexOf(todayDay);
  return (
    frequency[matchingDay] === 1 &&
    today.toString() !== lastCompleted.toString()
  );
};
/**
 * Generates the checkboxes to select frequency
 * @param  {arr} frequency - An array of 1s and 0s to say which day it is repeated on
 */
const createFrequencySelect = (frequency) => {
  const fBlock = document.createElement("div");
  fBlock.classList.add("f_block");
  const FreqLabel = document.createElement("div");
  FreqLabel.textContent = "Frequency";
  fBlock.append(FreqLabel);

  const f_container = document.createElement("div");
  f_container.classList.add("f_container");

  frequency.forEach((num, index) => {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "days[]";
    input.id = `f_label_${index + 1}`;
    input.classList.add("days");
    if (num) input.checked = "true";

    const daysArr = ["M", "T", "W", "T", "F", "S", "S"];
    let keepDays = "";
    const label = document.createElement("label");
    label.innerText = daysArr[index];
    label.classList.add("f_day");
    label.htmlFor = `f_label_${index + 1}`;
    if (num) label.classList.add("active_day");
    f_container.append(input);
    f_container.append(label);
  });

  fBlock.append(f_container);

  return fBlock;
};

function renderSubHabitInput(subhabit) {
  const subWrap = document.createElement("div");
  subWrap.classList.add("sub_wrap");

  const newHabitForm = document.querySelector(".sub_section");
  const subHabitName = document.createElement("input");
  subHabitName.name = "subHabitName";
  subHabitName.classList.add("subHabitName");
  subHabitName.required = "true";
  if (subhabit.name) {
    subHabitName.value = subhabit.name;
  } else {
    subHabitName.placeholder = "Subhabit Name";
  }
  subWrap.appendChild(subHabitName);

  const x_btn = document.createElement("button");
  x_btn.innerText = "x";
  x_btn.type = "button";
  x_btn.classList.add("rm_subhabit");
  subWrap.appendChild(x_btn);

  newHabitForm.appendChild(subWrap);
}

const createBtn = () => {
  const btn = document.createElement("input");
  btn.classList.add("btn", "update_btn", "lh_btn");
  btn.type = "submit";
  btn.value = "Update";

  return btn;
};

module.exports = {
  createBtn,
  dateCheck,
  createFrequencySelect,
  renderSubHabitInput
};
