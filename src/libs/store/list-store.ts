import StoreModel from "../../db/models/store.model";
// import UserModel from "../../db/models/user.model";
import connectToDatabase from "./../../db/index";

const listStores = async () => {
  await connectToDatabase();
  const response = await StoreModel.find({});
  return response;
};

export default listStores;
