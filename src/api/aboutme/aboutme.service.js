const { run } = require("../../util/mySqlUtil");

exports.user = async (userId) => {
  const user_id = userId.replace(":", "");

  const checkSql = `
      SELECT *
      FROM about_me
      WHERE user_id = '${user_id}'
    `;
  console.log(checkSql);

  const checkData = await run(checkSql);

  if (checkData.length == 0) {
    const insertSql = `
      INSERT INTO
        about_me (user_id)
      VALUE ('${user_id}')
    `;
    console.log(insertSql);

    await run(insertSql);

    const [data] = await run(checkSql);
    return data;
  } else {
    return checkData[0];
  }
};

exports.update = async (updateData) => {
  const keys = Object.keys(updateData);
  const user_id = updateData.user_id;

  const value = keys.map((key) => {
    return `${key} = '${updateData[key]}'`;
  });

  const sql = `
    UPDATE about_me
    SET
      ${value}
    WHERE user_id = '${user_id}'
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
