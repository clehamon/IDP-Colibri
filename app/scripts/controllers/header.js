'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  
.controller('HeaderCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope) {

        $rootScope.$on("changeSignup", function(){
           $scope.changeSignup();
        })

      $scope.showLogin = false;
      $scope.showSignup = false;

      $scope.changeSignup = function(){
        $scope.showSignup = !$scope.showSignup;
      }

      $scope.changeLogin = function(){
        $scope.showLogin = !$scope.showLogin;
      }
  }
]);

