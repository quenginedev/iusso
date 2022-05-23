import { validateEmail } from "./../../utils/validators";
import connectToDb from "../../db";
import { compareSync } from "bcryptjs";
import AuthModel from "../../db/models/auth.model";
import { prop } from "ramda";
import { createAuthLoginResponse } from "./utils/create-auth-login-response";

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

  return createAuthLoginResponse(auth.toJSON(), ip);
};
