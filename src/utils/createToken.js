import JWT from "jsonwebtoken";

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
    console.log("Err -> ", err);
    throw createError("Cann't create JWT");
  }
};

export default createToken;
