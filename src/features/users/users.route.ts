import { Router } from "express";
import { IRoutes } from "../../interfaces/routes.interface";
import UsersController from "./users.controller";
import userValidator from "./users.validator";
import validationOutput from "../../middlewares/validation.middleware";

class UsersRoutes implements IRoutes {
  public path = "/users";
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route(`${this.path}`)
      .get(this.usersController.getAllUsers)
      .post(userValidator, validationOutput, this.usersController.createUser);
    this.router
      .route(`${this.path}/:id`)
      .get(this.usersController.getUser)
      .patch(this.usersController.updateUser)
      .delete(this.usersController.deleteUser);
  }
}

export default UsersRoutes;
