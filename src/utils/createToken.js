import JWT from "jsonwebtoken";
import createHttpError from "http-errors";

/**
 * @param {Object} payload
 * @param {String} secretKey
 * @param {String} expiresIn '10m'
 * @returns token
 */
const createToken = (payload, secretKey, expiresIn = "10d") => {
  try {
    const token = JWT.sign(payload, secretKey, { expiresIn });
    return token;
  } catch (err) {
    console.log("JWT error: ", err);
    throw createHttpError("Cann't create JWT");
  }
};

export default createToken;
