'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TeacherSchema = new Schema({
	school: {
		type: String,
		default: ''
	},
	department: {
		type: String,
		default: ''
	},
	name: {
		type: String,
		default: ''
	}
});

mongoose.model('Teacher', TeacherSchema);