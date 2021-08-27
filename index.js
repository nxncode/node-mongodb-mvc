// API
const constValues = require("./constants").constValues;
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const route = require("./route");

const mongooseConnection = require("./db");
mongooseConnection.mongooseConnection();

const logger = (req, res, next) => {
  console.log("An API has been called.");
  next();
};
const logger2 = (req, res) => {
  console.log("This is logger2 ");
  res.send("This is logger 2 who has responeded");
};
app.use(logger);
app.use(logger2);

app.get("/test", (req, res) => {
  res.send("APIDEMO V 1.0.0 Working Fine. ");
});

app.use("/", route);

//POST , GET . PUT, PATCH, DELETE , any request that has any endpoint
app.all("*", (req, res) => {
  res.send("Invalid request. Please contact Administrator");
});
app.listen(constValues.PORT, () => {
  console.log(
    `Hi There . The APIDEMO project has started on port # ${constValues.PORT}`
  );
});
