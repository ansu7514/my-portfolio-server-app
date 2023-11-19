const { Router } = require("express");

const api = Router();

const userRouter = require("./user");
const fileRouter = require("./file");

api.use("/user", userRouter);
api.use("/file", fileRouter);

module.exports = api;
