const { Router } = require("express");
const ctrl = require("./resume.controller");

const resume = Router();

resume.get("/", ctrl.resumeRoot);
resume.get("/education/:userId", ctrl.educationUser);

resume.post("/education/create", ctrl.educationCreate);

module.exports = resume;
