const { Router } = require("express");

const api = Router();

api.get("/", (req, res) => {
  console.log("success");
  res.json("success");

  res.end();
});

module.exports = api;
