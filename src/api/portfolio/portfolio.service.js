const { run } = require("../../util/mySqlUtil");

exports.create = async (req) => {
  const { body, file } = req;

  const { user_id, title, content } = body;

  let column = "";
  let value = "";
  if (file) {
    const { originalname, path } = file;

    column = `, image, image_path`;
    value = `, '${originalname}', '${path}'`;
  }

  const sql = `
    INSERT INTO portfolio (
        user_id, title, content
        ${column}
    ) VALUE (
        '${user_id}', '${title}', '${content}'
        ${value}
    )
  `;
  console.log(sql);

  try {
    await run(sql);
    return true;
  } catch (e) {
    console.error(e);
    return e;
  }
};
