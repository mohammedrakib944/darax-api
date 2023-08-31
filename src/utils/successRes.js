/**
 *
 * @param {res} res
 * @param {Number} statusCode
 * @param {String} message
 * @param {Object} payload
 * @returns success response
 */

const successRes = (res, statusCode = 200, message = "Success!") => {
  return res.status(statusCode).json({
    success: true,
    message,
  });
};

export default successRes;
