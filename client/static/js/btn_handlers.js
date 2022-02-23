const {
  displaySubhabits,
  createBtn,
  createFrequencySelect
} = require("./handler_helpers");
const { getItem, deleteHabit, updateHabit } = require("./requests");

const handleEdit = async (e) => {
  const wrapper = document.querySelector(".edit_container");
  wrapper.innerHTML = "";
  const habitId = e.target.parentNode.parentNode.id.slice(-1);
  const habitObj = await getItem("habits/hab_id", habitId);

  const name = habitObj.name;
  const frequency = habitObj.frequency;
  const complete = habitObj.complete;
  const subhabits = habitObj.subhabits;

  // const subs = displaySubhabits(subhabits, frequency);
  const newHabitForm = document.createElement("form");
  newHabitForm.id = "newHabitForm";
  wrapper.appendChild(newHabitForm);

  const newHabitName = document.createElement("input");
  newHabitName.id = "newHabitName";
  newHabitName.value = name;
  newHabitForm.appendChild(newHabitName);

  const inputs = createFrequencySelect(frequency);
  inputs.forEach((input) => newHabitForm.appendChild(input));

  const addSubHabit = document.createElement("div");
  addSubHabit.textContent = "Add Subhabit +";
  newHabitForm.append(addSubHabit);
  addSubHabit.addEventListener("click", renderSubHabitInput);

  const newHabitSubmit = document.createElement("input");
  newHabitSubmit.type = "submit";
  newHabitSubmit.value = "Create";
  newHabitForm.appendChild(newHabitSubmit);
  addEventListener("submit", postHabit);
  const updateBtn = createBtn();
  updateBtn.addEventListener("click", handleUpdate);
  wrapper.append(title, subs, updateBtn);
};

const handleUpdate = () => {
  console.log("hello");
};
const handleDone = (e) => {
  const habit = e.target.parentNode.parentNode;
  habit.classList.toggle("habit_complete");
  const habitId = habit.id.slice(-1);
  if (habit.classList.contains("habit_complete")) {
    updateHabit(habitId, { complete: true });
  } else {
    updateHabit(habitId, { complete: "100" });
  }
};
const handleDelete = (e) => {
  const habitId = e.target.parentNode.id.slice(-1);
  deleteHabit(habitId);
};

module.exports = { handleEdit, handleDone, handleDelete };
