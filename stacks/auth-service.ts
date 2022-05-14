import { Api, Stack, StackProps } from "@serverless-stack/resources";
import { Construct } from "constructs";

export default class AuthService extends Stack {
  api: Api;
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    this.api = new Api(this, "authApi", {
      routes: {
        "post /login": "src/services/auth-service.login",
        "post /signup": "src/services/auth-service.signup",
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
