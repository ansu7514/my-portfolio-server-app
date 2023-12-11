const resumeService = require("./resume.service");

exports.resumeRoot = async (req, res) => {
  res.end("resume success");
};

exports.educationUser = async (req, res) => {
  let success = false;
  let data;

  try {
    data = await resumeService.educationUser(req.params.userId);
    success = true;

    res.status(200);
  } catch (error) {
    console.error(error);
    data = error;

    res.status(500).send("Interval Server Error");
  }

  res.send({ success, data });
};

exports.educationCreate = async (req, res) => {
  let success = false;
  let data;

  try {
    data = await resumeService.educationCreate(req.body);
    success = true;

    res.status(200);
  } catch (error) {
    console.error(error);
    data = error;

    res.status(500).send("Interval Server Error");
  }

  res.send({ success, data });
};

exports.experienceUser = async (req, res) => {
  let success = false;
  let data;

  try {
    data = await resumeService.experienceUser(req.params.userId);
    success = true;

    res.status(200);
  } catch (error) {
    console.error(error);
    data = error;

    res.status(500).send("Interval Server Error");
  }

  res.send({ success, data });
};

exports.experienceCreate = async (req, res) => {
  let success = false;
  let data;

  try {
    data = await resumeService.experienceCreate(req.body);
    success = true;

    res.status(200);
  } catch (error) {
    console.error(error);
    data = error;

    res.status(500).send("Interval Server Error");
  }

  res.send({ success, data });
};