module.exports = function(app, models) {

	var Link = models.Link;

	app.post('/link', function(req, res) {
		var link = req.body.link;
		if (req.body.link_category_id == "") {
			Link.create({ url: link,  user_id: req.user.id }).then(link => {
				res.redirect('/home');
			}).catch(err => {
				res.redirect('/home');
			});
		} else {
			var category_id = req.body.link_category_id;
			Link.create({ url: link,  user_id: req.user.id, category_id: category_id }).then(link => {
				res.redirect('/home');
			}).catch(err => {
				res.redirect('/home');
			});
		}
	});

	app.delete('/link/:id', function(req, res) {
		var link_id = req.body.id;
		Link.findById(link_id).then(link => {
			link.destroy()
			res.end('{ "msg" : "Suppression effectuée", "status" : 200 }');
		});
	});

	app.post('/changeCategory', function(req, res) {
		var category_id = req.body.category;
		var link_id     = req.body.link_id;
		if (category_id == -1) {
			Link.update(
				{ category_id: null },
				{ where: { id: link_id } }
			).then(link => {
				res.redirect('/home');
			});
		} else {
			Link.update(
				{ category_id: category_id },
				{ where: { id: link_id } }
			).then(link => {
				res.redirect('/home');
			});
		}
	});
	
}