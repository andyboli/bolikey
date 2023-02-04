import "graphql-import-node";
import { json } from "body-parser";
import cors from "cors";
import ExpressApp, { Express } from "express";

interface CreateAppInterface {
  app: Express;
  expressPort: string;
}

const createApp = () => ExpressApp();

const configApp = (app: Express) => {
  const corsOptions: cors.CorsOptions = {
    origin: "*",
  };

  app.use(cors(corsOptions), json());
};

const startApp = ({ app, expressPort }: CreateAppInterface) => {
  app.listen(expressPort, () => {
    console.info("🚀: api started on port " + expressPort);
  });
};

const ExpressService = { createApp, configApp, startApp };

export default ExpressService;
