'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventifyApp
 */
var mymodal = angular.module('eventifyApp');

	mymodal.controller('LoginCtrl', function ($scope) {

    $scope.changeModal = function(){
      $scope.$parent.showModal = !$scope.$parent.showModal;
    };

  });

