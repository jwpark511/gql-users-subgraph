import { cleanEnv, host, port, str } from 'envalid';

export const env = cleanEnv(process.env, {
  APP_HOST: host({
    default: 'localhost',
  }),
  APP_PORT: port({
    default: 4000,
  }),
  APP_PATH: str({
    default: 'graphql',
  }),
});
