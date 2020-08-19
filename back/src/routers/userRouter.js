const usersRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const users = [
  { username: "asd", password: "sigrid" },
  { username: "user", password: "pw" },
];

usersRouter.get("/", async (req, res) => {
  /* const users = await User.find({}).populate("blogs", {
    title: 1,
    author: 1,
    url: 1,
    id: 1,
  }); */
  res.json(users);
});

// TODO: validate new user object and send to DB
usersRouter.post("/", (req, res) => {
  try {
    if (!req.body || !req.body.user || !req.body.pw)
      throw new Error("Missing user details");
    const newUser = { username: req.body.user, password: req.body.pw };
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = usersRouter;
