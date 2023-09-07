import dotenv from "dotenv";
dotenv.config();
import App from "./app";
import UsersRoutes from "./features/users/users.route";

const routes = [new UsersRoutes()];

const app = new App(routes);

app.listen();
