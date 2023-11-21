const { Router } = require("express");
const ctrl = require("./file.controller");

const file = Router();

file.get("/", ctrl.fileRoot);
file.get("/load/:filepath", ctrl.load);

module.exports = file;
