module.exports = function(app, models) {

	var Link = models.Link;

	app.post('/link', function(req, res) {
		var link = req.body.link;
		Link.create({ url: link, user_id: req.user.id }).then(link => {
			res.redirect('/home');
		});
	});

	app.delete('/link/:id', function(req, res) {
		var link_id = req.body.id;
		Link.findById(link_id).then(link => {
			link.destroy()
			res.end('{ "msg" : "Suppression effectuée", "status" : 200 }');
		});
	});
	
}