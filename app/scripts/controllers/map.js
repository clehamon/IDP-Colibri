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

    uiGmapGoogleMapApi.then(function (maps) {
      console.log(maps);
    });

  });
