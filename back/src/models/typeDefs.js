const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    notes: [Note]
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

  type Query {
    user: User
  }

  type Mutation {
    signup(username: String!, password: String!): User
    login(username: String!, password: String!): Token
  }
`;

module.exports = typeDefs;
