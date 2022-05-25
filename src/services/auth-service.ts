import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { handleResponse } from "./../utils/handle-response";
import { join, keys, pick, pipe, prop } from "ramda";
import { createUser } from "../libs/auth/create-user";
import getEventIp from "./../utils/get-event-ip";
import { verifyUserAccount } from "../libs/auth/verify-user";
import { loginUser } from "../libs/auth/login";

export const login: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const body = event.body as string;
    const credentials = JSON.parse(body);
    const ip = getEventIp(event) as string;
    const userLoginResult = await loginUser({ credentials, ip });
    return handleResponse({ body: userLoginResult });
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

    const userPayload = JSON.parse(body);
    const newUserResponse = await createUser({ userPayload });
    return handleResponse({ body: newUserResponse });
  } catch (error: any) {
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
    console.error(error.message);
    return handleResponse({
      statusCode: 400,
      body: prop("message", error),
    });
  }
};

export const verify: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const body = prop("body", event) as string;
    const ip = getEventIp(event) as string;
    const userVerificationPayload = JSON.parse(body);
    const response = await verifyUserAccount({
      ...userVerificationPayload,
      ip,
    });
    return handleResponse({
      body: response,
    });
  } catch (error) {
    console.error(error);
    return handleResponse({
      statusCode: 500,
      body: error,
    });
  }
};
