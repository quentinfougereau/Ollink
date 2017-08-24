var sequelize = require("sequelize");

var dbHost = process.env.DATABASE_URL || 'localhost';

module.exports = new sequelize( dbHost, {
	host: dbHost,
	dialect: "mysql"
});