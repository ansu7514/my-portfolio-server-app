exports.fileRoot = async (req, res) => {
  res.end("file success");
};

exports.load = async (req, res) => {
  const filePath = decodeURIComponent(req.params.filepath);

  console.log("load file :", filePath);

  res.download(filePath);
};
