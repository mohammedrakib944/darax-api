import express from "express";
import categoryValidator from "./category.validator.js";
import validationResult from "../../middlewares/validation.js";
import {
  createCategory,
  getCategory,
  updateCategory,
} from "./category.controller.js";

const router = express.Router();

// api/category
router
  .route("/")
  .get(getCategory)
  .post(categoryValidator, validationResult, createCategory);

// category ID
router.route("/:id").patch(updateCategory).delete();

export default router;
