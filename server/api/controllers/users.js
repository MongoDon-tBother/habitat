const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/auth");

const User = require("../models/user");

router.get("/", verifyToken, async (req, res) => {
  const users = await User.all;
  res.json(users);
});


router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(parseInt(req.params.id));
    res.json(user);
  } catch (err) {
    res.status(400).send({ err });
  }
});



module.exports = router;
