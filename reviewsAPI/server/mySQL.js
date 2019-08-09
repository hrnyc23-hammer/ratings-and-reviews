const mysql = require("mysql");
const mysqlConfig = require("../config.js");

// const connection = mysql.createConnection({
//   host: process.env.DATABASE_HOST,
//   port: process.env.MYSQL_PORT,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE
// });

// connection.connect(err => {
//   if (err) console.log("fail to connect: ", process.env.MYSQL_DATABASE);
//   else {
//     console.log("succuss connect to database: ", process.env.MYSQL_DATABASE);
//   }
// });

const connection = mysql.createConnection(mysqlConfig);
let mysql_info = `${mysqlConfig.database}, ${mysqlConfig.port}, ${
  mysqlConfig.user
}`;

connection.connect(err => {
  if (err) console.log("fail to connect: ", mysql_info);
  else {
    console.log("succuss connect to database: ", mysql_info);
  }
});

module.exports = connection;
