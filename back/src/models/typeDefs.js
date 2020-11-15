const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    passwordHash: String!
    notes: [Note]
    settings: [Settings]
  }

  type Token {
    value: String!
  }

  type Note {
    id: ID!
    date: String!
    content: String!
    reminder: String
    user: User
  }

  type Settings {
    value: String
  }

  type Login {
    token: Token
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    signup(username: String!, password: String!): Login
    login(username: String!, password: String!): Login
  }
`;

module.exports = typeDefs;
