'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventifyApp
 */
var mymodal = angular.module('eventifyApp');

	mymodal.controller('LoginCtrl', function ($scope, $location, AuthService, EventService) {

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

            // var redirectEvent = AuthService.getEventID();
            // var user = AuthService.currentUser();
            // console.log(redirectEvent['id'], redirectEvent.id);
            // if (redirectEvent) {
            //     EventService.addAttendee.save({}, {
            //       event: redirectEvent,
            //       user: user.id
            //     }, function (data) {
            //         $location.path( '/event/'+AuthService.getEventLink()); 
            //     }, function (data) {
            //       console.log(data);
            //     });
            // } else {
                $location.path( '/overview' );
            // }
        }
    };


  });

