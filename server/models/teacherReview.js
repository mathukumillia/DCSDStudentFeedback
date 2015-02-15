'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TeacherReviewSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	school: {
		type: String,
		default: ''
	},
	department: {
		type: String,
		default: ''
	},
	teacherName: {
		type: String,
		default: ''
	},
	content: {
		type: String,
		default: ''
	},
	rating: {
		type: Number,
		default: ''
	}
});

TeacherReviewSchema.path('content').validate(function(content){
	return content.length;
}, 'This review cannot be left blank.');

TeacherReviewSchema.path('rating').validate(function(rating){
	return rating;
}, 'The rating cannot be left blank.');

mongoose.model('TeacherReview', TeacherReviewSchema);