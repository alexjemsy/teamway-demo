const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    questions: [Question!]!
  }

  type Question {
    id: ID!
    text: String!
    extrovertResponses: [String!]!
    introvertResponses: [String!]!
  }
`;

module.exports = typeDefs;
