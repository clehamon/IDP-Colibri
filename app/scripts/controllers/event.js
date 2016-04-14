'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('EventCtrl', function ($scope, EventService, $routeParams, AuthService) {

    $scope.linkID = $routeParams.linkID;
    $scope.editing = false;

    $scope.isLogged = AuthService.isLoggedIn();
    
    $scope.user = AuthService.currentUser();


    //this name should be changed
    $scope.getEventByID = function () {
      $scope.eventStatus = true;
      EventService.Event.get({
        eventId: $scope.linkID
      }, function (data) {
        $scope.event = data;
        console.log(data);

        //setting bg picture
        $scope.bgStyle = {
          'background-image': 'url(' + $scope.event.coverPicture + ')'
        };

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

        $scope.attendees = data.attendee;

        $scope.eventStatus = false;

        //finally save data to service
        EventService.setEventData(data);

      }, function (data) {
        console.log(data);
      });
    };

    $scope.getUserByID = function (ID) {
      var user;
      $scope.attendees.forEach(function (attendee) {
        if (attendee.id === ID) {
          user = attendee;
        }
      });
      return user;
    };

    //THIS IS NOT USED
    $scope.startEditing = function () {
      $scope.editing = true;
    };

    //THIS IS NOT USED
    $scope.stopEditing = function () {
      $scope.editing = false;
      EventService.updateEvent.update({}, {
        id: $scope.event.id,
        name: $scope.event.name,
        date: $scope.event.date,
        time: $scope.event.time,
        duration: $scope.event.duration,
        description: $scope.event.description
      }, function (data) {
        console.log(data);
      }, function (data) {
        console.log(data);
      });
    };

  });
