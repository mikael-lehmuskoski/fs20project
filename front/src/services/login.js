import { useMutation } from "@apollo/client";
import LOGIN from "./auxiliary/queries";

// import { request, gql } from "graphql-request";

// import BACK_URI from "../config";

// TODO: put the query somewhere else maybe

// eslint-disable-next-line import/prefer-default-export
/* const login = async (username, password) => {
  const query = gql`
    mutation login(username: ${username}, password: ${password}) {
      token {value}
      user {
        username
        id
        settings {value} 
        notes {
          id
          content
          date
          reminder
        }
      }
    }
  `;

  const data = await request(BACK_URI, query);
  console.log(data); // eslint-disable-line
  return null;
}; */

const login = ({ username, password }) => {
  const [login, result] = useMutation(LOGIN);

  const user = { username, password };
  console.log(user);
  return {
    token: { value: "asd" },
    user: {
      username: "asd",
      id: 123,
      settings: { value: null },
      notes: [
        { id: 321, content: "asd", date: "1.2.3456", reminder: "2.2.3456" },
      ],
    },
  };
};

export default {
  login,
};