'use strict';

//Setting up route
angular.module('SchoolStudentFeedback').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/index.html'
      })
      .state('school menu', {
        url: '/menu',
        templateUrl: 'views/menu.html'
      })
      .state('departments', {
        url: '/:schoolName',
        templateUrl: 'views/departments.html'
      })
      .state('teachers in a department', {
        url: '/:schoolName/:department',
        templateUrl: 'views/teachers.html'
      })
      .state('teacher reviews', {
        url: '/:schoolName/:department/:teacherName',
        templateUrl: 'views/teacherReviews.html'
      })
      .state('submit new review', {
        url: '/:schoolName/:department/:teacherName/writeReview',
        templateUrl: 'views/submitReview.html'
      })
  }
]);

//Setting HTML5 Location Mode
angular.module('SchoolStudentFeedback').config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
}
]);