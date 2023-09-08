import UsersRoutes from "./features/users/users.route";
import ProductsRoutes from "./features/products/products.route";

const routes = [new UsersRoutes(), new ProductsRoutes()];

export default routes;
