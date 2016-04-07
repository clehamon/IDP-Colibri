'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('HeaderCtrl', function ($scope) {

  	$scope.showModal = false;

  	$scope.changeModal = function(){
    	$scope.showModal = !$scope.showModal;
    };

  });
