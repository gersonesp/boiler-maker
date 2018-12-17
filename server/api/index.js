const router = require("express").Router();

//require(match) all request from each api

//bad route request handler-- gives 404
router.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

module.exports = router;
