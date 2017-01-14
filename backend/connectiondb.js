var pgp = require("pg-promise")();
var dbConnectionString = process.env.PB;
var db = pgp(dbConnectionString);
module.exports = db;
