const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ welcome: "Hello world!" });
});

module.exports = router;
