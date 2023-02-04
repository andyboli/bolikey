import { ApolloServer } from "@apollo/server";
import { Express } from "express";
import { expressMiddleware } from "@apollo/server/express4";

import * as typeDefs from "./schema.graphql";
import * as resolvers from "./resolvers";

const apolloMiddleware = async (app: Express) => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();

  app.use("/graphql", expressMiddleware(apolloServer));
};

export default apolloMiddleware;