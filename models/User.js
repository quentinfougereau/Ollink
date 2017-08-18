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
	            type: Datatypes.STRING
	        },
	        password: {
	            type: Datatypes.STRING
	        }
	    }, 
	    {
	        paranoid: true,
	        freezeTableName: true,
	        underscored: true
    	}
    );
});