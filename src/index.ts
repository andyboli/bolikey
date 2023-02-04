import ExpressService from "express";
import DotenvService from "./services/dotenv";

const app = ExpressService();
const EXPRESS_PORT = DotenvService.getEnv("EXPRESS_PORT");

const startApp = () => {
  const corsOptions: cors.CorsOptions = {
    origin: "*",
  };

  app.use(cors(corsOptions), json());

  ApolloMiddleware(app);

  app.listen(EXPRESS_PORT, () => {
    console.info("🚀: api started on port " + EXPRESS_PORT);
  });

startApp();
