import { config } from "dotenv";

const configDotenv = () => config();

/**
 * Function that returns an environment variable and throws an error if it not exists.
 */
const getEnv = (envKey: string) => {
  const envValue = process.env[envKey];

  if (!envValue) throw new Error(`Environment variable ${envKey} not set.`);

  return envValue;
};

/**
 * Module with functions that use instances of the dotenv module.
 */
const DotenvService = { configDotenv, getEnv };

export default DotenvService;
