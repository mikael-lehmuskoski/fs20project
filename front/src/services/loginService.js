import { request, gql } from "graphql-request";

import BACK_URI from "../config";

// eslint-disable-next-line import/prefer-default-export
export const login = async (username, password) => {
  const query = gql`
    {
      login(username: ${username}, password: ${password}) {
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
    }
  `;

  const data = await request(BACK_URI, query);
  console.log(data); // eslint-disable-line
  return null;
};
