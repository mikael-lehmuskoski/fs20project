const settings = `type Settings {
  user: UserSettings
  interface: IntefaceSettings
  rss: RssSettings
  clock: ClockSettings
  notes: NoteSettings
}

type UserSettings {
  session: String!
}

type IntefaceSettings {
  theme: String!
}

type RssSettings {
  src: String!
}

type ClockSettings {
  format: String!
  timezone: String!
}

type NoteSettings {
  autodelete: String!
}`;

module.exports = settings;
