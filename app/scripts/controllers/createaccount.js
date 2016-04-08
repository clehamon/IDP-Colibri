'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:CreateaccountCtrl
 * @description
 * # CreateaccountCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('CreateaccountCtrl', function ($scope, $auth) {

  	$scope.signInError = '';
    
    $scope.newUser = function(){
    	// if ($scope.password != $scope.confirmPassword) {
    	// 	$scope.signInError = 'Confirmation password is different from the password';
    	// 	return false;
    	// }

    	var user = {
			firstName: $scope.firstName,
			lastName: $scope.lastName,
			email: $scope.email,
			password: $scope.password
		};

		var	httpConfig = {
			url: 'http://clementhamon.com/IDP/public/user/new'
		};

		$auth.signup(user, httpConfig)
		.then(function(response) {
			// Redirect user here to login page or perhaps some other intermediate page
			// that requires email address verification before any other part of the site
			// can be accessed.
			console.log(response);

		})
		.catch(function(response) {
			// Handle errors here.
			console.log(response);

		});



    };
  });
