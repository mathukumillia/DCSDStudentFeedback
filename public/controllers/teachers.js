'use strict';

angular.module('SchoolStudentFeedback').controller('teachers', ['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.displayTeachers = function(){
		$http.get($location.path()).
  		success(function(data, status, headers, config) {
    		$scope.teachers = data;
  		}).
  		error(function(data, status, headers, config) {
    		console.log('There was an error while getting the teachers.');
  		});
	};

}]);