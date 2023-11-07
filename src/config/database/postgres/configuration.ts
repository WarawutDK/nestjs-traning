import { registerAs } from '@nestjs/config';

export default registerAs('postgres', () => ({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  pserword: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
}));

