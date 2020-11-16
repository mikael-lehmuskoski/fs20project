import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token {
        value
      }
      user {
        username
        id
        settings {
          value
        }
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

const SIGNUP = gql`
  mutation signup($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      token {
        value
      }
      user {
        username
        id
        settings {
          value
        }
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

export default {
  LOGIN,
  SIGNUP,
};
