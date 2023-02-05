import { json } from "body-parser";
import cors from "cors";
import ExpressApp, { Express } from "express";

interface CreateAppInterface {
  app: Express;
  expressPort: string;
}

/**
 * Function that creates an express application.
 */
const createApp = () => ExpressApp();

/**
 * Function that receives an express application and configure it.
 */
const configApp = (app: Express) => {
  const corsOptions: cors.CorsOptions = {
    origin: "*",
  };

  app.use(cors(corsOptions), json());
};

/**
 * Function that receives an express application and open a connection with it in a local port.
 */
const startApp = ({ app, expressPort }: CreateAppInterface) => {
  app.listen(expressPort, () => {
    console.info("🚀: api started on port " + expressPort);
  });
};

/**
 * Module with functions that use instances of the express module.
 */
const ExpressService = { createApp, configApp, startApp };

export default ExpressService;
