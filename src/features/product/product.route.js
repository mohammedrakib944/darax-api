import express from "express";
import productValidator from "./product.validator.js";
import validation from "../../middlewares/validation.js";
import { getProducts, uploadProduct } from "./product.controller.js";

const router = express.Router();

// /api/products/
router
  .route("/")
  .get(getProducts)
  .post(productValidator, validation, uploadProduct);

export default router;
