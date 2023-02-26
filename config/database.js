const mysql = require("mysql2");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "kitchenara",
});
module.exports = pool.promise();
