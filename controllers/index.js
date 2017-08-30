module.exports = function(app) {

	app.get('/', function(req, res) {
		if (typeof req.query.url !== 'undefined' && req.query.url != "") {
			var url = req.query.url;
			res.render('index.ejs', { url: url });
		} else {
			res.render('index.ejs');
		}
	});
	
}