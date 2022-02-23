/**
 * @param  {arr} subhabits - the array of objects containing the subhabits
 */
const displaySubhabits = (subhabits, frequency) => {
  if (!subhabits) return "";

  const subList = document.createElement("ul");
  subList.classList.add("sub_list");
  subhabits.forEach((subhabit) => {
    const name = subhabit.name;
    const listItem = document.createElement("li");
    listItem.classList.add("sub_task");
    listItem.innerText = name;
    subList.appendChild(listItem);

    const completed = subhabit.complete;
    // check if need to be completed today and hasn't been completed
    if (dateCheck(completed, frequency)) {
      // if so mark show solid
      listItem.classList.add("sub_incomplete");
      listItem.classList.remove("sub_done");
    } else {
      //  if not grey out
      listItem.classList.remove("sub_incomplete");
      listItem.classList.add("sub_done");
    }
  });
  return subList;
};
/**
 * @param  {string} doneDate - The timestamp stored in the habit
 * @param  {arr} frequency - The array of frequency stored in the habit
 */
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

const createFrequencySelect = (frequency) => {
  const returnArr = [];

  const FreqLabel = document.createElement("label");
  FreqLabel.textContent = "Frequency";
  returnArr.push(FreqLabel);

  frequency.forEach((num) => {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "days[]";
    input.classList.add("days");
    if (num) input.checked = "true";
    returnArr.push(input);
  });
  return returnArr;
};

const createBtn = () => {
  const btn = document.createElement("button");
  btn.classList.add("btn", "update_btn");
  btn.innerText = "Update";

  return btn;
};

module.exports = {
  displaySubhabits,
  createBtn,
  dateCheck,
  createFrequencySelect
};
