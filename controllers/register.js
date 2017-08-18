module.exports = function(app, models) {

	var User = models.User;

	app.post('/register', function(req, res) {
	  	var email = req.body.email;
	  	var password = req.body.password;
	  	User.findOne({ where: {email: email} }).then(user => {
	  		if (!user) {
	  			User.create({ email: email, password: password }).then(user => {
	  				console.log("User : "+user.email+" successfully created");
	  				req.login(user, function(err) {
	  					if (err) { 
	  						return next(err); 
	  					}
	  					res.redirect('/home');
	  				});
	  			});
	  		} else {
	  			console.log("This email already exists");
	  		}
	  	});
	});
	
}