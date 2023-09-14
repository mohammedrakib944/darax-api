import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import userModel from "../users/users.model";
import productModel from "../products/products.model";
import success from "../../helpers/success";
import cartModel from "./cart.model";

class CartController {
  // Add to cart
  public addToCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { user_id, product, quantity } = req.body;
    try {
      if (quantity < 1) {
        throw createError("Quantity could't be less then 1");
      }

      // Find user
      const user = await userModel.findById(user_id);
      if (!user) {
        throw createError("No user found!");
      }

      // find product
      const DBproduct: any = await productModel.findById(product);
      if (!DBproduct) {
        throw createError("No product found!");
      }
      if (quantity > DBproduct?.quantity) {
        throw createError("Stock limited!");
      }

      let cartItem: any = await cartModel.findOne({ user_id, product });
      if (cartItem) {
        const updatedQuantity = cartItem.quantity + quantity;
        if (updatedQuantity > DBproduct.quantity) {
          throw createError("Stock limited!");
        } else {
          await cartModel.findByIdAndUpdate(cartItem._id, {
            quantity: updatedQuantity,
          });
        }
      } else {
        await cartModel.create({ user_id, product, quantity });
      }
      success(res, 201, "Item added to cart.");
    } catch (error) {
      next(error);
    }
  };

  // Get cart Items
  public getCartItems = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { user_id } = req.params;
    try {
      const cartItems = await cartModel.find({ user_id }).populate("product");
      res.status(200).json(cartItems);
    } catch (error) {
      next(error);
    }
  };

  // Delete item
  public deleteCartItem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { cart_id } = req.params;
    try {
      await cartModel.findByIdAndDelete(cart_id);
      success(res, 200);
    } catch (error) {
      next(error);
    }
  };
}

export default CartController;
