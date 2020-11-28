const { not } = require("joi");

const note = `type Note {
  id: ID!
  date: String!
  content: String!
  reminder: String
  user: User
}`;

module.exports = note;
