const { Router } = require("express");
const ctrl = require("./resume.controller");

const resume = Router();

resume.get("/", ctrl.resumeRoot);

// education
resume.get("/education/:userId", ctrl.educationUser);
resume.post("/education/create", ctrl.educationCreate);
resume.post("/education/delete", ctrl.educationDelete);

// experience
resume.get("/experience/:userId", ctrl.experienceUser);
resume.post("/experience/create", ctrl.experienceCreate);
resume.post("/experience/delete", ctrl.experienceDelete);

// coding skill
resume.get("/skill/:userId", ctrl.skillUser);
resume.post("/skill/create", ctrl.skillCreate);

module.exports = resume;
