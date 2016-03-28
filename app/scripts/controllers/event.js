'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('EventCtrl', function ($scope, EventService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getAttendees = function () {
      EventService.EventAttendees.query({
        id: 1
      }, function (data) {
        $scope.attendees = data;
        console.log(data);
      }, function (data) {
        console.log(data);
      });
    };

  });
