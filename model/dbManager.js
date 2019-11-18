const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog"
  });
  
  db.connect(err => {
    if (err) {
      throw err;
      console.log("Connection error => ", err);
    }
    console.log("Mysql server connected...");
  });

  module.exports = db;