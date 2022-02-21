const express = require("express");
const router = express.Router();
const habitsController = require("../controllers/habits");

router.get("/:user_id", habitsController.show);

module.exports = router;
