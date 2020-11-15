const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./user");
const config = require("../config");
const { signUpSchema, loginSchema } = require("../validation");

const { JWT_SECRET } = config;

const resolvers = {
  Query: {
    user: (_, __, context) => context.currentUser,
  },
  Mutation: {
    signup: async (_, args) => {
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

        await user.save();
        const savedUser = await User.findOne({ username: user.username });
        if (savedUser) {
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
        throw new Error("Unable to create new account");
      }
      throw new Error("Invalid user details");
    },
    login: async (_, args, context) => {
      if (context.currentUser) throw new Error("Already logged in");
      if (
        !args ||
        !args.username ||
        !args.password ||
        !(await loginSchema.validateAsync({ ...args }))
      )
        throw new Error("Invalid credentials");
      const user = await User.findOne({ username: args.username });
      const passwordCorrect = user
        ? await bcrypt.compare(args.password, user.passwordHash)
        : false;
      if (passwordCorrect) {
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
      throw new Error("Invalid credentials");
    },
  },
};

module.exports = resolvers;
