const mongoose = require("mongoose");

const db = process.env.DB_URL;

mongoose
  .connect(db)
  .then(() => console.log("mongodb is connected ..."))
  .catch((err) => console.log("Mongodb is not connect", err));
