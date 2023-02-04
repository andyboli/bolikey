import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { Express } from "express";
import * as typeDefs from "../services/apollo/schema.graphql";
import * as resolvers from "../services/apollo/resolvers";

const ApolloMiddleware = async (app: Express) => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();

  app.use("/graphql", expressMiddleware(apolloServer));
};

export default ApolloMiddleware;
