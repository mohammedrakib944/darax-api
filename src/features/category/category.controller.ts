import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import userModel from "../users/users.model";
import success from "../../helpers/success";
import categoryModel from "./category.model";

class CategoryController {
  // create
  public createCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await categoryModel.create(req.body);
      success(res, 200);
    } catch (err) {
      next(err);
    }
  };

  // Get all
  public getCategories = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const allCategories = await categoryModel.find();
      res.status(200).json(allCategories);
    } catch (err) {
      next(err);
    }
  };

  // GET SINGLE Category
  public getSingleCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const category_id = req.params.category_id;
    try {
      const response = await categoryModel.findById(category_id);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  };

  // GET SINGLE Category
  public updateCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const category_id = req.params.category_id;
    try {
      await categoryModel.findByIdAndUpdate(category_id, req.body);
      success(res);
    } catch (err) {
      next(err);
    }
  };

  // Delete Category
  public deleteCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const category_id = req.params.category_id;
    try {
      await categoryModel.findByIdAndDelete(category_id);
      success(res);
    } catch (err) {
      next(err);
    }
  };
}

export default CategoryController;
