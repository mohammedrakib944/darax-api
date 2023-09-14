import { model, Schema, Document } from "mongoose";

const cartSchema = new Schema({
  user_id: { type: String, required: true },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true },
});

const cartModel = model<Document>("Cart", cartSchema);

export default cartModel;
