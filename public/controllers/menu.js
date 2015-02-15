'use strict';

angular.module('SchoolStudentFeedback').controller('menu', ['$scope', function($scope){
		$scope.navElements = [{title: 'Castle View', url: '/#!/castleview'},
								{title: 'Chaparral', url: '/#!/chaparral'},
								{title: 'Douglas County', url: '/#!/douglascounty'},
								{title: 'Eagle Academy', url: '/#!/eagleacademy'},
								{title: 'Highlands Ranch', url: '/#!/highlandsranch'},
								{title: 'Legend', url: '/#!/legend'},
								{title: 'Mountain Vista', url: '/#!/mountainvista'}, 
								{title: 'Plum Creek', url: '/#!/plumcreek'},
								{title: 'Ponderosa', url: '/#!/ponderosa'},
								{title: 'Rock Canyon', url: '/#!/rockcanyon'},
								{title: 'Skyview Academy', url: '/#!/skyview'},
								{title: 'STEM', url: '/#!/stem'},
								{title: 'Thunder Ridge', url: '/#!/thunderridge'}];
	}]);