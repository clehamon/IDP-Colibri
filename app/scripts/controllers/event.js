'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('EventCtrl', function ($scope, EventService, UserService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //this name should be changed
    $scope.getEventByID = function (ID) {
      $scope.eventStatus = true;
      EventService.Event.get({
        id: ID
      }, function (data) {
        $scope.event = data;
        console.log(data);

        //not sure if this should be in MapCtrl
        $scope.mapCenter = {
          latitude: data.locationLat,
          longitude: data.locationLong
        };

        //This is required by the directive
        $scope.markerCenter = {
          latitude: data.locationLat,
          longitude: data.locationLong
        };

        //couldn't make "{{event.id}}" work directly in the HTML
        $scope.id = data.id;

        $scope.eventStatus = false;
      }, function (data) {
        console.log(data);
      });
    };

    $scope.getUser = function (ID) {
      UserService.User.get({
        id: ID
      }, function (data) {
        console.log(data);
        return data;
      }, function (data) {
        console.log(data);
        return null;
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
