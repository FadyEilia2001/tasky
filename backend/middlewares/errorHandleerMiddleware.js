const customErrorApi = require("../error/custom-errors");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customErrorApi) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({
    msg: "Something went wrong, please try again later",
    code: err.message,
  });
};

module.exports = errorHandlerMiddleware;
