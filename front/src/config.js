require("dotenv").config();

const BACK_URI = process.env.BACK_URI || null;

module.exports = {
  BACK_URI,
};
