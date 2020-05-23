const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const apiRoute = require("./routes/apiRoutes");
const htmlRoute = require("./routes/htmlRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3030;

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(logger("dev"));

app.use(express.static("public"));

const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Routes
app.use(apiRoute);
app.use(htmlRoute);

app.listen(PORT, () => console.log("listening on port: ", PORT));
