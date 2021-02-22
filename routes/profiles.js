const { Router } = require("express");
const router = Router();
const User = require("../models/userModel");

router.get("/", async (req, res) => {
  //   let page = req.query.page ? req.query.page : 1;
  //   let count = req.query.count ? req.query.count : 10;
  //   let term = req.query.term ? req.query.term : 10;
  //   let friend = req.query.friend ? req.query.friend : 10;
  //   const allUsers = await User.find();
  //   let arrUsers = [];
  //   let start = (page - 1) * count;
  //   let stop = page * count;
  //   let maximum = 100;
  //   for (
  //     let i = start;
  //     i < stop && i < allUsers.length && arrUsers.length < maximum;
  //     i++
  //   ) {
  //     arrUsers.push(allUsers[i]);
  //   }
  res
    .status(200)
    .json({ users: "arrUsers", totalCount: "allUsers.length", error: null });
});

module.exports = router;
