var sequelize = require("./sequelize");
var User = require("./User");
var Link = require("./Link");

User.hasMany(Link);

sequelize.sync();

module.exports = {
    "sequelize" : sequelize,
    "User"      : User,
    "Link"      : Link
};