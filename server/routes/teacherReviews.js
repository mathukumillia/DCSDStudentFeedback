'use strict';

var reviews = require('../controllers/teacherReviews');

module.exports = function(app){
	app.get('/:schoolname/:department/:teachername', reviews.loadReviews);
};