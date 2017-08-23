'use strict';
var crypto = require('crypto');

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var sha512 = function(password, salt) {
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};

module.exports = {
    saltHashPassword : function (userlogin, userpassword) {
        var salt = userlogin;
        var passwordData = sha512(userpassword, salt);
        return passwordData.passwordHash;
    }
}