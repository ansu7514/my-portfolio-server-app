const { Router } = require("express");
const ctrl = require("./user.controller");
const fileCtrl = require('../../util/uploadMulter');

const user = Router();

user.get("/", ctrl.userRoot);

user.post("/create", ctrl.create);
user.post("/check", ctrl.check);
user.post("/login", ctrl.login);
user.post("/update", fileCtrl.uploadController, ctrl.update);

module.exports = user;
