'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventifyApp
 */
var mymodal = angular.module('eventifyApp');

	mymodal.controller('LoginCtrl', function ($scope,  $auth, $rootScope, $location, AuthService) {

    $scope.authenticate = function(provider) {
    	$auth.authenticate(provider);
    };

    $scope.loginMail = function () {
    	var user = {
			email: $scope.email,
			password: $scope.password
		};

		AuthService.login(user);

        if (!AuthService.isLoggedIn()) {
            $scope.loginError = AuthService.lastError();
        } else {
            $scope.loginError = '';
        }
    };


  });

