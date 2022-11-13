const { clearHash } = require("../services/cache");

module.exports = async (req, res, next) => {
  // After route handler
  await next();

  clearHash(req.user.id);
};
