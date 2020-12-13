const Joi = require("joi");

const format = /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/;

/**
 *   signUpSchema
 *
 * Validation object for validating arguments related to account creation.
 *
 * @author Mikael
 */
const signUpSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(7).required(),
  password: Joi.string().alphanum().min(3).max(20).required(),
});

/**
 *   loginSchema
 *
 * Validation object for validating arguments related to logging in.
 *
 * @author Mikael
 */
const loginSchema = Joi.object({
  username: Joi.string().alphanum().required(),
  password: Joi.string().alphanum().required(),
});

/**
 *   validateDate
 *
 * Validation function for validating arguments related to a date.
 *
 * @function
 *
 * @author Mikael
 */
const validateDate = (args) => {
  const dateExists = args.note ? args.note.date : false;
  const dateValid = dateExists ? args.note.date.match(format) : false;
  return dateValid;
};

/**
 *   validateReminder
 *
 * Validation function for validating arguments related to a reminder.
 *
 * @function
 *
 * @author Mikael
 */
const validateReminder = (args) => {
  const reminderExists = args.note ? args.note.reminder : false;
  const reminderValid = reminderExists
    ? args.note.reminder.match(format)
    : true;
  return reminderValid;
};

module.exports = { signUpSchema, loginSchema, validateDate, validateReminder };
