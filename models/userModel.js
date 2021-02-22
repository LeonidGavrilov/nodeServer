const { Schema, model } = require("mongoose");

const userModel = new Schema(
  {
    id: Number,
    name: String,
    uniqueUrlName: String,
    photos: {
      small: String,
      large: String,
    },
    status: String,
    followed: Boolean,
  },
  { versionKey: false }
);

module.exports = model("User", userModel);
