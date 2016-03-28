'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('EventCtrl', function ($scope, eventService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getAttendees = function () {
      eventService.EventAttendees.get({
        id: 1
      }, function (data) {
        console.log(data);
      }, function (data) {
        console.log(data);
      });
    };

  });
