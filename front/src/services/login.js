import axios from "axios";
import { print } from "graphql";
import config from "../config";
import operations from "../operations";

const { LOGIN } = operations.mutations;
const { BACK_URI } = config;

const login = async ({ variables }) => {
  try {
    const res = await axios.post(BACK_URI, {
      query: print(LOGIN),
      variables,
    });
    return res.data;
  } catch (error) {
    return error.toJSON();
  }
};

export default login;
