import axios from "axios";
import { print } from "graphql";
import config from "../config";

const { BACK_URI } = config;

/**
 * Connects to an Apollo server via Axios' post()-method.
 *
 * @requires BACK_URI uri for the Apollo server
 *
 * @param {DocumentNode} operation
 * @param {object} variables variables for the operation, can be null
 * @param {String} token user's token for identification, can be null
 */
const serviceClient = async (operation, variables, token) => {
  try {
    const res = await axios.post(
      BACK_URI, // url
      {
        // payload
        query: print(operation),
        variables: variables || null,
      },
      {
        // config
        headers: {
          Authorization: token ? `Bearer: ${token}` : null,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export default serviceClient;
