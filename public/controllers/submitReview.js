'use strict';

angular.module('SchoolStudentFeedback').controller('submitReview', ['$scope', '$location', '$stateParams', function($scope,$location, $stateParams){
	$scope.teacher = $stateParams.teacherName;
	$scope.school = $stateParams.schoolName;
	$scope.department = $stateParams.department;
}]);