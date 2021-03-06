import { APIGatewayProxyEventV2 } from "aws-lambda";
import { path } from "ramda";

const getEventIp = path<string>(["requestContext", "http", "sourceIp"]);
export default getEventIp;
