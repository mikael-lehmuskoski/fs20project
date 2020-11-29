import axios from "axios";
import { print } from "graphql";
import config from "../config";
import operations from "../operations";

const { SAVE_SETTINGS } = operations.mutations;
const { BACK_URI } = config;

const saveSettings = async (variables, token) => {
  try {
    const res = await axios.post(
      BACK_URI, // url
      {
        // payload
        query: print(SAVE_SETTINGS),
        variables,
      },
      {
        // config
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export default saveSettings;
