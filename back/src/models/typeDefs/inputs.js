const inputs = `

input UserSettingsInput {
  session: String!
}

input InterfaceSettingsInput {
  theme: String!
}

input RssSettingsInput {
  src: String!
}

input ClockSettingsInput {
  format: String!
  timezone: String!
}

input NoteSettingsInput {
  autodelete: String!
}

input SettingsInput {
  user: UserSettingsInput!
  interface: InterfaceSettingsInput!
  rss: RssSettingsInput!
  clock: ClockSettingsInput!
  notes: NoteSettingsInput!
}

input NoteInput {
  date: String!
  content: String!
  reminder: String
}`;

module.exports = inputs;
