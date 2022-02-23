const {
  createBtn,
  createFrequencySelect,
  renderSubHabitInput
} = require("./handler_helpers");
const { getItem, deleteHabit, updateHabit } = require("./requests");

const handleEdit = async (e) => {
  const wrapper = document.querySelector(".edit_container");
  wrapper.innerHTML = "";
  const habitId = e.currentTarget.id.slice(9);
  const habitObj = await getItem("habits/hab_id", habitId);

  const title = document.createElement("h2");
  title.innerText = `Update Habit`;
  title.classList.add("title", "left_title");
  wrapper.appendChild(title);

  const name = habitObj.name;
  const frequency = habitObj.frequency;
  const subhabits = habitObj.subhabits;

  // const subs = displaySubhabits(subhabits, frequency);
  const newHabitForm = document.createElement("form");
  newHabitForm.id = "newHabitForm";
  newHabitForm.classList.add(habitId);
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

const handleUpdate = async (e) => {
  e.preventDefault();
  const form = document.querySelector("#newHabitForm");
  const habitId = parseInt(form.classList[0]);

  const sArray = [];
  document.querySelectorAll(".subHabitName").forEach((h) => {
    sArray.push(h.value);
  });

  const newArray = sArray.map((g) => {
    return { name: g, complete: 0 };
  });

  const farray = [];
  document.querySelectorAll(".days").forEach((f) => {
    if (f.checked) farray.push(1);
    if (!f.checked) farray.push(0);
  });
  const newHabitData = {
    name: document.getElementById("newHabitName").value,
    frequency: farray,
    username: localStorage.getItem("username"),
    subhabits: newArray
  };
  await updateHabit(habitId, newHabitData);
  window.location.reload();
};

const handleDone = (e) => {
  e.stopPropagation();
  const habit = e.target.parentNode.parentNode;
  habit.classList.toggle("habit_complete");
  const habitId = habit.id.slice(9);
  if (habit.classList.contains("habit_complete")) {
    updateHabit(habitId, { complete: true });
  } else {
    updateHabit(habitId, { complete: "100" });
  }
};

const handleRemoveSubtask = (e) => {
  e.preventDefault();
  e.target.parentNode.remove();
};

const handleDelete = (e) => {
  e.stopPropagation();
  const habitId = e.target.parentNode.id.slice(9);
  deleteHabit(habitId);
};

module.exports = { handleEdit, handleDone, handleDelete, handleRemoveSubtask };
