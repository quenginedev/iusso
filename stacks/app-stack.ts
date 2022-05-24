import { Stack, ViteStaticSite } from "@serverless-stack/resources";
import { Construct } from "constructs";

export default class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: any) {
    super(scope, id, props);

    new ViteStaticSite(this, "AppSite", {
      path: "app",
      customDomain: "iusso.com",
      environment: props.environment,
    });
  }
}
