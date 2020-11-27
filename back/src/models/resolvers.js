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
          settings: {
            user: null,
            interface: null,
            rss: null,
            clock: null,
            notes: null,
          },
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
    updateSettings: async (_, args, context) => {
      console.log(args, context);
      if (!context.currentUser) throw new Error("Unauthorized");
      if (!args) throw new Error("Invalid properties");
      await User.findOne(
        {
          username: context.username,
          id: context.id,
        },
        (err, foundUser) => {
          if (err) throw new Error(err.message);
          if (!foundUser) throw new Error("User account not found");
          if (args.settings) foundUser.settings = args.settings; //eslint-disable-line
          foundUser.save((error, updatedSettings) => {
            if (error) throw new Error(err.message);
            else return updatedSettings;
          });
        }
      );
    },
  },
};

module.exports = resolvers;
