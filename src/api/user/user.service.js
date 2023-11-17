const bcrypt = require("bcrypt");
const { run } = require("../../util/mySqlUtil");

const hashedPassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  return await bcrypt.hash(password, salt);
};

exports.create = async (userData) => {
  const { id, pw } = userData;

  const password = await hashedPassword(pw);

  const sql = `
    INSERT INTO user (
        user_id, password
    ) VALUE (
        '${id}', '${password}'
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

exports.check = async ({ id }) => {
  const sql = `
		SELECT COUNT(*) as count
		FROM user
		WHERE user_id = '${id}'
	`;
  console.log(sql);

  const [data] = await run(sql);
  const { count } = data;

  return count;
};
