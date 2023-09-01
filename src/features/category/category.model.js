import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  user_id: {
    type: String, // mongoose.Schema.Types.ObjectId,
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

const Category = mongoose.model("Category", categorySchema);
export default Category;
