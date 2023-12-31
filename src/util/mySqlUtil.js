const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const sqlConf = {
  host: process.env.SQL_DOMAIN,
  user: process.env.SQL_USER,
  password: process.env.SQL_PW,
  database: "portfolio",
};

let client;
const mySqlConnect = () => {
  client = new mysql.createConnection(sqlConf);

  client.connect(async (err) => {
    if (err) {
        console.error(err);
        console.log("mySql connect fail!");

      console.log("mySql reconnect...");
      setTimeout(mySqlConnect, 3000);
    } else {
      console.log("mySql connected!");
    }
  });
};

const run = (sql) => {
  return new Promise((resolve, reject) => {
    client.query(sql, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        const jsonData = JSON.parse(JSON.stringify(rows));
        resolve(jsonData);
      }
    });
  });
};

exports.client = client;
exports.mySqlConnect = mySqlConnect;
exports.run = run;
