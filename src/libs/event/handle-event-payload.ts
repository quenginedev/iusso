import { S3EventRecord } from "aws-lambda";
import { S3 } from "aws-sdk";
import config from "../../config";
import { forEachObjIndexed, prop } from "ramda";
import integrations from "./integrations";

export const handleEventPayload = async (record: S3EventRecord) => {
  const { s3: { object: { key: Key }, bucket: { name: Bucket } } } = record;
  const s3 = new S3();
  const eventPayloadResponse = await s3.getObject({
    Key,
    Bucket,
  }).promise();
  const eventPayloadRaw = eventPayloadResponse.Body?.toString();
  const eventPayload = JSON.parse(eventPayloadRaw as string) as IntegrationsMap;
  forEachObjIndexed((eventConfig, type) => {
    const integration = prop(type, integrations);
    integration(eventConfig);
  }, eventPayload);
};
