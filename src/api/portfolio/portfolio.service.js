const { run } = require("../../util/mySqlUtil");

exports.user = async (userId) => {
  const user_id = userId.replace(":", "");

  const sql = `
      SELECT *
      FROM portfolio
      WHERE user_id = '${user_id}'
    `;
  console.log(sql);

  const data = await run(sql);
  return data;
};

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

exports.update = async (req) => {
  const { body, file } = req;

  const { user_id, portfolio_id, title, content } = body;

  let value = "";
  if (file) {
    const { originalname, path } = file;
    value = `, image = '${originalname}', image_path = '${path}'`;
  }

  const sql = `
    UPDATE portfolio
    SET
      title = '${title}', content = '${content}'
      ${value}
    WHERE
    	user_id = '${user_id}' AND portfolio_id = ${portfolio_id}
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
