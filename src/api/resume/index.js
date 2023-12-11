const { Router } = require("express");
const ctrl = require("./resume.controller");

const resume = Router();

resume.get("/", ctrl.resumeRoot);

// education
resume.get("/education/:userId", ctrl.educationUser);
resume.post("/education/create", ctrl.educationCreate);

// experience
resume.get("/experience/:userId", ctrl.experienceUser);
resume.post("/experience/create", ctrl.experienceCreate);

module.exports = resume;
