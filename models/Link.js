var sequelize = require("./sequelize");

module.exports = sequelize.import("Link", function(sequelize, Datatypes) {
    return sequelize.define("Link", 
    	{
	        id: {
	            type: Datatypes.BIGINT,
	            primaryKey: true,
	            autoIncrement: true
	        },
	        url: {
	            type: Datatypes.STRING,
	            validate: {
	            	notEmpty: true,
	            	isUrl: true
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