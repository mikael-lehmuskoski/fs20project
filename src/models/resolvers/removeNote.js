const mongoose = require("mongoose");
const User = require("../user");

/**
 *   removeNote
 *
 * Uses mongoose to pull a note from the user's profile if the context has a valid currentUser and the note is found in the profile.
 * The request is responded with the ID of the removed note upon successful removal.
 *
 * @async
 * @function
 * @param {*} _ Parent. Unused.
 * @param {object} args Contains all GraphQL arguments of the request.
 * @param {object} context Context for the current request. Contains currentUser.
 *
 * @returns The ID of the removed note.
 *
 * @author Mikael
 */
const removeNote = async (_, args, context) => {
  if (!context || !context.currentUser) throw new Error("Unauthorized");
  if (!args || !args.note || !args.note.id)
    throw new Error("Invalid properties");
  try {
    const user = await User.findOneAndUpdate(
      {
        username: context.currentUser.username,
        _id: context.currentUser.id,
      },
      {
        $pull: {
          notes: {
            id: mongoose.mongo.ObjectId(args.note.id),
          },
        },
      },
      { new: true },
      (err) => {
        if (err) throw new Error(err.message);
      }
    );
    const result = user.notes.find((note) => note.id == args.note.id) // eslint-disable-line
    if (!result) {
      return args.note.id;
    }
    throw new Error("Unknown error");
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = removeNote;
