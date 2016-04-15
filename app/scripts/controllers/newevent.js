'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:NeweventCtrl
 * @description
 * # NeweventCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('NeweventCtrl', function ($scope, $http, $resource, EventService, $location) {

    //this could/should be shared with editevent.js
    $scope.imageStyle = {
      'background-color': '#444'
    };

    $scope.event = {};
    $scope.adminID = 2039;

    $scope.processForm = function () {
      EventService.processForm.save({}, {

        name: $scope.event.name,
        date: $scope.event.date,
        time: $scope.event.time,
        locationName: $scope.event.locationName,
        coverPicture: $scope.event.coverPicture,
        duration: $scope.event.duration,
        locationLat: $scope.event.latitudeMap,
        locationLong: $scope.event.longitudeMap,
        description: $scope.event.description,
        spotifyPlaylist: $scope.event.spotifyPlaylist,
        admin: $scope.adminID
      }, function (data) {
        console.log(data.linkId);
        $location.path('/event/' + data.linkId);

      }, function (data) {
        console.log(data);
      });
    };


    //this could/should be shared with editevent.js
    $scope.updateCover = function () {
      $scope.imageStyle = {
        background: 'linear-gradient( rgba(0, 0, 0,0.5), rgba(0, 0, 0,0.5) ), url(' + $scope.event.coverPicture + ') no-repeat center center',
        'background-size': 'cover'
      };
    };



  });
