import { defaultTo, prop } from "ramda";

const {
  MONGODB_URI,
  MONGODB_DBNAME,
  AUTH_SECRET_KEY,
  BUCKET,
	EVENT_SERVICE_URL
} = process.env;

const config = {
  db: {
    uri: defaultTo("mongodb://localhost:27017/iusso", MONGODB_URI),
    name: defaultTo("iusso", MONGODB_DBNAME),
  },
  s3: {
    Bucket: defaultTo("", BUCKET),
  },
  auth: {
    secret: defaultTo("Some highly secret key", AUTH_SECRET_KEY),
  },
	services: {
		eventServiceURL: EVENT_SERVICE_URL
	}
};

export default config;
