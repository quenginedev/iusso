import {
  Api,
  Bucket,
  EventBus,
  Stack,
  StackProps,
} from "@serverless-stack/resources";
import { Construct } from "constructs";
import { EventType } from "aws-cdk-lib/aws-s3";

export default class EventService extends Stack {
  api: Api;
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, "eventBucket", {
      notifications: [
        {
          function: {
            permissions: ["s3:GetObject", "ses:SendEmail"],
            srcPath: "src/services/",
            handler: "event-service.process",
          },
          notificationProps: {
            events: [EventType.OBJECT_CREATED_PUT],
            filters: [{ prefix: "events/" }, { suffix: ".json" }],
          },
        },
      ],
    });

    this.api = new Api(this, "eventApi", {
      routes: {
        "POST /": "src/services/event-service.send",
      },
      defaultFunctionProps: {
        environment: {
          BUCKET: bucket.bucketName,
        },
      },
    });
    this.api.attachPermissions([bucket]);

    this.addOutputs({
      url: this.api.url,
    });
  }
}
