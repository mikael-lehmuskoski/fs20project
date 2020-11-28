const mutations = `type Mutation {
  signup(username: String!, password: String!): Login
  login(username: String!, password: String!): Login
  updateSettings(input: SettingsInput!): Settings
}`;

module.exports = mutations;
