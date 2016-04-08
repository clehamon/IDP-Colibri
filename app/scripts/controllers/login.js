'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventifyApp
 */
var mymodal = angular.module('eventifyApp');

	mymodal.controller('LoginCtrl', function ($scope,  $auth, $rootScope, $location) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

    $scope.loginMail = function () {
    	var user = {
			email: $scope.email,
			password: $scope.password
		};

		var	httpConfig = {
			url: 'http://clementhamon.com/IDP/public/auth/login'
		};

		$auth.login(user, httpConfig)
		.then(function(response) {
		    // Redirect user here after a successful log in.
		    console.log(response);
		    $rootScope.user = response.data;
		    // $window.location.href = '#/overview';
		     $location.path( "/overview" );
		})
		.catch(function(response) {
		    // Handle errors here, such as displaying a notification
		    // for invalid email and/or password.
		    console.log(response);
		});
    };


  });

