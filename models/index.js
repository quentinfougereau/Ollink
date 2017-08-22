var sequelize = require("./sequelize");
var User = require("./User");
var Link = require("./Link");
var Category = require("./Category");

User.hasMany(Link);
User.hasMany(Category);
Category.hasMany(Link, { onDelete: 'SET NULL' });

sequelize.sync();

module.exports = {
    "sequelize" : sequelize,
    "User"      : User,
    "Link"      : Link,
    "Category"  : Category
};