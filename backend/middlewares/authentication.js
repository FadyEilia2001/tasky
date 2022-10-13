const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders || !authHeaders.startsWith("Bearer")) {
    throw new UnauthenticatedError("invalid token");
  }

  const token = authHeaders.split(" ")[1];

  try {
    const paylaod = await jwt.verify(token, "fadySuperSecretKey");
    req.user = { userId: paylaod.userId, name: paylaod.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError({
      msg: error.message,
      details: "unauthenticated",
    });
  }
};

module.exports = auth;
