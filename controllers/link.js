module.exports = function(app, models) {

	var Link = models.Link;

	app.get('/new/*', function(req, res) {
		var url = req.params[0];
		if (req.user) {
			console.log("URL: " + url );
			Link.create({ url: url,  user_id: req.user.id }).then(link => {
				res.redirect('/home');
			}).catch(err => {
				console.log("ERROR: " + err );
				res.redirect('/home');
			});
		} else {
			res.redirect('/?url='+url);
		}
	});

	app.post('/link', function(req, res) {
		if (req.user) {
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
		}
	});

	app.delete('/link/:id', function(req, res) {
		if (req.user) {
			var link_id = req.body.id;
			Link.findById(link_id).then(link => {
				link.destroy()
				res.end('{ "msg" : "Suppression effectuée", "status" : 200 }');
			});
		}
	});

	app.post('/changeCategory', function(req, res) {
		if (req.user) {
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
		}
	});
	
}