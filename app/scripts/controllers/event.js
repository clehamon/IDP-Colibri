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

    $scope.getEventByID = function (ID) {
      $scope.eventStatus = true;
      EventService.Event.get({
        id: ID
      }, function (data) {
        $scope.event = data;
        console.log(data);
        $scope.eventStatus = false;
      }, function (data) {
        console.log(data);
      });
    };

    /*Refactored everything to use getEventByID,
    so this is currently not used.
    Left it here just in case.*/
    $scope.getAttendees = function (ID) {
      $scope.attendeeStatus = true;
      EventService.EventAttendees.query({
        id: ID
      }, function (data) {
        $scope.attendees = data;
        $scope.attendeeStatus = false;
      }, function (data) {
        console.log(data);
      });
    };

  });
