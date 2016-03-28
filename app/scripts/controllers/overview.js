'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the eventifyApp
 */
 angular.module('eventifyApp')
 .controller('OverviewCtrl', function ($scope, UserService) {


 	$scope.getEvents = function(){
 		UserService.UserEvents.query({
 			id: 2039
 		}, function (data) {
 			console.log(data);
 			$scope.events = data;

 		}, function (data) {
 			console.log(data);
 		});
 	};

});
