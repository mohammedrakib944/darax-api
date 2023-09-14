import { Router } from "express";
import { IRoutes } from "../../interfaces/routes.interface";
import CartController from "./cart.controller";

class CartRoutes implements IRoutes {
  public path = "/cart";
  public router = Router();
  public cartController = new CartController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.route(`${this.path}`).post(this.cartController.addToCart);
    this.router.get(`${this.path}/:user_id`, this.cartController.getCartItems);
    this.router.delete(
      `${this.path}/:cart_id`,
      this.cartController.deleteCartItem
    );
  }
}

export default CartRoutes;
