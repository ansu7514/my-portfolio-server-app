const blogService = require("./blog.service");

exports.blogRoot = async (req, res) => {
  res.end("blog success");
};

exports.create = async (req, res) => {
  let success = false;
  let data;

  try {
    data = await blogService.create(req);
    success = true;

    res.status(200);
  } catch (error) {
    console.error(error);
    data = error;

    res.status(500).send("Interval Server Error");
  }

  res.send({ success, data });
};
