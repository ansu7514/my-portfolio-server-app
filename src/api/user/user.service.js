const bcrypt = require("bcrypt");
const { run } = require("../../util/mySqlUtil");

const hashedPassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  return await bcrypt.hash(password, salt);
};

exports.user = async (userId) => {
  const user_id = userId.replace(":", "");

  const sql = `
    SELECT
      name, email, phone, birth,
      address, job, image, image_path
    FROM user
    WHERE user_id = '${user_id}'
  `;
  console.log(sql);

  const [data] = await run(sql);
  return data;
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

  const { user_id, name, email, phone, job, birth, address } = body;

  let value = "";
  if (file) {
    const { originalname, path } = file;
    value = `, image = '${originalname}', image_path = '${path}'`;
  }

  const sql = `
		UPDATE user
		SET
      name = '${name}', email = '${email}',
      phone = '${phone}', job = '${job}',
      birth = '${birth}', address = '${address}'
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
