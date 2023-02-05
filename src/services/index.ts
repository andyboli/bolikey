import ApolloService from "./apollo";
import DotenvService from "./dotenv";
import ExpressService from "./express";
import FakerService from "./faker";

/**
 * Application Services with modules that has isolate instances of external modules
 */
const AppServices = {
  ApolloService,
  DotenvService,
  ExpressService,
  FakerService,
};

export default AppServices;
