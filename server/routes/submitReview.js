'use strict';

var reviews = require('../controllers/teacherReviews');

module.exports = function(app){
	app.post('/addReview', reviews.createReview)
}