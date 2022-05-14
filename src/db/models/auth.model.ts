import { model, Schema } from "mongoose";

const UserSchema = new Schema<AuthCreatePayload>({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  phoneNumber: {type: String, required: true, unique: true},
	verificationCode: String
}, {
  timestamps: true,
});

export default model("auth", UserSchema);
