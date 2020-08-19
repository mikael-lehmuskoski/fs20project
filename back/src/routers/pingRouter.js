const pingRouter = require("express").Router();

pingRouter.get("/", (req, res) => {
  res.status(200).end();
});

module.exports = pingRouter;
