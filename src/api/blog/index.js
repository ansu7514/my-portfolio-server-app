const { Router } = require("express");
const ctrl = require("./blog.controller");
const fileCtrl = require("../../util/uploadMulter");

const blog = Router();

blog.get("/", ctrl.blogRoot);

blog.post("/create", fileCtrl.uploadController, ctrl.create);

module.exports = blog;
