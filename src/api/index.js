const { Router } = require("express");

const api = Router();

const userRouter = require("./user");

api.use("/user", userRouter);

module.exports = api;
