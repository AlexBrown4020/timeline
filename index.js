require('dotenv').config();
const db = require('./knex');
const { ApolloServer } = require('apollo-server-express');
// const { ApolloGateway } = require('@apollo/gateway');
const typeDefs = require('../endpoints/schema');
const resolvers = require('../endpoints/resolvers');

// const gateway = new ApolloGateway();

const app = require('./app.js');

const PORT = process.env.PORT || 9000;

(async () => {
    try {
      console.log("Running migrations");
      await db.migrate.latest();
      console.log("Seeding data");
      await db.seed.run();
  
      const server = new ApolloServer({ typeDefs, resolvers, csrfPrevention: true });
      console.log("Starting express");
      await server.start();
      server.applyMiddleware({ app, path: "/" });
      app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
    } catch (err) {
      console.error("Error starting app!", err);
      process.exit(-1);
    }
  })();