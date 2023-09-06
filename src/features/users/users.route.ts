import { Router } from "express";
import { IRoutes } from "../../interfaces/routes.interface";
import UsersController from "./users.controller";

class UsersRoutes implements IRoutes {
  public path = "/users";
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getUsers);
    // this.router.get(`${this.path}/:id`, this.usersController.getUsers);
  }
}

export default UsersRoutes;
