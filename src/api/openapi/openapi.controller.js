const { default: axios } = require("axios");
const { SCHOOL_INFO_API } = require("../../serverApi");

exports.openapiRoot = async (req, res) => {
  res.end("openapi success");
};

exports.school = async (req, res) => {
  const { gubun, searchSchulNm } = req.body;

  const response = await axios.get(
    `${SCHOOL_INFO_API}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=${gubun}&searchSchulNm=${searchSchulNm}`
  );

  if (response.status === 200) {
    const data = response.data.dataSearch.content;
    console.log(data);

    res.status(200);
    res.send({ sucess: true, data });
  } else {
    res.status(500).send("Interval Server Error");
  }
};
