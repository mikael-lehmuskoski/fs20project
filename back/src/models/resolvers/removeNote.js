const mongoose = require("mongoose");
const User = require("../user");

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
