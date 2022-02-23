const {
  createBtn,
  createFrequencySelect,
  renderSubHabitInput
} = require("./handler_helpers");
const { getItem, deleteHabit, updateHabit } = require("./requests");

const handleEdit = async (e) => {
  const wrapper = document.querySelector(".edit_container");
  wrapper.innerHTML = "";
  const habitId = e.target.parentNode.parentNode.id.slice(-1);
  const habitObj = await getItem("habits/hab_id", habitId);

  const name = habitObj.name;
  const frequency = habitObj.frequency;
  const subhabits = habitObj.subhabits;

  // const subs = displaySubhabits(subhabits, frequency);
  const newHabitForm = document.createElement("form");
  newHabitForm.id = "newHabitForm";
  wrapper.appendChild(newHabitForm);

  const newHabitName = document.createElement("input");
  newHabitName.id = "newHabitName";
  newHabitName.value = name;
  newHabitForm.appendChild(newHabitName);

  createFrequencySelect(frequency).forEach((input) =>
    newHabitForm.appendChild(input)
  );

  const addSubHabit = document.createElement("div");
  addSubHabit.textContent = "Add Subhabit +";
  newHabitForm.append(addSubHabit);
  addSubHabit.addEventListener("click", renderSubHabitInput);
  if (subhabits)
    subhabits.forEach((subhabit) => {
      renderSubHabitInput(subhabit);
    });

  const updateBtn = createBtn();
  updateBtn.addEventListener("click", handleUpdate);
  wrapper.append(updateBtn);
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

const handleRemoveSubtask = (e) => {
  e.preventDefault();
  console.log(e.target.parentNode.remove());
};

const handleDelete = (e) => {
  const habitId = e.target.parentNode.id.slice(-1);
  deleteHabit(habitId);
};

module.exports = { handleEdit, handleDone, handleDelete, handleRemoveSubtask };
