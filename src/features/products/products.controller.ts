import { Request, Response, NextFunction } from "express";
import productModel from "./products.model";
import createError from "http-errors";
import userModel from "../users/users.model";
import success from "../../helpers/success";

class ProductController {
  // upload product
  public uploadProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await userModel.findById(req.body.user_id);

      if (!user) {
        throw createError("User is not valid!");
      }
      const response = await productModel.create(req.body);
      if (response) {
        success(res);
      } else {
        throw createError("Product upload failed!");
      }
    } catch (err) {
      next(err);
    }
  };

  // get all products
  public getAllProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const search = req.query.search || "";
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;

      const searchRegExp = new RegExp(".*" + search + ".*", "i");

      const filter = {
        $or: [
          { product_name: { $regex: searchRegExp } },
          { category: { $regex: searchRegExp } },
        ],
      };

      // Searching
      const response = await productModel
        .find(filter)
        .limit(limit)
        .skip((page - 1) * limit);

      const totalProducts = await productModel.find(filter).countDocuments();

      if (!response || response.length < 1) {
        throw createError(404, "No product found!");
      }

      res.status(200).json({
        pagination: {
          totalPages: Math.ceil(totalProducts / limit),
          currentPage: page,
          previousPage: page - 1 > 0 ? page - 1 : null,
          nextPage:
            page + 1 <= Math.ceil(totalProducts / limit) ? page + 1 : null,
        },
        products: response,
      });
    } catch (err) {
      next(err);
    }
  };

  // get single product
  public getSingleProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { product_id } = req.params;
      const response = await productModel.findById(product_id);
      if (response) {
        res.status(200).json(response);
      } else {
        throw createError("No product found!");
      }
    } catch (err) {
      next(err);
    }
  };

  // update product
  public updateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { product_id } = req.params;
      const { category, ...rest } = req.body;
      await productModel.findByIdAndUpdate(product_id, rest);
      success(res);
    } catch (err) {
      next(err);
    }
  };

  // delete product
  public deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { product_id } = req.params;
      const response = await productModel.findByIdAndDelete(product_id);
      if (response) {
        success(res);
      } else {
        throw createError("Product delete failed!");
      }
    } catch (err) {
      next(err);
    }
  };
}

export default ProductController;
