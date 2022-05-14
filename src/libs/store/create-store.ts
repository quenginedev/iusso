import StoreModel from "../../db/models/store.model";

const createStore: any = async (storeDetails: Store) => {
  const newStore = await StoreModel.create(storeDetails);
  return newStore;
};

export default createStore;
