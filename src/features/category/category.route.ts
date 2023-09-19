import { Router } from "express";
import { IRoutes } from "../../interfaces/routes.interface";
import categoryValidator from "./category.validator";
import validationOutput from "../../middlewares/validation.middleware";
import CategoryController from "./category.controller";

class CategoryRoutes implements IRoutes {
  public path = "/category";
  public router = Router();
  public categoryController = new CategoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      categoryValidator,
      validationOutput,
      this.categoryController.createCategory
    );
    this.router.get(`${this.path}`, this.categoryController.getCategories);

    this.router
      .route(`${this.path}/:category_id`)
      .get(this.categoryController.getSingleCategory)
      .patch(this.categoryController.updateCategory)
      .delete(this.categoryController.deleteCategory);
  }
}

export default CategoryRoutes;
