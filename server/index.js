const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

//logger middleware to help with debugging
app.use(morgan("dev"));

//static middleware so browser can request things, such as bundle.js
app.use(express.static(path.join(__dirname, "../public")));

//allows for req.body to use the body contained by a request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//this will mount all our api routes
app.use("./api", require("./api"));

//**this goes at the bottom before error handeling**
//send index.html for any other request, for any request that does not match one of our API routes
app.get("*", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//error handeling middleware goes at the bottom
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
