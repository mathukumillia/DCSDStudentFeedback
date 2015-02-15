var express = require('express'),
	http = require('http'),
	config = require('./config/config'),
    mongoose = require('mongoose'),
    fs = require('fs');

var db = mongoose.connect(config.db);
mongoose.connection.on('open', function(ref){
    console.log('Connected to Mongo server.');
});

// Bootstrap models
var models_path = __dirname + '/server/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

var app = express();
var server = http.Server(app);
var port = config.port;

// Express settings
require('./config/express')(app, db);

// Bootstrap routes
var routes_path = __dirname + '/server/routes';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath)(app);
            }
        // We skip the app/routes/middlewares directory as it is meant to be
        // used and shared by routes as further middlewares and is not a 
        // route by itself
        } else if (stat.isDirectory() && file !== 'middlewares') {
            walk(newPath);
        }
    });
};
walk(routes_path);

server.listen(port, function(){
	console.log('Server listening on port ' + port);
});

exports = module.exports = app;	