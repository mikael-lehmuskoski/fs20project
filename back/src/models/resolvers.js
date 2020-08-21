const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./user");
const config = require("../config");
const { signUpSchema, loginSchema } = require("../validation");

const { JWT_SECRET } = config;

const resolvers = {
  Query: {
    user: (root, args, context) => context.currentUser,
  },
  Mutation: {
    signup: async (root, args) => {
      const validUser = await signUpSchema.validateAsync({ ...args });
      if (validUser) {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(validUser.password, saltRounds);

        const user = new User({
          username: validUser.username,
          passwordHash,
          notes: [],
          settings: [],
        });

        const result = await user.save();
        return result.toJSON();
      }
      throw new Error("invalid user details");
    },
    login: async (root, args, context) => {
      if (context.currentUser) throw new Error("already logged in");
      if (
        !args ||
        !args.username ||
        !args.password ||
        !(await loginSchema.validateAsync({ ...args }))
      )
        throw new Error("invalid credentials");
      const user = await User.findOne({ username: args.username });
      const passwordCorrect = user
        ? await bcrypt.compare(args.password, user.passwordHash)
        : false;
      if (user && passwordCorrect) {
        const token = jwt.sign(
          { id: user._id }, // eslint-disable-line
          JWT_SECRET
        );
        return {
          user: user.toJSON(),
          token: {
            value: token,
          },
        };
      }
      throw new Error("invalid credentials");
    },
  },
};

module.exports = resolvers;
