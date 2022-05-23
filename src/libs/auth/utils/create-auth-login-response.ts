import { assoc, dissoc, pickAll, pipe } from "ramda";
import { sign } from "jsonwebtoken";
import config from "../../../config";

export const createAuthLoginResponse = (
  auth: AuthCreatePayload,
  ip: string,
) => {
  const { auth: { secret } } = config;
  const expiresIn = "24h";

  const tokenPayload = pipe(
    dissoc("password"),
    dissoc("verificationCode"),
    assoc("ip", ip),
  )(auth);

  const token = sign(tokenPayload, secret, { expiresIn });

  return {
    token,
    meta: {
      ...pickAll<any, AuthMetaData>(
        ["email", "name", "phoneNumber"],
        tokenPayload,
      ),
      expiresIn,
    },
  };
};
