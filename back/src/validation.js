const Joi = require("joi");

const signUpSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(7).required(),
  password: Joi.string().alphanum().min(3).max(20).required(),
});

const loginSchema = Joi.object({
  username: Joi.string().alphanum().required(),
  password: Joi.string().alphanum().required(),
});

module.exports = { signUpSchema, loginSchema };
