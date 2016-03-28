'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('MapCtrl', function ($scope, uiGmapGoogleMapApi) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };

    uiGmapGoogleMapApi.then(function (maps) {
      console.log(maps);
    });

  });
