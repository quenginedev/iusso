import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { handleResponse } from "./../utils/handle-response";
import { join, keys, pipe, prop } from "ramda";
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
  } catch (error: any) {
    console.log(error);
    const code = prop("code")(error);
    if (code && code === 11000) {
      return handleResponse({
        statusCode: 400,
        body: {
          message: `Account already exists with field(s) taken ${
            pipe(prop("keyPattern"), keys, join(","))(error)
          }`,
        },
      });
    }

    return handleResponse({
      statusCode: 400,
      body: error,
    });
  }
};
