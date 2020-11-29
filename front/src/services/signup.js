import axios from "axios";
import { print } from "graphql";
import config from "../config";
import operations from "../operations";

const { SIGNUP } = operations.mutations;
const { BACK_URI } = config;

const signup = async ({ variables }) => {
  try {
    const res = await axios.post(BACK_URI, {
      query: print(SIGNUP),
      variables,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default signup;
