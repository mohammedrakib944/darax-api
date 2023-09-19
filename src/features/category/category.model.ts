import { model, Schema, Document } from "mongoose";

const categorySchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  category_name: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["show", "hide"],
    default: "show",
  },
});

const categoryModel = model<Document>("Category", categorySchema);

export default categoryModel;
