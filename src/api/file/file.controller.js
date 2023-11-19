const fileService = require("./file.service");

exports.fileRoot = async (req, res) => {
  res.end("file success");
};