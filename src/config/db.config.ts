import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://Rakib:p0WP5qKZD5zIJfzk@cluster0.es0po.mongodb.net/darax?retryWrites=true&w=majority";
// DATABASE SETUP
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("DB connected!");
  } catch (err) {
    console.log("DB error: ", err);
  }
};

export default connectDB;
