const { Router } = require("express");
const ctrl = require("./aboutme.controller");

const aboutme = Router();

aboutme.get("/", ctrl.aboutmeRoot);
aboutme.get("/:userId", ctrl.user);

module.exports = aboutme;
