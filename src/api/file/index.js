const { Router } = require("express");
const ctrl = require("./file.controller");

const file = Router();

file.get("/", ctrl.fileRoot);

module.exports = file;
