var sequelize = require("sequelize");

var dbName = process.env.MYSQL_DATABASE || 'ollink';
var dbUser = process.env.MYSQL_USER || 'root';
//var dbPassword = process.env.MYSQL_PASSWORD || 'root';
var dbPassword = process.env.MYSQL_ROOT_PASSWORD || 'root';
var dbHost = process.env.MYSQL_SERVICE_HOST || process.env.DATABASE_URL || 'localhost';
var dbPort = process.env.MYSQL_SERVICE_PORT || 3306;

/*
module.exports = new sequelize(dbName, dbUser, dbPassword, {
	host: dbHost,
	port: dbPort,
	dialect: "mysql"
});
*/

module.exports = new sequelize( dbHost, {
	host: dbHost,
	dialect: "mysql"
});