const { Router } = require("express");
const ctrl = require("./portfolio.controller");
const fileCtrl = require("../../util/uploadMulter");

const portfolio = Router();

portfolio.get("/", ctrl.portfolioRoot);

portfolio.post("/create", fileCtrl.uploadController, ctrl.create);

module.exports = portfolio;
