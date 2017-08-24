var sequelize = require("sequelize");

var dbName = process.env.MYSQL_DATABASE || 'ollink';
var dbUser = process.env.MYSQL_USER || 'root';
//var dbPassword = process.env.MYSQL_PASSWORD || 'root';
var dbPassword = process.env.MYSQL_ROOT_PASSWORD || 'root';
//var dbHost = process.env.MYSQL_SERVICE_HOST || '127.0.0.1';
var dbHost = '127.0.0.1';
var dbPort = process.env.MYSQL_PORT || 3306;

module.exports = new sequelize(dbName, dbUser, dbPassword, {
	host: dbHost,
	port: dbPort,
	dialect: "mysql"
});
