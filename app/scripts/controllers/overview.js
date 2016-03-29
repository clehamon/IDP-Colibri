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
 			angular.forEach(data, function(event) {
 				if (event.coverPicture) {
 					event.bgStyle = "background: linear-gradient( rgba(0, 0, 0,0.5), rgba(0, 0, 0,0.5) ), url('"+event.coverPicture+"') no-repeat center center;";
 				}
 			});
 			$scope.events = data;

 		}, function (data) {
 			console.log(data);
 		});
 	};

});
