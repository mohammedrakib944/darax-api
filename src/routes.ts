import UsersRoutes from "./features/users/users.route";
import ProductsRoutes from "./features/products/products.route";
import CartRoutes from "./features/cart/cart.route";

const routes = [new UsersRoutes(), new ProductsRoutes(), new CartRoutes()];

export default routes;
