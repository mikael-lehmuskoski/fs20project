require("dotenv").config();

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || null;
const NODE_ENV = process.env.NODE_ENV || "production";

module.exports = {
  MONGODB_URI,
  PORT,
  NODE_ENV,
};
