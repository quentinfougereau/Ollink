var express = require("express");
var app = express();
var passport = require("passport");
var localStrategy = require("passport-local").Strategy;
var session = require('express-session');
var bodyParser = require('body-parser');
var models = require("./models");
var User = models.User;
var hash = require("./utils/hash.js");

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
			if (hash.saltHashPassword(username, password) != user.password) {
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
require("./controllers/logout")(app);
require("./controllers/register")(app, models, hash);
require("./controllers/home")(app, models);
require("./controllers/link")(app, models);
require("./controllers/category")(app, models);

var serverPort = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var serverIpAddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
console.log(process.env);

app.listen(serverPort, function() {
    console.log("Server started on port " + serverPort);
});
