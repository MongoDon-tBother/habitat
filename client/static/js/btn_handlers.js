const { createTitle, displaySubhabits } = require("./handler_helpers");
const { getItem } = require("./requests");

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

  console.log("subhabits", subhabits);
  console.log("frequency", frequency);
  console.log("streak", streak);
  console.log("complete", complete);
  wrapper.append(createTitle(name), displaySubhabits(subhabits, frequency));
};

const handleDone = () => {
  console.log("Done");
};

module.exports = { handleEdit, handleDone };
