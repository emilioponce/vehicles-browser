const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

const constants = require("./constants");

app.use(cors());

const uberVehicles = JSON.parse(fs.readFileSync(constants.PATH_UBER, "utf8"));
const taxiVehicles = JSON.parse(fs.readFileSync(constants.PATH_TAXI, "utf8"));

app.get("/uber/vehicles", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(uberVehicles));
});

app.get("/taxi/vehicles", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(taxiVehicles));
});

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the Vehicles API"
  })
);

app.listen(constants.PORT, () => {
  console.log(`Listening on Port: ${constants.PORT}`);
});
