import { Router } from "express";
import { IRoutes } from "../../interfaces/routes.interface";
// import ProductController from "./products.controller";
import validationOutput from "../../middlewares/validation.middleware";

class PaymentRoutes implements IRoutes {
  public path = "/cart";
  public router = Router();
  //   public productController = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.route(`${this.path}`);

    this.router.route(`${this.path}/:id`);
  }
}

export default PaymentRoutes;
