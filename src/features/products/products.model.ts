import { model, Schema, Document } from "mongoose";

const productSchema = new Schema({
  user_id: {
    type: String, // mongoose.Schema.Types.ObjectId,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  buy_price: {
    type: Number,
    required: true,
  },
  sell_price: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  quantity: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  ratings: [
    {
      type: Number,
    },
  ],
});

const productModel = model<Document>("Product", productSchema);

export default productModel;
