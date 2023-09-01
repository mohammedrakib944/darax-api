import express from "express";
import userRoute from "../features/user/user.route.js";
import categoryRoute from "../features/category/category.route.js";
import productRoute from "../features/product/product.route.js";

const router = express.Router();

const defaultRouter = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/category",
    route: categoryRoute,
  },
  {
    path: "/products",
    route: productRoute,
  },
];

defaultRouter.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
