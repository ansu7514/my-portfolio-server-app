const { Router } = require("express");
const ctrl = require("./portfolio.controller");
const fileCtrl = require("../../util/uploadMulter");

const portfolio = Router();

portfolio.get("/", ctrl.portfolioRoot);
portfolio.get("/:userId", ctrl.user);

portfolio.post("/create", fileCtrl.uploadController, ctrl.create);
portfolio.post("/update", fileCtrl.uploadController, ctrl.update);
portfolio.post("/delete", ctrl.delete);

module.exports = portfolio;
