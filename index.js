var express = require("express");
var app = express();
//var nodeadmin = require("nodeadmin");
/*var mysql = require("mysql");*/
/*
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'ollink'
});
*/
var passport = require("passport");
var localStrategy = require("passport-local").Strategy;
var session = require('express-session');
var bodyParser = require('body-parser');
var models = require("./models");
var User = models.User;

//app.use(nodeadmin(app));
//app.use(express.cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ 
	secret: 'keyboard cat',
	resave: false,
  	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/public', express.static('public'));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
 	User.findById(id).then(user => {
 		done(null, user);
 	});
});

passport.use(new localStrategy({
		usernameField: 'email',
		passwordField: 'password'
	},
	function(username, password, done) {
		User.findOne({ where: {email: username} }).then(user => {
			if (!user) {
				return done(null, false);
			}
			if (user.password != password) { 
				return done(null, false);
			}
			return done(null, user);
		}).catch(function (err) {
			console.log(err);
		});
	}
));

require("./controllers/index")(app);
require("./controllers/login")(app, passport);
require("./controllers/register")(app, models);
require("./controllers/home")(app, models);
require("./controllers/link")(app, models);

app.listen(8888, function() {
    console.log("Server started port 8888...");
});