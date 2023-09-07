import { check } from "express-validator";

const userValidator = [
  check("name").notEmpty().withMessage("name is required!"),
  check("email").notEmpty().withMessage("email is required!"),
];

export default userValidator;
