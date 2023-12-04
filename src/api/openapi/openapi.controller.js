const { default: axios } = require("axios");
const { SCHOOL_INFO_API } = require("../../serverApi");

exports.openapiRoot = async (req, res) => {
  res.end("openapi success");
};

exports.school = async (req, res) => {
  const { SCHUL_NM } = req.body;

  const response = await axios.get(
    `${SCHOOL_INFO_API}?SCHUL_NM=${SCHUL_NM}&TYPE=json&KEY=${process.env.SCHOOL_API_KEY}`
  );

  if (response.status === 200) {
    const data = response.data.schoolInfo;
    console.log(data);

    res.status(200);
    res.send({ sucess: true, data });
  } else {
    res.status(500).send("Interval Server Error");
  }
};
