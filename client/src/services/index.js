import axios from "axios";
import { print } from "graphql";
import config from "../config";

const { BACK_URI } = config;

/**
 *    serviceClient
 *
 * Connects to an Apollo server via Axios' post()-method.
 *
 * @requires BACK_URI uri for the Apollo server
 *
 * @function
 *
 * @param {DocumentNode} operation Graph Query Language operation
 * @param {object} variables variables for the operation, can be null
 * @param {string} token user's token for identification, can be null
 *
 * @author Mikael
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
