'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:UserprofileCtrl
 * @description
 * # UserprofileCtrl
 * Controller of the eventifyApp
 */


angular.module('eventifyApp')
  .controller('UserprofileCtrl', ['$scope', '$rootScope', '$route', 'AuthService','UserService',
    function($scope, $rootScope, $route, AuthService, UserService) {

    $scope.copyUser = angular.copy($scope.currentUser);
    	

 
      $scope.updateProfile = function(){

      	UserService.updateUser.update({}, {
      	id: $scope.copyUser.id,
        firstName: $scope.copyUser.firstName,
        lastName: $scope.copyUser.lastName,
        email: $scope.copyUser.email,
        password: $scope.copyUser.password,
        avatar: $scope.copyUser.avatar
	      }, function (data) {
	        console.log(data);
          AuthService.setUser($scope.copyUser);
          $scope.currentUser = $scope.copyUser;
	        $scope.changeView(3);
          $scope.updateHeader();
          $route.reload();
	      }, function (data) {
	        console.log(data);
	      });

	    };


      }

]);
