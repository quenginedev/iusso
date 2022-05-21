import AuthModel from "../../db/models/auth.model";

const verifyUser = async ({ _id, verificationCode }) => {
  const response = await AuthModel.findOneAndUpdate({ _id, verificationCode }, {
    verificationCode: null,
    verified: true,
  });
	
};
