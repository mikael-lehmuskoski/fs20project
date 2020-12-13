const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../user");
const config = require("../../config");
const { signUpSchema } = require("../../validation");

const { JWT_SECRET } = config;

/**
 *   signup
 *
 * Uses mongoose and bcrypt to create a new user if the username passed as an argument is unique.
 * The request is responded with an object containing the user's complete profile and a JWT token upon successful creation.
 *
 * Arguments are validated with JOI before operations.
 *
 * User's password is stored as a hash in the database.
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
const signup = async (_, args) => {
  const validUser = await signUpSchema.validateAsync({ ...args });
  if (validUser) {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(validUser.password, saltRounds);
    const user = new User({
      username: validUser.username,
      passwordHash,
      notes: [
        {
          id: new mongoose.mongo.ObjectId(),
          date: new Date().toISOString().substring(0, 10),
          content:
            "Save your notes here and they'll be with you in any browser",
          reminder: "",
        },
        {
          id: new mongoose.mongo.ObjectId(),
          date: new Date().toISOString().substring(0, 10),
          content: "Easy, huh?",
          reminder: "",
        },
      ],
      settings: {
        user: {
          session: "expire",
        },
        interface: {
          theme: "light-mode",
        },
        rss: {
          src: "",
        },
        clock: {
          format: "24h",
          timezone: "UTC",
        },
        notes: {
          autodelete: "false",
        },
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
};

module.exports = signup;
