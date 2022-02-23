const { handleRemoveSubtask } = require("./btn_handlers");
const { updateContent } = require("./layout");
const { lightDark } = require("./lightMode");

updateContent();
lightDark();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("rm_subhabit")) {
    handleRemoveSubtask(e);
  }
});
