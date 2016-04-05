'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('EventCtrl', function ($scope, EventService, TaskService, StuffService, $routeParams) {

    $scope.linkID = $routeParams.linkID;

    $scope.newTask = '';
    $scope.newItem = '';
    $scope.editing = false;


    //this name should be changed
    $scope.getEventByID = function () {
      $scope.eventStatus = true;
      EventService.Event.get({
        eventId: $scope.linkID
      }, function (data) {
        $scope.event = data;
        console.log(data);

        $('.parallax').css('background-image', 'url(' + $scope.event.coverPicture + ')');

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

    $scope.createTask = function () {
      TaskService.NewEventTask.save({}, {
          event: $scope.linkID,
          name: $scope.newTask
        },
        function (data) {
          console.log(data);
          $scope.event.tasks.push({
            event: $scope.linkID,
            name: $scope.newTask
          });
        },
        function (data) {
          console.log(data);
        });
    };

    $scope.removeTask = function (ID) {
      console.log(ID);
      TaskService.RemoveEventTask.delete({
          id: ID
        }, {},
        function (data) {
          for (var i = 0; i < $scope.event.tasks.length; i++) {
            if ($scope.event.tasks[i].id === ID) {
              $scope.event.tasks.splice(i--, 1);
            }
          }
          console.log(data);
        },
        function (data) {
          console.log(data);
        });
    };

    $scope.createItem = function () {
      console.log($scope.linkID, $scope.newItem);
      StuffService.newStuff.save({}, {
          name: $scope.newItem,
          event: $scope.linkID
        },
        function (data) {
          console.log(data);
          $scope.event.stuffs.push({
            event: $scope.linkID,
            name: $scope.newItem
          });
        },
        function (data) {
          console.log(data);
        });
    };

    $scope.removeItem = function (ID) {
      console.log(ID);
      StuffService.removeStuff.delete({
          id: ID
        }, {},
        function (data) {
          for (var i = 0; i < $scope.event.stuffs.length; i++) {
            if ($scope.event.stuffs[i].id === ID) {
              $scope.event.stuffs.splice(i--, 1);
            }
          }
          console.log(data);
        },
        function (data) {
          console.log(data);
        });
    };

    $scope.startEditing = function () {
      $scope.editing = true;
    };

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

    /*$scope.createTask = function (id) {
        TaskService.NewEventTask.save({}, {
          event: id,
          name: $scope.newTask
        }, function (data) {
          console.log(data);
        }, function (data) {
          console.log(data);
        });
      };*/

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
