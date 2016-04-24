'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventifyApp
 */
var mymodal = angular.module('eventifyApp');

	mymodal.controller('LoginCtrl', function ($scope, $location, AuthService, EventService, $route) {

    $scope.loginMail = function () {
    	var user = {
			email: $scope.email,
			password: $scope.password
		};

		AuthService.login(user, $scope.loginCallback);

       
    };


    var loginCallback = function () {
         if (!AuthService.isLoggedIn()) {
            $scope.loginError = AuthService.lastError();
        } else {
            $scope.loginError = '';

            var eventID = AuthService.getRedirectID();
            var user = AuthService.currentUser();
            console.log(eventID);
            if (eventID) {
                EventService.addAttendee.save({}, {
                  event: eventID,
                  user: user.id
                }, function (data) {
                    $route.reload()
                    // $location.path( '/event/'+AuthService.getRedirectLink()); 
                }, function (data) {
                  console.log(data);
                });
            } else {
                $location.path( '/overview' );
            }
        }
    };


  });

