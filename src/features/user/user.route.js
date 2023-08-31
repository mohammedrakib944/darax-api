import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("Hi from user Rakib!");
});

export default router;
