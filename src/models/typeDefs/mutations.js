const mutations = `type Mutation {
  signup(username: String!, password: String!): Login
  login(username: String!, password: String!): Login
  updateSettings(settings: SettingsInput!): Settings
  saveNote(note: NoteInput!): Note
  removeNote(note: modNoteInput!): String!
}`;

module.exports = mutations;
