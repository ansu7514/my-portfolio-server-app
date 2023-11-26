const { Router } = require("express");

const api = Router();

const userRouter = require("./user");
const aboutmeRouter = require("./aboutme");
const fileRouter = require("./file");

api.use("/user", userRouter);
api.use("/aboutme", aboutmeRouter);
api.use("/file", fileRouter);

module.exports = api;
