import { Router } from "express";
import { IRoutes } from "../../interfaces/routes.interface";
import ProductController from "./products.controller";
import productValidator from "./products.validator";
import validationOutput from "../../middlewares/validation.middleware";

class ProductsRoutes implements IRoutes {
  public path = "/products";
  public router = Router();
  public productController = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route(`${this.path}`)
      .get(this.productController.getAllProducts)
      .post(
        productValidator,
        validationOutput,
        this.productController.uploadProduct
      );

    this.router
      .route(`${this.path}/:product_id`)
      .get(this.productController.getSingleProduct)
      .patch(this.productController.updateProduct)
      .delete(this.productController.deleteProduct);
  }
}

export default ProductsRoutes;
