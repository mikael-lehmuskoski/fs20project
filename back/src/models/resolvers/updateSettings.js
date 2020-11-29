const User = require("../user");

const updateSettings = async (_, args, context) => {
  if (!context || !context.currentUser) throw new Error("Unauthorized");
  if (!args) throw new Error("Invalid properties"); // TODO: validate args
  const newSettings = JSON.parse(JSON.stringify(args.settings)); // strip off the null prototype object
  try {
    const user = await User.findOneAndUpdate(
      {
        username: context.currentUser.username,
        _id: context.currentUser.id,
      },
      { settings: newSettings },
      { returnOriginal: false },
      (err) => {
        if (err) throw new Error(err.message);
      }
    );
    if (!user || !user.settings) throw new Error("Unable to update user");
    else return user.settings;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = updateSettings;
