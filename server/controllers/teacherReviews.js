'use strict';

var mongoose = require('mongoose'),
	TeacherReview = mongoose.model('TeacherReview');

exports.loadReviews = function(req, res) {
    var schoolName = req.params.schoolname,
        teacherName = req.params.teachername;
    teacherName = teacherName.replace('%20', ' ');
    TeacherReview.find({
    	school: schoolName,
    	teacherName: teacherName
    }).exec(function(err, reviews) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(reviews);
        }
    });
};

exports.createReview = function(req, res){
    var review = new TeacherReview(req.body);
    review.save(function(err){
        if(err){
            return res.send('/');
        }else{
            return res.redirect('/#!/' + req.body.school + '/' + req.body.department + '/' + req.body.teacherName)
        }
    });
};