'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
    .controller('EventCtrl', function ($scope, EventService, TaskService, StuffService, $routeParams, $http) {

        $scope.linkID = $routeParams.linkID;

        $scope.newTask = 'nakki';

        $scope.newItem = "ebin";

        //this name should be changed
        $scope.getEventByID = function () {
            $scope.eventStatus = true;
            EventService.Event.get({
                id: $scope.linkID
            }, function (data) {
                $scope.event = data;
                console.log(data);

                //not sure if this should be in MapCtrl
                $scope.mapCenter = {
                    latitude: data.locationLat
                    , longitude: data.locationLong
                };

                //This is required by the directive
                $scope.markerCenter = {
                    latitude: data.locationLat
                    , longitude: data.locationLong
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
                },
                function (data) {
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