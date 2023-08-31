import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  //-----user input-----
  name: {
    trim: true,
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
  },
  //-----user input-----
  image: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
  },
  postal_code: {
    type: String,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
  is_banned: {
    type: Boolean,
    defalut: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
