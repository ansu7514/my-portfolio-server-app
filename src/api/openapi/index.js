const { Router } = require("express");
const ctrl = require("./openapi.controller");

const openapi = Router();

openapi.get("/", ctrl.openapiRoot);

openapi.post("/school", ctrl.school);

module.exports = openapi;
