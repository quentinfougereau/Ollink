var sequelize = require("./sequelize");

module.exports = sequelize.import("Category", function(sequelize, Datatypes) {
    return sequelize.define("Category", 
    	{
	        id: {
	            type: Datatypes.BIGINT,
	            primaryKey: true,
	            autoIncrement: true
	        },
	        name: {
	            type: Datatypes.STRING,
	            validate: {
	            	notEmpty: true
	            }
	        }
	    }, 
	    {
	        paranoid: false,
	        freezeTableName: true,
	        underscored: true
    	}
    );
});