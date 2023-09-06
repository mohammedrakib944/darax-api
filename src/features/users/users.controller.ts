import { Request, Response, NextFunction } from "express";
import UserService from "./users.services";
import { IUser } from "../../interfaces/users.interface";

class UsersController {
  public userService = new UserService();

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUsersData: IUser[] = await this.userService.findAllUser();
      res.status(200).json(findAllUsersData);
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
