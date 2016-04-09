'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  
.controller('HeaderCtrl', ['$scope', '$rootScope','AuthService',
    function($scope, $rootScope, AuthService) {

        $rootScope.$on('changeSignup', function(){
           $scope.changeSignup();
        });

      $scope.showLogin = false;
      $scope.showSignup = false;

      $scope.currentUser = AuthService.currentUser();

      $scope.changeSignup = function(){
        $scope.showSignup = !$scope.showSignup;
      };

      $scope.changeLogin = function(){
        $scope.showLogin = !$scope.showLogin;
      };

  }
]);

