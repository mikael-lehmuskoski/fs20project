import axios from "axios";
import { print } from "graphql";
import config from "../config";
import operations from "../operations";

const signup = async ({ variables }) => {
  try {
    const res = await axios.post(config.BACK_URI, {
      query: print(operations.mutations.SIGNUP),
      variables,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default signup;
