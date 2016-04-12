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

      if (AuthService.isLoggedIn()) {
        $scope.currentUser = AuthService.currentUser();
      }

      $scope.changeView = function(ID){
        if (ID === 1) {
          $scope.showSignup = !$scope.showSignup;
        }
        if (ID === 2) {
          $scope.showLogin = !$scope.showLogin;
        }
      };

      $scope.logOut = function (){
        AuthService.logout();
      };

  }
]);

