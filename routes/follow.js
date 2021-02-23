const { Router } = require("express");
const router = Router();
const User = require("../models/userModel");

router.get("/:id", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const id =
    req.params["id"] && !isNaN(parseInt(req.params["id"], 10))
      ? req.params["id"]
      : 0;
  const myId = 0;
  const user = await User.find({ id: +myId });
  const array = user[0].followed;
  const followed = array.some((item) => item == id);
  console.log(followed);
  res.status(200).json({
    followed: followed,
  });
});

module.exports = router;
