import "graphql-import-node";

import AppServices from "./services";

const startApp = () => {
  const app = AppServices.ExpressService.createApp();

  AppServices.ExpressService.configApp(app);

  AppServices.ApolloService.apolloMiddleware(app);

  AppServices.DotenvService.configDotenv();

  const EXPRESS_PORT = AppServices.DotenvService.getEnv("EXPRESS_PORT");

  AppServices.ExpressService.startApp({ app, expressPort: EXPRESS_PORT });
};

startApp();
