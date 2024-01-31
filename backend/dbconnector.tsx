const mysql = require("mysql")
require("dotenv").config()
// const mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    // password: "lllllllllllllllll",
    port: 3306,
    database: "NuTag"
})


con.connect(function(err) {
    if (err) console.error(err)
    else
        console.log("Connected!");
});
