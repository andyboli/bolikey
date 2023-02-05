import { ApolloServer } from "@apollo/server";
import { Express } from "express";
import { expressMiddleware } from "@apollo/server/express4";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

/**
 * Function that receive an express application and wrap an apollo server on it.
 */
const apolloMiddleware = async (app: Express) => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();

  app.use("/graphql", expressMiddleware(apolloServer));
};

export default apolloMiddleware;
