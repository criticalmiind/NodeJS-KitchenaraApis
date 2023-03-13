const mysql = require("mysql2");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  database: "kitchenara",

  user: "phpmyadmin",
  password: "12345678",

  // user: "root",
  // password: "",

});
module.exports = pool.promise();
