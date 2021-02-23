const { Router } = require("express");
const router = Router();
const User = require("../models/userModel");

router.get("/:id", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const id =
    req.params["id"] && !isNaN(parseInt(req.params["id"], 10))
      ? req.params["id"]
      : 0;
  const user = await User.find({ id: +id });
  const result = {
    userId: user[0].userId,
    lookingForAJob: user[0].lookingForAJob,
    lookingForAJobDescription: user[0].lookingForAJobDescription,
    fullName: user[0].fullName,
    contacts: user[0].contacts,
    photos: user[0].photos,
    aboutMe: user[0].aboutMe ? user[0].aboutMe : "aboutMe",
  };
  res.status(200).json({ user: result, totalCount: "by id", error: null });
});

router.get("/status/:id", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const id =
    req.params["id"] && !isNaN(parseInt(req.params["id"], 10))
      ? req.params["id"]
      : 0;
  const user = await User.find({ id: +id });
  const result = {
    status: user[0].status,
  };
  res.status(200).json({ user: result });
});

module.exports = router;
