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
  }
]);
