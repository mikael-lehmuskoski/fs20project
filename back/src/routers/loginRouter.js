const loginRouter = require("express").Router();

// TODO: process password and check DB
loginRouter.post("/", (req, res) => {
  try {
    if (!req.body) res.status(400).end();
    if (req.body.user !== "user" || req.body.pw !== "pw") res.status(401).end();
    else if (req.body.user === "user" && req.body.pw === "pw")
      res.status(200).end();
    else res.status(500).end();
  } catch (err) {
    res.status(401).json({ error: err.message }).end();
  }
});

module.exports = loginRouter;
