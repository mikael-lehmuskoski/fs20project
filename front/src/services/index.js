import axios from "axios";
import { print } from "graphql";
import config from "../config";

const { BACK_URI } = config;

const serviceClient = async (operation, variables, token) => {
  try {
    const res = await axios.post(
      BACK_URI, // url
      {
        // payload
        query: print(operation),
        variables,
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
