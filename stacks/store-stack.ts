import { Api, Stack, StackProps } from "@serverless-stack/resources";
import { Construct } from "constructs";

export default class StoreStack extends Stack {
  api: Api;
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    this.api = new Api(this, "StoreApi", {
      routes: {
        "post /": "src/services/store-service.create",
        "get /": "src/services/store-service.list",
      },
      defaultFunctionProps: {
        environment: {
          MONGODB_URI: process.env.MONGODB_URI as string,
          MONGODB_DBNAME: process.env.MONGODB_DBNAME as string,
        },
      },
    });
    this.addOutputs({
      uri: this.api.url,
    });
  }
}
