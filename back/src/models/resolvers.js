const User = require("./user");

// TODO: resolvers for user and login mutations
const resolvers = {
  Query: {
    user: (root, args, context) => context.currentUser,
  },
  Mutation: {
    signup: async (root, args) => {
      const user = new User({ ...args });
      console.log({ ...args });
      return { username: user.username, password: user.password };
    },
    login: (root, args) => {
      return null;
    },
  },
};

module.exports = resolvers;
