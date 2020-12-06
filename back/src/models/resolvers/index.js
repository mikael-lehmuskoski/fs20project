const signup = require("./signup");
const login = require("./login");
const updateSettings = require("./updateSettings");
const saveNote = require("./saveNote");
const removeNote = require("./removeNote");

const resolvers = {
  Query: {
    user: (_, __, context) => context.currentUser,
  },
  Mutation: {
    signup,
    login,
    updateSettings,
    saveNote,
    removeNote,
  },
};

module.exports = resolvers;
