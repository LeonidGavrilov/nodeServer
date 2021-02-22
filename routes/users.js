const { Router } = require("express");
const router = Router();
const User = require("../models/userModel");

router.get("/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let page = req.query.page ? req.query.page : 1;
  let count = req.query.count ? req.query.count : 10;
  let term = req.query.term ? req.query.term : 10;
  let friend = req.query.friend ? req.query.friend : 10;
  const allUsers = await User.find();
  let arrUsers = [];
  let start = (page - 1) * count;
  let stop = page * count;
  let maximum = 100;
  for (
    let i = start;
    i < stop && i < allUsers.length && arrUsers.length < maximum;
    i++
  ) {
    arrUsers.push(allUsers[i]);
  }
  res
    .status(200)
    .json({ items: arrUsers, totalCount: allUsers.length, error: null });
});

router.get("/all", async (req, res) => {
  const allUsers = await User.find();
  res.status(200).json({ users: allUsers });
});

module.exports = router;

// const setUser = async (item) => {
//   //   let size = getRandomInt();
//   //   let arr = [];
//   //   for (let i = 0; i < size; i++) {
//   //     arr.push(getRandomInt());
//   //   }
//   try {
//     const user = new User({
//       id: item.id,
//       userId: item.id,
//       name: item.name,
//       fullName: item.name,
//       lookingForAJob: Math.random() < 0.5,
//       lookingForAJobDescription: "String",
//       uniqueUrlName: item.uniqueUrlName,
//       photos: {
//         small: item.photos.small,
//         large: item.photos.large,
//       },
//       status: item.status,
//       contacts: {
//         github: "String",
//         vk: "String",
//         facebook: "String",
//         instagram: "String",
//         twitter: "String",
//         website: "String",
//         youtube: "String",
//         mainLink: "String",
//       },
//       followed: item.followed,
//     });
//     await user.save();
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// const createUsers = async () => {
//   for (let i = 0; i < qwerty.length; ) {
//     await setUser(qwerty[i]);
//     i++;
//     console.log(i);
//   }
//   console.log("good end!");
//   return "good!";
// };

// const getRandomInt = () => {
//   return Math.floor(Math.random() * (100 - 0)) + 0;
// };
