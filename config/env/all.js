'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	root: rootPath,
	port: process.env.PORT || 3000,
	db: 'mongodb://localhost/SchoolStudentFeedback',   //This will need to change back to process.env.MONGOHQ_URL if I put this on a server
	templateEngine: 'swig',

	// The secret should be set to a non-guessable string that
	// is used to compute a session hash
	sessionSecret: 'SchoolStudentFeedback',
	// The name of the MongoDB collection to store sessions in
	sessionCollection: 'sessions'
};