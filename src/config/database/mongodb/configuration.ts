import { registerAs } from '@nestjs/config';

export default registerAs('mongodb', () => ({
  url: process.env.MONGODB_URL,
  database: process.env.MONGODB_DATABASE,
}));

