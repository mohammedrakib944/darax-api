import { Request, Response, NextFunction } from "express";
import userModel from "./users.model";
import success from "../../helpers/success";
import createError from "http-errors";

class UsersController {
  // Get all users
  public getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const search: string = String(req.query.search) || "";
      const page: number = Number(req.query.page) || 1;
      const limit: number = Number(req.query.limit) || 5;

      const searchRegExp = new RegExp(".*" + search + ".*", "i");

      const filter = {
        $or: [
          { name: { $regex: searchRegExp } },
          { email: { $regex: searchRegExp } },
        ],
      };

      // Don't send password
      const options = { password: 0 };

      // Searching
      const response = await userModel
        .find(filter, options)
        .limit(limit)
        .skip((page - 1) * limit);

      const totalUsers = await userModel.find(filter).countDocuments();

      if (!response || response.length < 1) {
        throw createError(404, "No user found!");
      }

      res.status(200).json({
        pagination: {
          totalPages: Math.ceil(totalUsers / limit),
          currentPage: page,
          previousPage: page - 1 > 0 ? page - 1 : null,
          nextPage: page + 1 <= Math.ceil(totalUsers / limit) ? page + 1 : null,
        },
        users: response,
      });
    } catch (error) {
      next(error);
    }
  };

  // Get single user
  public getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await userModel.findById(id);
      if (user) res.status(200).json(user);
      else throw createError("No user found");
    } catch (error) {
      next(error);
    }
  };

  // Create user
  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await userModel.create(req.body);
      success(res);
    } catch (error) {
      next(error);
    }
  };

  // update user
  public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, ...rest } = req.body;
      const { id } = req.params;
      const response = await userModel.findByIdAndUpdate(id, rest);

      if (!response) {
        throw createError("Could not update user!");
      }
      // send response
      success(res);
    } catch (error) {
      next(error);
    }
  };

  // delete user
  public deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const response = await userModel.findByIdAndDelete(id);
      // If no user found
      if (!response) {
        throw createError("Couldn't delete!");
      }
      success(res);
    } catch (err) {
      next(err);
    }
  };
}

export default UsersController;
