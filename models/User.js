var sequelize = require("./sequelize");

module.exports = sequelize.import("User", function(sequelize, Datatypes) {
    return sequelize.define("User", 
    	{
	        id: {
	            type: Datatypes.BIGINT,
	            primaryKey: true,
	            autoIncrement: true
	        },
	        email: {
	            type: Datatypes.STRING,
	            validate: {
	            	notEmpty: true,
	            	isEmail: true
	            }
	        },
	        password: {
	            type: Datatypes.STRING,
	            validate: {
	            	notEmpty: true,
	            	len: [8, 50]
	            }
	        }
	    }, 
	    {
	        paranoid: true,
	        freezeTableName: true,
	        underscored: true
    	}
    );
});