import axios from "axios";
import { print } from "graphql";
import config from "../config";
import operations from "../operations";

const { SAVE_NOTE } = operations.mutations;
const { BACK_URI } = config;

const saveNote = async (variables, token) => {
  try {
    const res = await axios.post(
      BACK_URI, // url
      {
        // payload
        query: print(SAVE_NOTE),
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

export default saveNote;
