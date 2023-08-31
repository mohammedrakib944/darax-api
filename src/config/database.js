import mongoose from "mongoose";

// DATABASE SETUP
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected!");
  } catch (err) {
    console.log("DB error: ", err);
  }
};

export default connectDB;
