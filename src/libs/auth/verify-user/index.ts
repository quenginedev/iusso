import connectToDb from "../../../db";
import AuthModel from "../../../db/models/auth.model";
import { createAuthLoginResponse } from "../utils/create-auth-login-response";

export const verifyUserAccount: VerifyUser = async (
  { verificationCode, _id, ip },
) => {
  await connectToDb();
  const auth = await AuthModel.findOneAndUpdate({ verificationCode, _id }, {
    verificationCode: null,
    verified: true,
  }, { new: true });
  if (!auth) throw new Error("Invalid verification code");
  return createAuthLoginResponse(auth.toJSON(), ip);
};
