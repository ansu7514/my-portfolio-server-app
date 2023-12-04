const { Router } = require("express");

const api = Router();

const aboutmeRouter = require("./aboutme");
const fileRouter = require("./file");
const openapiRouter = require("./openapi");
const userRouter = require("./user");

api.use("/aboutme", aboutmeRouter);
api.use("/file", fileRouter);
api.use("/openapi", openapiRouter);
api.use("/user", userRouter);

module.exports = api;
