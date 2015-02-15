'use strict';

var teachers = require('../controllers/teacher');

module.exports = function(app){
	app.get('/:schoolname/:department', teachers.loadTeachers);
};