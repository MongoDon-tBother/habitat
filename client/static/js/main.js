const { handleRemoveSubtask } = require("./btn_handlers");
const { updateContent } = require("./layout");

updateContent();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("rm_subhabit")) {
    handleRemoveSubtask(e);
  }
});
