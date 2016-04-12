'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eventifyApp
 */


angular.module('eventifyApp')


.controller('MainCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope) {

      $scope.showSignup = false;
      $scope.showProfile = false;

      $scope.callChangeSignup = function() {
          $rootScope.$emit('changeView', {});
      };


    }
]);
