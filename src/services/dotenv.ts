import { config } from "dotenv";

config();

const getEnv = (envKey: string): string => {
  const envValue = process.env[envKey];

  if (!envValue) throw new Error(`Environment variable ${envKey} not set.`);

  return envValue;
};

const DotenvService = { getEnv };

export default DotenvService;
