const User = require("../user");

/**
 *   removeNote
 *
 * Uses mongoose to update the settings in the user's profile if the context has a valid currentUser.
 * The request is responded with the updated settings upon successful update.
 *
 * Arguments are not validated.
 *
 * @async
 * @function
 * @param {*} _ Parent. Unused.
 * @param {object} args Contains all GraphQL arguments of the request.
 * @param {object} context Context for the current request. Contains currentUser.
 *
 * @returns The updated settings
 *
 * @author Mikael
 */
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
