import config from "../config";
const { db: { uri } } = config;

import * as mongoose from "mongoose";

let connection: Promise<typeof mongoose> | null = null;

export default async function () {
  if (connection == null) {
    connection = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    }).then(() => mongoose);

    await connection;
  }

  return connection;
}
