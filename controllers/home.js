module.exports = function(app, models) {

	Link = models.Link;

	app.get('/home', function(req, res) {
		if (req.user) {
			Link.findAll().then(links => {
				res.render('home.ejs', { links: links });
			});
		} else {
			res.redirect('/');
		}	
	});
	
}