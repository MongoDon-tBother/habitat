const {
  createTitle,
  displaySubhabits,
  createBtn
} = require("./handler_helpers");
const { getItem, deleteHabit } = require("./requests");

const handleEdit = async (e) => {
  const wrapper = document.querySelector(".edit_container");
  wrapper.innerHTML = "";
  const target = e.target;
  const habitId = target.parentNode.parentNode.id.slice(-1);
  const habitObj = await getItem("habits/hab_id", habitId);

  const name = habitObj.name;
  const frequency = habitObj.frequency;
  const streak = habitObj.streak;
  const complete = habitObj.complete;
  const subhabits = habitObj.subhabits;

  console.log("streak", streak);
  const title = createTitle(name);
  const subs = displaySubhabits(subhabits, frequency);
  const updateBtn = createBtn();
  updateBtn.addEventListener("click", handleUpdate);
  wrapper.append(title, subs, updateBtn);
};

const handleUpdate = () => {
  console.log("hello");
};
const handleDone = () => {
  console.log("Done");
};
const handleDelete = (e) => {
  const habitId = e.target.parentNode.id.slice(-1);
  deleteHabit(habitId);
};

module.exports = { handleEdit, handleDone, handleDelete };
