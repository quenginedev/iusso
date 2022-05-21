import { v4 as uuid } from "uuid";
import { S3 } from "aws-sdk";
import config from "../../config";

export const sendEventToS3: SendEventToS3 = async ({ Body }) => {
  const { s3: { Bucket } } = config;
  const s3 = new S3();
  const Key = `events/${uuid()}.json`;
  await s3.putObject({ Key, Body, Bucket }).promise();
  return true;
};
