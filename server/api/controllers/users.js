const User = require("../models/user");

async function index(req, res) {
  const users = await User.all;
  res.json(users);
}

async function show(req, res) {
  try {
    const user = await User.findById(parseInt(req.params.id));
    res.status(200).json(user);
  } catch (err) {
    res.status(400).send({ err });
  }
}

module.exports = { index, show };
