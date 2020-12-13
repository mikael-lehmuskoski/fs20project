/**
 *    BACK_URI
 *
 * Sets the backend uri to value specified in the .env depending on whether NODE_ENV is production or not.
 *
 * @author Mikael
 */
const BACK_URI =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_URI
    : process.env.REACT_APP_TEST_URI;

module.exports = {
  BACK_URI,
};
