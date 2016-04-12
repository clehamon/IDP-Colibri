'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:UserprofileCtrl
 * @description
 * # UserprofileCtrl
 * Controller of the eventifyApp
 */


angular.module('eventifyApp')
  .controller('UserprofileCtrl', ['$scope', '$rootScope','AuthService',
    function($scope, $rootScope, AuthService) {

 

      if (AuthService.isLoggedIn()) {
        $scope.currentUser = AuthService.currentUser();
      }

      $scope.updateProfile = function(){

      	AuthService.updateUser.update({}, {
        firstName: $scope.currentUser.firstName,
        lastName: $scope.currentUser.lastName,
        email: $scope.currentUser.email,
        password: $scope.currentUser.password,
        avatar: $scope.currentUser.avatar
	      }, function (data) {
	        console.log(data);
	      }, function (data) {
	        console.log(data);
	      });
	    };
      }

]);
