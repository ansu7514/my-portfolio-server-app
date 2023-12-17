const portfolioService = require("./portfolio.service.js");

exports.portfolioRoot = async (req, res) => {
  res.end("portfolio success");
};

exports.user = async (req, res) => {
  let success = false;
  let data;

  try {
    data = await portfolioService.user(req.params.userId);
    success = true;

    res.status(200);
  } catch (error) {
    console.error(error);
    data = error;

    res.status(500).send("Interval Server Error");
  }

  res.send({ success, data });
};

exports.create = async (req, res) => {
  let success = false;
  let data;

  try {
    data = await portfolioService.create(req);
    success = true;

    res.status(200);
  } catch (error) {
    console.error(error);
    data = error;

    res.status(500).send("Interval Server Error");
  }

  res.send({ success, data });
};

exports.update = async (req, res) => {
  let success = false;
  let data;

  try {
    data = await portfolioService.update(req);
    success = true;

    res.status(200);
  } catch (error) {
    console.error(error);
    data = error;

    res.status(500).send("Interval Server Error");
  }

  res.send({ success, data });
};

exports.delete = async (req, res) => {
  let success = false;
  let data;

  try {
    data = await portfolioService.delete(req.body);
    success = true;

    res.status(200);
  } catch (error) {
    console.error(error);
    data = error;

    res.status(500).send("Interval Server Error");
  }

  res.send({ success, data });
};
