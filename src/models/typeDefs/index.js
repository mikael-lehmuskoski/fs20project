const { gql } = require("apollo-server-express");

const user = require("./user");
const token = require("./token");
const note = require("./note");
const login = require("./login");
const settings = require("./settings");
const queries = require("./queries");
const inputs = require("./inputs");
const mutations = require("./mutations");

/**
 * Contains all of the type definitions known by the Apollo server.
 *
 * @author Mikael
 */
const typeDefs = gql`
  ${user}
  ${token}
  ${note}
  ${login}
  ${settings}
  ${queries}
  ${inputs}
  ${mutations}
`;

module.exports = typeDefs;
