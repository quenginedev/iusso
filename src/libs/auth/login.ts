import { validateEmail } from "./../../utils/validators";
import connectToDb from "../../db";
import { compareSync } from "bcryptjs";
import AuthModel from "../../db/models/auth.model";
import { compose, not, prop } from "ramda";
import { createAuthLoginResponse } from "./utils/create-auth-login-response";
import { sendUserCreatedEvent } from "./utils/send-user-create-events";

export const loginUser = async ({ credentials, ip }: {
  credentials: AuthLoginCredentials;
  ip: string;
}) => {
  const { email, password } = credentials;
  if (!validateEmail(email)) throw new Error("Invalid email format");
  if (!password) throw new Error("Password required");
  await connectToDb();
  const auth = await AuthModel.findOne({ email });
  if (!auth || (auth && !compareSync(password, prop("password", auth)))) {
    throw Error("Invalid credentials");
  }
  const notVerified = compose(not, prop("verified"))(auth.toJSON());
  if (notVerified) {
    sendUserCreatedEvent(auth.toJSON());
    throw Error("Please check email for verification");
  }

  return createAuthLoginResponse(auth.toJSON(), ip);
};
