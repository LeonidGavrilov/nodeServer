const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const homeRouter = require("./routes/home");
const usersRouter = require("./routes/users");
const PORT = process.env.PORT || 3001;
const password = "V8d-VCL-HgG-Vua";
const dbName = "socialNetwork";
const connectionDB =
  "mongodb+srv://LeonidG:" + password + "@cluster0.r4e4w.mongodb.net/" + dbName;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);
app.use("/users", usersRouter);

const start = async () => {
  try {
    await mongoose.connect(connectionDB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
