import { check } from "express-validator";

// Validate Payment data
const paymentValidator = [
  check("user_id").notEmpty().withMessage("user_id is required!"),
];

export default paymentValidator;
