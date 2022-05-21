import { S3CreateEvent } from "aws-lambda";
import { APIGatewayProxyHandlerV2, EventBridgeEvent } from "aws-lambda";
import { forEach, prop } from "ramda";
import { handleEventPayload } from "../libs/event/handle-event-payload";
import { sendEventToS3 } from "./../libs/event/send-event-to-s3";

export const process = (event: S3CreateEvent) => {
  forEach(handleEventPayload, prop("Records")(event));
};

export const send: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const { body } = event;
    await sendEventToS3({ Body: body });
    return {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "success" }),
    };
  } catch (error) {
    console.error(error);
    return { statusCode: 500 };
  }
};
