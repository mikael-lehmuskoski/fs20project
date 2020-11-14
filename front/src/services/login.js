import axios from "axios";
import { print } from "graphql";
import config from "../config";
import mutations from "../mutations";

const login = async ({ variables }) => {
  try {
    const res = await axios.post(config.BACK_URI, {
      query: print(mutations.LOGIN),
      variables,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default login;
