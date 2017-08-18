module.exports = function(app, models) {

	Link = models.Link;
	User = models.User;

	app.get('/home', function(req, res) {
		if (req.user) {
			var links = req.user.getLinks().then(links => {
				res.render('home.ejs', { links: links });
			});
		} else {
			res.redirect('/');
		}	
	});
	
}