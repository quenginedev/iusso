import { validateEmail, validatePhoneNumber } from "../../../utils/validators";
import { hash } from "bcryptjs";
import { dissoc, prop } from "ramda";
import AuthModel from "../../../db/models/auth.model";
import connectToDatabase from "../../../db";
import { v4 as uuid } from "uuid";
import { sendUserCreatedEvent } from "../utils/send-user-create-events";

export const createUser: CreateUser = async ({ userPayload }) => {
  const { email, phoneNumber, password } = userPayload;
  if (!validateEmail(email)) throw new Error("Invalid email format");
  if (!validatePhoneNumber(phoneNumber)) {
    throw new Error("invalid phone number format");
  }

  const verificationCode = uuid();
  const passwordHash = await hash(password, 2);
  const userDetails = {
    ...dissoc("verified", userPayload),
    password: passwordHash,
    verificationCode,
  };

  await connectToDatabase();
  const newUser = await AuthModel.create(userDetails);
  sendUserCreatedEvent(newUser);
  return {
    _id: prop("_id", newUser),
  };
};
