const { ApolloServer, UserInputError, gql } = require("apollo-server-express");
// const { v1: uuid } = require("uuid");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const typeDefs = require("./models/typeDefs");
const resolvers = require("./models/resolvers");

const config = require("./config");
const pingRouter = require("./routers/pingRouter");
const loginRouter = require("./routers/loginRouter");
const userRouter = require("./routers/userRouter");

// const JWT_SICRIT = "sicrid_key";
const { MONGODB_URI, PORT, NODE_ENV } = config;

const app = express();
app.use(express.json());
app.use(cors());
app.disable("x-powered-by");

mongoose.set("useFindAndModify", false);

if (MONGODB_URI && typeof MONGODB_URI === "string") {
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(console.log(`connected to: ${MONGODB_URI}`))
    .catch((err) => {
      throw new Error(`error: ${err.message}`);
    });
} else {
  throw new Error(`invalid URL: ${MONGODB_URI}`);
}
/*
app.use("/api/ping", pingRouter);
app.use("/api/login", loginRouter);
app.use("/api/users", userRouter);
*/
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: NODE_ENV !== "production",
  /* context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null;
    if (auth.substring(7) === "null") return null;
    if (auth && auth.toLowerCase().startsWith("bearer ")) {
      const decodedToken = jwt.verify(auth.substring(7), JWT_SICRIT);
      const currentUser = await User.findById(decodedToken.id);
      return { currentUser };
    }
    return null;
  }, */
});

server.applyMiddleware({ app });

if (!PORT || isNaN(PORT)) throw new Error("invalid PORT"); // eslint-disable-line
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
