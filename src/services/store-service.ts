import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import handleResponse from "../utils/handle-response";
import listStores from "../libs/store/list-store";
import createStore from "../libs/store/create-store";
import { __, compose, is, prop } from "ramda";

export const create: APIGatewayProxyHandlerV2 = async (event) => {
  const body = event.body as string;
  const storeDetails = JSON.parse(body);
  const newStore = await createStore(storeDetails);
  return handleResponse({ body: newStore });
};

export const list: APIGatewayProxyHandlerV2 = async () => {
  const stores = await listStores();
  return handleResponse({ body: stores });
};
