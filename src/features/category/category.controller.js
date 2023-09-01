import createHttpError from "http-errors";
import checkId from "../../utils/checkId.js";
import Category from "./category.model.js";
import successRes from "../../utils/successRes.js";

// CREATE CATEGORY
export const createCategory = async (req, res, next) => {
  try {
    if (!checkId(req.body.user_id)) {
      throw createHttpError("user_id is not valid!");
    }
    const res = await Category.create(req.body);
    successRes(res, 200, "Category Created!");
  } catch (err) {
    next(err);
  }
};

// GET all Categories
export const getCategory = async (req, res, next) => {
  try {
    const totalCategory = await Category.find();
    res.status(200).json(totalCategory);
  } catch (err) {
    next(err);
  }
};

// UPDATE Category
export const updateCategory = async (req, res, next) => {
  const id = req.params.id;
  try {
    if (!checkId(id)) {
      throw createHttpError("Id is not valid!");
    }
    const response = await Category.findByIdAndUpdate(id, req.body);
    if (response) {
      successRes(res, 200);
    } else {
      throw createHttpError("Update error!");
    }
  } catch (err) {
    next(err);
  }
};

// DELETE Category
export const deleteCategory = async (req, res, next) => {
  const category_id = req.params.id;
  try {
    if (!checkId(category_id)) {
      throw createHttpError("Id is not valid!");
    }
    const response = await Category.findByIdAndDelete(category_id);
    if (!response) {
      throw createHttpError("Could not delete!");
    }
    successRes(res, 202);
  } catch (err) {
    next(err);
  }
};
