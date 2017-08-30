module.exports = function(app, passport) {

	/*
	app.post('/login',
	  	passport.authenticate('local', { successRedirect: '/home', failureRedirect: '/', failureFlash: false })
	);
	*/


	app.post('/login', function(req, res, next) {
		passport.authenticate('local', function(err, user, info) {
			var url = "";
			if (typeof req.body.url !== 'undefined') {
				url = req.body.url;
			}
			if (err) { 
				return next(err); 
			}
			if (!user) {
				if (url != "") {
					return res.redirect('/?url=' + url); 
				} else {
					return res.redirect('/'); 
				}
			}
			req.logIn(user, function(err) {
				if (err) { 
					return next(err); 
				}
				if (url != "") {
					return res.redirect('/new/'+url);
				} else {
					return res.redirect('/home');
				}
			});
		})(req, res, next);
	});
	
}