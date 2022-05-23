import * as sst from "@serverless-stack/resources";
import StoreStack from "./store-stack";
import AuthStack from "./auth-stack";
import EventStack from "./event-stack";
import AppStack from "./app-stack";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x",
  });
  const eventStack = new EventStack(app, "event-service");
  const storeStack = new StoreStack(app, "store-service");
  const authStack = new AuthStack(app, "auth-service", {
    environment: {
      EVENT_SERVICE_URL: eventStack.api.url,
    },
  });
  new AppStack(app, "app-stack", {
    environment: {
      VITE_STORE_SERVICE: storeStack.api.url,
      VITE_EVENT_SERVICE: eventStack.api.url,
      VITE_AUTH_SERVICE: authStack.api.url,
    },
  });
  // Add more stacks
}
