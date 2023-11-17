const userService = require("./user.service");

exports.userRoot = async (req, res) => {
  res.end("user success");
};

exports.create = async (req, res) => {
  let success = false;
  let data;

  try {
    data = await userService.create(req.body);
    success = true;

    res.status(200);
  } catch (error) {
    console.error(error);
    data = error;

    res.status(500).send("Interval Server Error");
  }

  res.send({ success, data });
};

exports.check = async (req, res) => {
  let success = false;
  let data;

  try {
    data = await userService.check(req.body);
    success = true;

    res.status(200);
  } catch (error) {
    console.error(error);
    data = error;

    res.status(500).send("Interval Server Error");
  }

  res.send({ success, data });
};
