import express from "express";
import userRoute from "../features/user/user.route.js";

const router = express.Router();

const defaultRouter = [
  {
    path: "/user",
    route: userRoute,
  },
];

defaultRouter.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
