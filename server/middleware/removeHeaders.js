const removeHeaders = (req, res, next) => {
  res.removeHeaders("X-Powered-By");
  next();
};

module.exports = removeHeaders;
