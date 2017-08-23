module.exports = function(app, models) {

	var Category = models.Category;

	app.post('/category', function(req, res) {
		if (req.user) {
			var category = req.body.category;
			Category.create({ name: category, user_id: req.user.id }).then(category => {
				res.redirect('/home');
			}).catch(err => {
				res.redirect('/home');
			});
		}
	});

	app.delete('/category/:id', function(req, res) {
		if (req.user) {
			var category_id = req.body.id;
			Category.findById(category_id).then(category => {
				category.destroy()
				res.end('{ "msg" : "Suppression effectuée", "status" : 200 }');
			});
		}
	});
	
}