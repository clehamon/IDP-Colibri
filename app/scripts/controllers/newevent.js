'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:NeweventCtrl
 * @description
 * # NeweventCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
    .controller('NeweventCtrl', function ($scope) {
        this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.markerID = 2;

        $scope.mapCenter = {
            latitude: 59.38,
            longitude: 18.02
        };

        //This is required by the directive
        $scope.markerCenter = {
            latitude: 59.38,
            longitude: 18.02
        };

    });