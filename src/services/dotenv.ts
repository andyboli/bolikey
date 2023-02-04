import { config } from "dotenv";

const configDotenv = () => config();

const getEnv = (envKey: string): string => {
  const envValue = process.env[envKey];

  if (!envValue) throw new Error(`Environment variable ${envKey} not set.`);

  return envValue;
};

const DotenvService = { configDotenv, getEnv };

export default DotenvService;
