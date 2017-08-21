module.exports = function(app, models) {

	//Link = models.Link;
	User = models.User;

	app.get('/home', function(req, res) {
		if (req.user) {
			var categories;
			var links;
			req.user.getCategories().then(user_categories => {
				categories = user_categories;
				req.user.getLinks().then(user_links => {
					links = user_links;
					res.render('home.ejs', { categories: categories, links: links });
				});
			});
		} else {
			res.redirect('/');
		}	
	});
	
}