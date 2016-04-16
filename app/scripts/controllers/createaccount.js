'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:CreateaccountCtrl
 * @description
 * # CreateaccountCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('CreateaccountCtrl', function ($scope, UserService) {

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

		console.log(user);

		UserService.newUser.save({}, {
			firstName: $scope.firstName,
			lastName: $scope.lastName,
			email: $scope.email,
			password: $scope.password
		}, 

		function (data) {
	        console.log(data);

      	}, function (data) {
        	console.log(data);
      	});

    };
  });
