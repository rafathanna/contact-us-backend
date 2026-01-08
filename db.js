require("dotenv").config();
const mongoose = require("mongoose");

const dbUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/mydb";

mongoose
  .connect(dbUrl)
  .then(() => console.log("DB Connected ✅"))
  .catch((err) => console.log(err));
