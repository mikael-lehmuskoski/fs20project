const user = `  type User {
  id: ID!
  username: String!
  passwordHash: String!
  notes: [Note]
  settings: Settings
}`;

module.exports = user;
