import createHttpError from "http-errors";
import checkId from "../../utils/checkId.js";
import successRes from "../../utils/successRes.js";
import Product from "./product.model.js";
import User from "../user/user.modal.js";

// SAVE PRODUCT
export const uploadProduct = async (req, res, next) => {
  try {
    if (!checkId(req.body.user_id)) {
      throw createHttpError("user_id is not valid!");
    }
    const user = await User.findById(req.body.user_id);
    if (!user) {
      throw createHttpError("No user found!");
    }
    await Product.create(req.body);
    successRes(res, 200);
  } catch (err) {
    next(err);
  }
};

// GET PRODUCTS
export const getProducts = async (req, res, next) => {
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
    const response = await Product.find(filter)
      .limit(limit)
      .skip((page - 1) * limit);

    const totalProducts = await Product.find(filter).countDocuments();

    if (!response || response.length < 1) {
      throw createHttpError(404, "No product found!");
    }

    successRes(res, 200, {
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
