const { NODE_ENV, PORT, DB_URL, PRIVATE_KEY } = process.env;
const EXPIRES_IN = "30 days";

export default {
  NODE_ENV,
  PORT,
  DB_URL,
  EXPIRES_IN,
  PRIVATE_KEY,
};
