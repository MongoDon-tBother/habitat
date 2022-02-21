const express = require("express");
const router = express.Router();
const habitsController = require("../controllers/habits");

router.get("/:user_id", habitsController.show);
router.post("/", habitsController.create);
router.delete("/:habit_id", habitsController.destroy);

module.exports = router;
