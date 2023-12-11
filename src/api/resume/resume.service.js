const { run } = require("../../util/mySqlUtil");

exports.educationUser = async (userId) => {
  const user_id = userId.replace(":", "");

  const sql = `
    SELECT *
    FROM resume_education
    WHERE user_id = '${user_id}'
    ORDER BY school_from DESC
  `;
  console.log(sql);

  const data = await run(sql);
  return data;
};

exports.educationCreate = async (insertData) => {
  const keys = Object.keys(insertData);

  let columns = "";
  let values = "";

  keys.map((key, idx) => {
    if (idx !== keys.length - 1) {
      columns += `${key}, `;
      values += `'${insertData[key]}', `;
    } else {
      columns += `${key}`;
      values += `'${insertData[key]}'`;
    }
  });

  const sql = `
    INSERT INTO resume_education (
      ${columns}
    ) VALUES (
      ${values}
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

exports.educationDelete = async ({ user_id, school_id }) => {
  const sql = `
    DELETE
    FROM resume_education
    WHERE user_id = '${user_id}' AND school_id = '${school_id}'
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

exports.experienceUser = async (userId) => {
  const user_id = userId.replace(":", "");

  const sql = `
    SELECT *
    FROM resume_experience
    WHERE user_id = '${user_id}'
    ORDER BY experience_from DESC
  `;
  console.log(sql);

  const data = await run(sql);
  return data;
};

exports.experienceCreate = async (insertData) => {
  const keys = Object.keys(insertData);

  let columns = "";
  let values = "";

  keys.map((key, idx) => {
    if (idx !== keys.length - 1) {
      columns += `${key}, `;
      values += `'${insertData[key]}', `;
    } else {
      columns += `${key}`;
      values += `'${insertData[key]}'`;
    }
  });

  const sql = `
    INSERT INTO resume_experience (
      ${columns}
    ) VALUES (
      ${values}
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

exports.experienceDelete = async ({ user_id, experience_id }) => {
  const sql = `
    DELETE
    FROM resume_experience
    WHERE user_id = '${user_id}' AND experience_id = ${experience_id}
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
