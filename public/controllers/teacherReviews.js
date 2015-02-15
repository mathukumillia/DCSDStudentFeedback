'use strict';

angular.module('SchoolStudentFeedback').controller('teacherReviews', ['$scope', '$http', '$location', '$stateParams', function($scope, $http, $location, $stateParams){
	$scope.teacher = $stateParams.teacherName;
  $scope.school = $stateParams.schoolName;
  $scope.department = $stateParams.department;
  $scope.displayReviews = function(){
		$http.get($location.path()).
  		success(function(data, status, headers, config) {
    		$scope.reviews = data;
  		}).
  		error(function(data, status, headers, config) {
    		console.log('There was an error while getting the reviews.');
  		});
	};	
}]);

