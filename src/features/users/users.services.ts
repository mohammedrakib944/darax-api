import userModel from "./users.model";
import { IUser } from "../../interfaces/users.interface";

class UserService {
  public users = userModel;

  public async findAllUser(): Promise<IUser[]> {
    // const users: IUser[] = await this.users.find();
    // return users;

    // custom data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            _id: "52342",
            name: "Md.Rakibuzzaman",
            email: "rakib@gmail.com",
            password: "rakib1234",
            is_admin: false,
            is_banned: false,
            created_at: "09/06/2023",
            address: "Nothing",
          },
        ]);
      }, 500);
    });
  }
}

export default UserService;
