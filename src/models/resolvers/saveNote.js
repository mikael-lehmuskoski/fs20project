const mongoose = require("mongoose");
const User = require("../user");
const { validateDate, validateReminder } = require("../../validation");

/**
 *   saveNote
 *
 * Uses mongoose to create a new note in the user's profile if the context has a valid currentUser.
 * The request is responded with the newly created note upon successful creation.
 *
 * Arguments are validated with validateDate() and validateReminder() before operations.
 *
 * @async
 * @function
 * @param {*} _ Parent. Unused.
 * @param {*} args Contains all GraphQL arguments of the request.
 * @param {*} context Context for the current request. Contains currentUser.
 *
 * @returns Note
 *
 * @author Mikael
 */
const saveNote = async (_, args, context) => {
  if (!context || !context.currentUser) throw new Error("Unauthorized");
  if (
    !args ||
    !args.note ||
    !args.note.date ||
    !args.note.content ||
    !validateDate(args) ||
    !validateReminder(args)
  )
    throw new Error("Invalid properties");
  const rawInput = JSON.parse(JSON.stringify(args.note)); // strip the null prototype
  const ObjectId = new mongoose.mongo.ObjectId();
  const newId = ObjectId;
  try {
    await User.findOneAndUpdate(
      {
        username: context.currentUser.username,
        _id: context.currentUser.id,
      },
      {
        $addToSet: {
          notes: {
            id: newId,
            date: rawInput.date,
            content: rawInput.content,
            reminder: rawInput.reminder || "",
          },
        },
      },
      { returnOriginal: false },
      (err) => {
        if (err) throw new Error(err.message);
      }
    );
    const user = await User.findOne({
      username: context.currentUser.username,
      _id: context.currentUser.id,
    });
    if (!user || !user.notes) throw new Error("Unable to update user");
    else
      return JSON.parse(JSON.stringify(user.notes)).find(
        (note) => note.id == newId // eslint-disable-line
      );
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = saveNote;
