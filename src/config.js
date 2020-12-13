require("dotenv").config();

/**
 *   config.js
 * @file Configuration file for the server. Gets it's values from the .env-file.
 *
 * @author Mikael
 */

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || null;
const NODE_ENV = process.env.NODE_ENV || "production";
const JWT_SECRET =
  process.env.JWT_SECRET ||
  "hush hush this string is super mega ultraviolet classified uwu";

module.exports = {
  MONGODB_URI,
  PORT,
  NODE_ENV,
  JWT_SECRET,
};
