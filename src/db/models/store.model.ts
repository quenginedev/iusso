import { model, Schema } from "mongoose";

const StoreSchema = new Schema<Store>({
  name: String,
  ownerId: String,
  address: {
    street: String,
    lat: Number,
    lng: Number,
  },
  logo: String,
}, {
  collection: "store",
  timestamps: true,
});

export default model("store", StoreSchema);
