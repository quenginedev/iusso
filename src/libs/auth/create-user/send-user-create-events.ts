import verificationTemplate from "../../../templates/auth/verify-email";
import axios from "axios";
import config from "../../../config";

const eventService = axios.create({
  baseURL: config.services.eventServiceURL,
});

export const sendUserCreatedEvent = (userDetails: AuthCreatePayload) => {
  eventService.post("/", {
    email: {
      template: verificationTemplate,
      data: userDetails,
      toAddresses: [userDetails.email],
      fromAddress: "verify@iusso.com",
      subject: "Iusso account verification",
    },
  });
};
