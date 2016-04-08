'use strict';

/**
 * @ngdoc service
 * @name eventifyApp.newService
 * @description
 * # NewService
 * Service in the eventifyApp.
 */
angular.module('eventifyApp')
    .service('NewService', function ($http, $scope) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        this.event = {};

        this.processData = $http({
                method: 'POST',
                url: 'http://clementhamon.com/IDP/public/event/new',
                data: {

                    name: event.name,
                    date: event.date,
                    time: event.time,
                    locationName: event.locationName,
                    coverPicture: event.coverPicture,
                    duration: event.duration,
                    locationLat: event.latitudeMap,
                    locationLong: event.longitudeMap,
                    description: event.description,
                    spotifyPlaylist: event.spotifyPlaylist

                }, // pass in data as strings
            })
            .success(function (data) {
                console.log(data);

                if (!data.success) {
                    // if not successful, bind errors to error variables

                    console.log($scope.errorName);

                } else {
                    // if successful, bind success message to message
                    $scope.message = data.message;
                }
            });



    });