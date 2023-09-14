import { check } from "express-validator";

// Validate Products data
const ordersValidator = [
  check("user_id").notEmpty().withMessage("user_id is required!"),
];

export default ordersValidator;
