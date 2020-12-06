const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const typeDefs = require("./models/typeDefs");
const resolvers = require("./models/resolvers");
const User = require("./models/user");

const config = require("./config");

const { MONGODB_URI, PORT, JWT_SECRET } = config;

const app = express();
app.use(express.json());
app.use(cors());
app.disable("x-powered-by");

mongoose.set("useFindAndModify", false);

/**
 * Connect to MongoDB
 */
if (MONGODB_URI) {
  try {
    mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(console.log(`Connected to MongoDB`))
      .catch((err) => {
        throw new Error(err.message);
      });
  } catch (err) {
    console.error(`ERROR: ${err.message}`);
  }
} else {
  console.error(`invalid URL: ${MONGODB_URI}`);
}

/**
 * Create new Apollo server
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null;
    if (!auth || !auth.toLowerCase().startsWith("bearer: ")) return null;
    const decodedToken = jwt.verify(auth.substring(7).trim(), JWT_SECRET);
    const currentUser = await User.findById({ _id: decodedToken.id });
    if (currentUser) return { currentUser: currentUser.toJSON() };
    return null;
  },
});

server.applyMiddleware({ app });

/**
 * Start listening
 */
if (!PORT || isNaN(PORT)) throw new Error("invalid PORT"); // eslint-disable-line
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
