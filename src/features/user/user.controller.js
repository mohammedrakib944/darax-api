import User from "./user.modal.js";
import createHttpError from "http-errors";
import createToken from "../../utils/createToken.js";
import successRes from "../../utils/successRes.js";
import checkId from "../../utils/checkId.js";

// CREATE USER using Google Auth
export const createUserUsingGoogle = async (req, res, next) => {
  const { email, name } = req.body;
  try {
    if (!email || !name) {
      throw createHttpError("Wrong cradentials!");
    }

    const user = await User.findOne({ email });

    // Create JWT
    const token = createToken({ email }, process.env.JWT_SECRET);

    if (user) {
      res.status(201).json({ user, access_token: token });
    } else {
      const response = await User.create(req.body);
      const { password: passcode, ...rest } = response.toObject();
      res.status(201).json({ user: rest, access_token: token });
    }
  } catch (err) {
    next(err);
  }
};

// UPDATE USER
export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    // Check mondodb ID
    if (!checkId(id)) {
      throw createHttpError("Id is not valid!");
    }
    const { email, ...rest } = req.body;
    await User.findByIdAndUpdate(id, rest);
    // send response
    successRes(res, 200, { message: "Update success!" });
  } catch (err) {
    next(err);
  }
};
