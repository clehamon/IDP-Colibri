'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:EditeventCtrl
 * @description
 * # EditeventCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('EditeventCtrl', function ($scope, EventService, $location, $filter) {
    angular.element(document).ready(function () {
      $scope.event = EventService.getEventData();

      if ($scope.event !== undefined) {
        $scope.imageStyle = {
            background: 'linear-gradient( rgba(0, 0, 0,0.5), rgba(0, 0, 0,0.5) ), url(' + $scope.event.coverPicture + ') no-repeat center center',
            'background-size': 'cover'
        };
      }
      console.log($scope.event);
    });


    $scope.processForm = function () {
      EventService.updateEvent.update({}, {
        id: $scope.event.id,
        name: $scope.event.name,
        date: $scope.event.date,
        time: $filter('date')($scope.event.time , "HH:mm:ss"),
        locationName: $scope.event.locationName,
        coverPicture: $scope.event.coverPicture,
        duration: $scope.event.duration,
        locationLat: $scope.event.latitudeMap,
        locationLong: $scope.event.longitudeMap,
        description: $scope.event.description,
        spotifyPlaylist: $scope.event.spotifyPlaylist,
        admin: $scope.adminID
      }, function (data) {
        console.log(data);
        $location.path('/event/' + $scope.event.linkId);

      }, function (data) {
        console.log(data);
      });
    };
  });
