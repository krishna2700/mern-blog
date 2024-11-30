const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
// PORT
const PORT = process.env.PORT || 3690;

// start the server
mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database Connection Failed");
    console.log(err);
  });
