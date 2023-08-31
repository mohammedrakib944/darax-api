import mongoose from "mongoose";

/**
 *
 * @param {id} id
 * @returns
 */
const checkId = (id) => {
  // Check mondodb ID
  if (mongoose.Types.ObjectId.isValid(id)) {
    return true;
  } else {
    return false;
  }
};

export default checkId;
