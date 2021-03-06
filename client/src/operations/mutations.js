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
  }
`;

const SAVE_SETTINGS = gql`
  mutation updateSettings($settings: SettingsInput!) {
    updateSettings(settings: $settings) {
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
  }
`;

const SAVE_NOTE = gql`
  mutation saveNote($note: NoteInput!) {
    saveNote(note: $note) {
      id
      date
      content
      reminder
    }
  }
`;

const REMOVE_NOTE = gql`
  mutation removeNote($note: modNoteInput!) {
    removeNote(note: $note)
  }
`;

export default {
  LOGIN,
  SIGNUP,
  SAVE_SETTINGS,
  SAVE_NOTE,
  REMOVE_NOTE,
};
