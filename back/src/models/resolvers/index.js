const signup = require("./signup");
const login = require("./login");
const updateSettings = require("./updateSettings");
const saveNote = require("./saveNote");

const resolvers = {
  Query: {
    user: (_, __, context) => context.currentUser,
  },
  Mutation: {
    signup,
    login,
    updateSettings,
    saveNote,
  },
};

module.exports = resolvers;
