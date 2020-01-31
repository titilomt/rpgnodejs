var Dice = require('./src/dice/Dice');
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

const PORT = 4000;

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollDices(numDice: Int!, numSides: Int): [Int]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random: () => {
    return Math.random();
  },
  rollDices: ({numDice, numSides}) => {
    return new Dice(numSides).roll(numDice);
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
