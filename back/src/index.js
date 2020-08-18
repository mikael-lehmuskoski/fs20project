// const { ApolloServer, UserInputError, gql } = require("apollo-server");
// const { v1: uuid } = require("uuid");
// const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const config = require("./config");

const app = express();
app.use(express.json());
app.use(cors());
// app.use(router);

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.status(200).send("pong");
});

const PORT = Number(config.PORT);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
