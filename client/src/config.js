const BACK_URI =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_URI
    : process.env.REACT_APP_TEST_URI;

module.exports = {
  BACK_URI,
};
