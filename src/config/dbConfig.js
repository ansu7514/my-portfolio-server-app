const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const dbConfig = {
  host: process.env.SQL_DOMAIN,
  user: process.env.SQL_USER,
  password: process.env.SQL_PW,
  database: "portfolio",
};

module.exports = {
  init: () => {
    return mysql.createConnection(dbConfig);
  },
  connect: (conn) => {
    conn.connect((err) => {
      if (err) console.error("mysql start fail: " + err);
      else console.log(`mysql start success: ${dbConfig.database}`);
    });
  },
};
