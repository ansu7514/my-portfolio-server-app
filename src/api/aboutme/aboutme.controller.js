const aboutmeService = require("./aboutme.service");

exports.aboutmeRoot = async (req, res) => {
  res.end("aboutme success");
};

exports.user = async (req, res) => {
  let success = false;
  let data;

  try {
    data = await aboutmeService.user(req.params.userId);
    success = true;

    res.status(200);
  } catch (error) {
    console.error(error);
    data = error;

    res.status(500).send("Interval Server Error");
  }

  res.send({ success, data });
};
