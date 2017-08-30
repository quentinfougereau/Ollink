module.exports = function(app, models, hash) {

	var User = models.User;

	app.get('/changePassword', function(req, res) {
		if (req.user) { 
			res.render('change-password.ejs', { user_email: req.user.email });
		}  else {
			res.redirect('/');
		}
	});

	app.post('/changePassword', function(req, res) {
		if (req.user) {
			var password           = req.body.password;
			var newPassword        = req.body.newPassword;
			var confirmNewPassword = req.body.confirmNewPassword;
			var email              = req.user.email;
			User.findOne({ where: { email: email } }).then(user => {
				if (hash.saltHashPassword(email, password) == user.password) {
					if (newPassword == confirmNewPassword) {
						var hashedNewPassword = hash.saltHashPassword(email, newPassword);
						User.update(
							{ password: hashedNewPassword }, 
							{ where: { email: email }
						}).then(user => {
							res.render('change-password.ejs', {
								user_email : email,
								msg        : "Le mot de passe a bien été modifié",
								success    : true
							});
						});
					}
				} else {
					res.render('change-password.ejs', {
						user_email : email,
						msg        : "Vous n'avez pas renseigné le bon mot de passe",
						success    : false
					});
				}
			});
		}
	});

}