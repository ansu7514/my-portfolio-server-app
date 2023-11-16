const { Router } = require("express");
const ctrl = require('./user.controller');

const user = Router();

user.get('/', ctrl.userRoot);

user.post('/create', ctrl.create);

module.exports = user;
