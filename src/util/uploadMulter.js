const fs = require("fs");
const path = require("path");
const multer = require("multer");

require("dotenv").config();

const UPLOAD_PATH_TYPE = process.env.UPLOAD_PATH_TYPE;
const UPLOAD_PATH = {
  PROD: "/upload",
  LOCAL: path.join(path.resolve(), "../upload"),
};
const FILE_DEFAULT_PATH = UPLOAD_PATH[UPLOAD_PATH_TYPE] || UPLOAD_PATH.PROD;

console.log(`upload dist: ${FILE_DEFAULT_PATH}\t(${UPLOAD_PATH_TYPE})`);

const makeDirectory = async (path) => {
  let dirPath = FILE_DEFAULT_PATH;
  const dirArr = path.split("/");

  dirArr.forEach((dir) => {
    dirPath += "/" + dir;
    !fs.existsSync(dirPath) && fs.mkdirSync(dirPath);
  });

  console.log(dirPath);
  return dirPath;
};

const uploadMulter = multer({
  storage: multer.diskStorage({
    destination: async (req, file, callback) => {
      const dirPath = await makeDirectory("/" + new Date().toISOString().split("T")[0].replace(/-/g, ""));
      console.log(`file upload to : ${dirPath}`);

      callback(null, dirPath);
    },
    filename: (req, file, callback) => {
      const originalname = decodeURIComponent(file.originalname);
      const ext = path.extname(originalname);
      const basename = path.basename(originalname, ext);

      callback(null, `${basename}${ext}`);
    }
  }),
});

exports.uploadController = (req, res, next) => {
  try {
    const upload = uploadMulter.single("input_file");

    upload(req, res, (err) => {
      if (err) {
        console.error("UPLOAD ERROR:", err);
        res.status(500).send(err.message);
      } else {
        console.log("UPLOAD COMPLETE!");
        console.log(req.body);
        console.log(req.file);
        next();
      }
    });
  } catch (e) {
    console.error("Unexpected error:", e);
    res.status(500).send("Internal Server Error");
  }
};
