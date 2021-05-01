const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const questions = require('./resolver');

const resolvers = {
  Query: {
    questions
  }
};

const server = new ApolloServer({
  resolvers,
  typeDefs
});

server.listen().then(() => {
  console.log('server is running on port 4000');
});
