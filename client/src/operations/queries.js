import { gql } from "@apollo/client";

const GET_USER = gql`
  query user {
    user {
      settings {
        user {
          session
        }
        interface {
          theme
        }
        rss {
          src
        }
        clock {
          format
          timezone
        }
        notes {
          autodelete
        }
      }
      notes {
        id
        content
        date
        reminder
      }
    }
  }
`;

export default {
  GET_USER,
};
