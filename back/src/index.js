// const { ApolloServer, UserInputError, gql } = require("apollo-server");
// const { v1: uuid } = require("uuid");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const config = require("./config");

const app = express();
app.use(express.json());
app.use(cors());
// app.use(loginRouter);
// app.use(userRouter);

const URL = config.MONGODB_URI;

if (URL || typeof URL === "string") {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .catch((err) => {
      console.error("connection error: ", err.message);
    });
} else {
  throw new Error("invalid MongoDB URL");
}

app.get("/api/ping", (_req, res) => {
  res.status(200).end();
});

// todo: config nodemon
// todo: refactor these into routers
app.post("/api/login", (req, res) => {
  try {
    if (!req.body || !req.body.user || !req.body.pw)
      throw new Error(`invalid username or password`);
    // todo: check DB if user and pw match
    res.status(200).end("logged in!");
  } catch (err) {
    res.status(401).json({ error: err.message }).end();
  }
});

app.post("/api/users", (req, res) => {
  // todo: create new user
  res.end();
});

const PORT = Number(config.PORT);
if (!PORT || isNaN(PORT)) throw new Error("invalid PORT"); // eslint-disable-line

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
