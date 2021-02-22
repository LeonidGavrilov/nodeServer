const { Schema, model } = require("mongoose");

const userModel = new Schema(
  {
    id: Number,
    userId: Number,
    name: String,
    fullName: String,
    lookingForAJob: Boolean,
    lookingForAJobDescription: String,
    uniqueUrlName: String,
    photos: {
      small: String,
      large: String,
    },
    contacts: {
      github: String,
      vk: String,
      facebook: String,
      instagram: String,
      twitter: String,
      website: String,
      youtube: String,
      mainLink: String,
    },
    status: String,
    followed: Array,
  },
  { versionKey: false }
);

module.exports = model("User", userModel);
