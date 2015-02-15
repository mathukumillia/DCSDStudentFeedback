'use strict';

angular.module('SchoolStudentFeedback').config(['$locationProvider', function($locationProvider){
	$locationProvider.hashPrefix('!');
}]);

angular.module('SchoolStudentFeedback').controller('departments', ['$scope', '$location', function($scope, $location){
	$scope.departmentNames = [{title: 'Math', url: '/#!' + $location.path() + '/math'},
							  {title: 'Science', url: '/#!' + $location.path() + '/science'},
							  {title: 'English', url: '/#!' + $location.path() + '/english'},
							  {title: 'Social Studies', url: '/#!' + $location.path() + '/socialstudies'},
							  {title: 'Business and Tech', url: '/#!' + $location.path() + '/businesstech'},
							  {title: 'Consumer Science', url: '/#!' + $location.path() + '/consumerscience'},
							  {title: 'Foreign Language', url: '/#!' + $location.path() + '/foreignlanguage'},
							  {title: 'Art', url: '/#!' + $location.path() + '/art'},
							  {title: 'Music', url: '/#!' + $location.path() + '/music'},
							  {title: 'Theater', url: '/#!' + $location.path() + '/theater'},
							  {title: 'PE', url: '/#!' + $location.path() + '/pe'}];
}]);