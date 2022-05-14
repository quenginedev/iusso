import * as sst from "@serverless-stack/resources";
import StoreStack from "./store-service";
import AuthService from "./auth-service";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x",
  });
  new StoreStack(app, "store-service");
  new AuthService(app, "auth-service");
  // Add more stacks
}
