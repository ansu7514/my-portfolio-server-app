const userService = require("./user.service");

exports.userRoot = async (req, res) => {
  res.end("user success");
};

exports.create = async (req, res) => {
  let success = false;
  let data;

  try {
    data = await userService.createUser(req.body);
    success = true;
    res.status(200);
  } catch (error) {
    console.error(error);
    data = error;
    res.status(500);
  }

  res.send({ success, data });
};
