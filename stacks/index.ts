import * as sst from "@serverless-stack/resources";
import StoreStack from "./store-stack";
import AuthStack from "./auth-stack";
import EventStack from "./event-stack";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x",
  });
  const eventStack = new EventStack(app, "event-service");
  new StoreStack(app, "store-service");
  new AuthStack(app, "auth-service", {
    environment: {
      EVENT_SERVICE_URL: eventStack.api.url,
    },
  });
  // Add more stacks
}
