'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventifyApp
 */
var mymodal = angular.module('eventifyApp');

	mymodal.controller('LoginCtrl', function ($scope, $location, AuthService) {

    $scope.loginMail = function () {
    	var user = {
			email: $scope.email,
			password: $scope.password
		};

		AuthService.login(user, loginCallback);

       
    };


    var loginCallback = function () {
         if (!AuthService.isLoggedIn()) {
            $scope.loginError = AuthService.lastError();
        } else {
            $scope.loginError = '';
            $location.path( '/overview' );
        }
    };


  });

