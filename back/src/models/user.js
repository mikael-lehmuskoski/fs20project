/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      minlength: 3,
      maxlength: 20,
      required: [true, "username is required"],
      validate: {
        validator: async (username) => await User.where({ username }).countDocuments() === 0, //eslint-disable-line
        message: ({ username }) => `Username ${username} is already taken`,
      },
    },
    passwordHash: {
      type: String,
      required: true,
    },
    notes: {
      type: Array,
      required: true,
    },
    settings: {
      type: Object,
      required: true,
    },
  },
  {
    toJSON: {
      transform: (_, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.passwordHash;
      },
    },
  }
);

mongoose.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = User;
