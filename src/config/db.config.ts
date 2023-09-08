import mongoose from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI!;
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
