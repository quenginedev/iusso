import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { handleResponse } from "./../utils/handle-response";
import { prop } from "ramda";
import { createUser } from "../libs/auth/create-user";
import getEventIp from "./../utils/get-event-ip";

export const login: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const body = event.body as string;
    const credentials = JSON.parse(body);

    return handleResponse({ body });
  } catch ({ message }) {
    return handleResponse({
      statusCode: 400,
      body: message,
    });
  }
};

export const signup: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const body = prop("body", event) as string;
    const ip = getEventIp(event) as string;
    const userPayload = JSON.parse(body);
    const newUserResponse = await createUser({ userPayload, ip });
    return handleResponse({ body: newUserResponse });
  } catch ({message}) {
		return handleResponse({
      statusCode: 400,
      body: message,
    });
  }
};
