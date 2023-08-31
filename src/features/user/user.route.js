import express from "express";
import { createUserUsingGoogle, updateUser } from "./user.controller.js";

const router = express.Router();

// /api/users/google-auth
router.post("/google-auth", createUserUsingGoogle);

router.route("/:id").patch(updateUser);

export default router;
