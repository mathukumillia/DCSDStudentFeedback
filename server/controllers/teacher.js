'use strict';

var mongoose = require('mongoose'),
	Teacher = mongoose.model('Teacher');

exports.loadTeachers = function(req,res){
	var schoolName = req.params.schoolname,
        department = req.params.department;
    Teacher.find({
    	school: schoolName,
    	department: department
    }).exec(function(err, teachers) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(teachers);
        }
    });
};