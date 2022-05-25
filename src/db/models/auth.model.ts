import { model, Schema } from "mongoose";

const UserSchema = new Schema<AuthCreatePayload>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true, trim: true },
  verificationCode: String,
  verified: { type: Boolean },
}, {
  timestamps: true,
});

export default model("auth", UserSchema);
