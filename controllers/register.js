module.exports = function(app, models, hash) {

	var User = models.User;

	app.post('/register', function(req, res) {
	  	var email = req.body.email;
	  	var password = req.body.password;
	  	var confirmPassword = req.body.confirmPassword;
	  	User.findOne({ where: {email: email} }).then(user => {
	  		if (!user && password == confirmPassword) {
	  			hashedPassword = hash.saltHashPassword(email, password);
	  			User.create({ email: email, password: hashedPassword }).then(user => {
	  				console.log("User : "+user.email+" successfully created");
	  				req.login(user, function(err) {
	  					if (err) { 
	  						return next(err); 
	  					}
	  					res.redirect('/home');
	  				});
	  			}).catch(err => {
	  				res.redirect('/');
	  			});
	  		} else {
	  			console.log("This email already exists");
	  		}
	  	});
	});
	
}