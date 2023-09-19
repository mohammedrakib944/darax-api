import UsersRoutes from "./features/users/users.route";
import ProductsRoutes from "./features/products/products.route";
import CartRoutes from "./features/cart/cart.route";
import CategoryRoutes from "./features/category/category.route";

const routes = [
  new UsersRoutes(),
  new ProductsRoutes(),
  new CartRoutes(),
  new CategoryRoutes(),
];

export default routes;
