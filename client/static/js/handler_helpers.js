/**
 * @param  {string} name - the name of the habit
 */
const createTitle = (name) => {
  const title = document.createElement("h2");
  title.classList.add("title", "edit_title");
  title.innerText = name;

  return name;
};
/**
 * @param  {arr} subhabits - the array of objects containing the subhabits
 */
const displaySubhabits = (subhabits, frequency) => {
  if (!subhabits) return "";
  const today = new Date().toString().split(" ").slice(0, 4);
  const todayDay = today[0];

  const subList = document.createElement("ul");
  subList.classList.add("sub_list");
  subhabits.forEach((subhabit) => {
    const name = subhabit.name;
    const listItem = document.createElement("li");
    listItem.classList.add("sub_task");
    listItem.innerText = name;
    subList.appendChild(listItem);
    const completed = subhabit.complete;
    const lastCompleted = new Date(parseInt(completed))
      .toString()
      .split(" ")
      .slice(0, 4);
    // check if need to be completed today and hasn't been completed
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const matchingDay = days.indexOf(todayDay);
    if (
      frequency[matchingDay] === 1 &&
      today.toString() !== lastCompleted.toString()
    ) {
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

module.exports = { createTitle, displaySubhabits };
