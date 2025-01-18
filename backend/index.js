const express = require("express");
const TaskRoute = require("./Routes/TaskRouter.js");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
require("./Models/Connectdb.js");
const PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {
  res.send(`server is running on port ${PORT} successfully!`);
});

app.use(bodyParser.json());
app.use("/tasks", TaskRoute);
// app.use(bodyParser.urlencoded({ extended: true })); 

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
