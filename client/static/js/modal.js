const modal = document.querySelector("#modal");
const modalHeader = modal.querySelector("h2");
const modalContent = modal.querySelector("article");
const modalExit = modal.querySelector("i a");

//Drop down list for habits

const fields = [
  {
    tag: "input",
    attributes: { type: "text", name: "habit", placeholder: "Habit name" }
  },
  {
    tag: "input",
    attributes: {
      type: "text",
      name: "yearOfPublication",
      placeholder: "Year of Publication"
    }
  },
  {
    tag: "input",
    attributes: { type: "text", name: "authorName", placeholder: "Author" }
  },
  {
    tag: "textarea",
    attributes: { name: "abstract", placeholder: "Abstract" }
  },
  { tag: "input", attributes: { type: "submit", value: "Add Habit" } }
];

function renderHabitForm() {
  modalHeader.textContent = "Add a Habit";
  const habitform = document.createElement("form");
  fields.forEach((f) => {
    const field = document.createElement(f.tag);
    Object.entries(f.attributes).forEach(([a, v]) => field.setAttribute(a, v));
    habitform.appendChild(field);
  });
  habitform.onsubmit = postHabit;
  modalContent.appendChild(habitform);
  modalExit.href = `#habit`;
}
