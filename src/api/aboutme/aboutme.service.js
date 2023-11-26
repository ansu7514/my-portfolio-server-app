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
    const [data] = await run (checkSql);
    return data;
  } else {
    return checkData[0];
  }
};
