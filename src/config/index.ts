import { defaultTo } from "ramda";

const {
  MONGODB_URI,
  MONGODB_DBNAME,
  AUTH_SECRET_KEY,
} = process.env;

const config = {
  db: {
    uri: defaultTo("mongodb://localhost:27017/iusso", MONGODB_URI),
    name: defaultTo("iusso", MONGODB_DBNAME),
  },
  s3: {},
  auth: {
    secret: defaultTo("Some highly secret key", AUTH_SECRET_KEY),
  },
};

export default config;
