'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:EditeventCtrl
 * @description
 * # EditeventCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('EditeventCtrl', function ($scope, EventService, $location) {
    angular.element(document).ready(function () {
      $scope.event = EventService.getEventData();
      console.log($scope.event);
        
      //var dateArr = $scope.event.date;//.split('-');
      /*var tmp = dateArr[2];
      tmp.push(dateArr[1]);
      tmp.push(dateArr[0]);
      dateArr = tmp.join("-");
      console.log(dateArr);*/
      //$scope.event.date = dateArr;
    });
    
    
    $scope.processForm = function () {
        EventService.updateEvent.update({}, {
          id: $scope.event.id,
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
          console.log(data);
          $location.path('/event/' + $scope.event.linkId);

        }, function (data) {
          console.log(data);
        });
      };
  });
