const bcrypt = require("bcrypt");
const { run } = require("../../util/mySqlUtil");

const hashedPassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  return await bcrypt.hash(password, salt);
};

exports.create = async (userData) => {
  const { user_id, password } = userData;

  const hashPassword = await hashedPassword(password);

  const sql = `
    INSERT INTO user (
        user_id, password
    ) VALUE (
        '${user_id}', '${hashPassword}'
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

exports.check = async ({ user_id }) => {
  const sql = `
		SELECT COUNT(*) as count
		FROM user
		WHERE user_id = '${user_id}'
	`;
  console.log(sql);

  const [data] = await run(sql);
  const { count } = data;

  return count;
};

exports.login = async ({ user_id, password }) => {
  const sql = `
		SELECT *
		FROM user
		WHERE user_id = '${user_id}'
	`;
  console.log(sql);

  const [data] = await run(sql);
  const loginCheck = bcrypt.compareSync(password, data.password);

  if (loginCheck) return data;
  else throw "Password error";
};

exports.update = async (req) => {
  const { body, file } = req;

  const { user_id, name, email, phone, birth, address } = body;
  const { path } = file;

  const sql = `
		UPDATE user
		SET
      name = '${name}', email = '${email}',
      phone = '${phone}', birth = '${birth}',
      address = '${address}', image_path = '${path}'
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
