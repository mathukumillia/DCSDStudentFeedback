'use strict';

var express = require('express'),
	cookieParser = require('cookie-parser'),
    consolidate = require('consolidate'),
	expressValidator = require('express-validator'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
    session = require('express-session'),
    mongoStore = require('connect-mongo')(session),
	assetmanager = require('assetmanager'),
    swig = require('swig'),
	config = require('./config'),
    favicon = require('serve-favicon');

module.exports = function(app,db){
	app.set('showStackError', true);

        // The cookieParser should be above session
        app.use(cookieParser());

        // Request body parsing middleware should be above methodOverride
        app.use(expressValidator());
        app.use(bodyParser.urlencoded({
        	extended: true
        }));
        app.use(bodyParser.json());
        app.use(favicon(config.root + '/public/assets/images/favicon.png'));

        // Import your asset file
        var assets = assetmanager.process({
            assets: require('./assets.json'),
            debug: (process.env.NODE_ENV !== 'production'),
            webroot: 'public'
        });

        app.use(session({
            secret: config.sessionSecret,
            resave: true,
            saveUninitialized: true,
            store: new mongoStore({
                db: db.connection.db,
                collection: config.sessionCollection
            })
        }));


        app.engine('html', swig.renderFile);
        app.set('view engine', 'html');
        app.set('views', config.root + '/server/views');

        
        // Setting static folder
        app.use(express.static(config.root + '/public'));
};