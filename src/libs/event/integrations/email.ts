import { SES } from "aws-sdk";
import { compile } from "handlebars";

export const emailIntegration: EmailIntegration = async ({
  toAddresses,
  subject,
  template,
  fromAddress,
  data,
}) => {
  const ses = new SES();
  const Data = compile(template)(data);
  const params: AWS.SES.SendEmailRequest = {
    Destination: { ToAddresses: toAddresses },
    Message: {
      Subject: { Data: subject, Charset: "UTF-8" },
      Body: { Html: { Data, Charset: "UTF-8" } },
    },
    Source: fromAddress,
  };
  await ses.sendEmail(params).promise();
};
