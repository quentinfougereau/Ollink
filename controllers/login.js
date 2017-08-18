module.exports = function(app, passport) {

	app.post('/login',
	  	passport.authenticate('local', { successRedirect: '/home', failureRedirect: '/', failureFlash: false })
	);
	
}