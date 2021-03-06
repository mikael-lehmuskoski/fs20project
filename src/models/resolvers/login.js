const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../user");
const config = require("../../config");

const { loginSchema } = require("../../validation");

const { JWT_SECRET } = config;

/**
 *   login
 *
 * Uses mongoose and bcrypt to find and compare arguments to user found in database.
 * The request is responded with an object containing the user's complete profile and a JWT token upon successful comparison.
 *
 * Arguments are validated with JOI before operations.
 *
 * @async
 * @function
 * @param {*} _ Parent. Unused.
 * @param {*} args Contains all GraphQL arguments of the request.
 * @param {*} context Context for the current request. Contains currentUser.
 *
 * @returns User & token
 *
 * @author Mikael
 */
const login = async (_, args, context) => {
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
};

module.exports = login;
