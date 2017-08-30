module.exports = function(app, models) {

	User = models.User;

	app.get('/home', function(req, res) {
		if (req.user) {
			var categories;
			var links;
			var unsorted_links;
			req.user.getCategories().then(user_categories => {
				categories = user_categories;
				req.user.getLinks({
					where: {
						category_id: {
							$ne: null, // != NULL
						}
					}
				}).then(user_links => {
					links = user_links;
					req.user.getLinks({
						where: {
							category_id: {
								$eq: null, // != NULL
							}
						}
					}).then(unsorted_user_links => {
						unsorted_links = unsorted_user_links;
						res.render('home.ejs', { 
							categories: categories, 
							links: links, 
							unsorted_links: unsorted_links,
							user_email: req.user.email
						});
					});
				});
			});
		} else {
			res.redirect('/');
		}	
	});
	
}