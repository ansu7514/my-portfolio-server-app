const { Router } = require("express");
const ctrl = require("./user.controller");

const user = Router();

user.get("/", ctrl.userRoot);

user.post("/create", ctrl.create);
user.post("/check", ctrl.check);

module.exports = user;
