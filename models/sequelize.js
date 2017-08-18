var sequelize = require("sequelize");

module.exports = new sequelize("ollink", "root", "root", {
	host: "localhost",
	port: 3306,
	dialect: "mysql"
});