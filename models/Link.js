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