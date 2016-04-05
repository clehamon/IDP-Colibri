'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:NeweventCtrl
 * @description
 * # NeweventCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
    .controller('NeweventCtrl', function ($scope, $http) {
        this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.event = {};
        $scope.lat = 52.47491894326404;
        $scope.lngt = -1.8684210293371217;

        $scope.map = {
            center: {
                latitude: $scope.lat,
                longitude: $scope.lngt
            },
            zoom: 15
        }; //TODO:  set location based on users current gps location 
        $scope.marker = {
            id: 0,
            coords: {
                latitude: $scope.lat,
                longitude: $scope.lngt
            },
            options: {
                draggable: true
            },
            events: {
                dragend: function (marker, eventName, args) {
                    console.log(marker, eventName, args);
                    $scope.marker.options = {
                        draggable: true,
                        labelContent: 'lat: ' + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                        labelAnchor: '100 0',
                        labelClass: 'marker-labels'
                    };
                }
            }
        };
        var events = {
            places_changed: function (searchBox) {

                var place = searchBox.getPlaces();
                console.log(place[0].geometry.location.lat());


                if (!place || place === 'undefined' || place.length === 0) {
                    console.log('no place data :(');
                    return;
                }

                $scope.lat = place[0].geometry.location.lat();
                $scope.lngt = place[0].geometry.location.lng();

                $scope.map = {
                    center: {
                        latitude: $scope.lat,
                        longitude: $scope.lngt

                    },
                    zoom: 18
                };
                $scope.marker = {
                    id: 0,
                    coords: {
                        latitude: place[0].geometry.location.lat(),
                        longitude: place[0].geometry.location.lng()
                    }
                };

            }
        };
        $scope.searchbox = {
            template: 'searchbox.tpl.html',
            events: events
        };
        $scope.event.latitudeMap = $scope.lat;
        $scope.event.longitudeMap = $scope.lngt;

        $scope.processForm = function () {
            console.log("Entered http", $scope.event);
            $http({
                    method: 'POST',
                    url: 'http://clementhamon.com/IDP/public/event/new',
                    data: {

                        name: $scope.event.name,
                        date: $scope.event.date,
                        time: $scope.event.time,
                        coverPicture: $scope.event.coverPicture,
                        duration: $scope.event.duration,
                        locationLat: $scope.event.latitudeMap,
                        locationLong: $scope.event.longitudeMap,
                        description: $scope.event.description,
                        spotifyPlaylist: $scope.event.spotifyPlaylist

                    }, // pass in data as strings
                })
                .success(function (data) {
                    console.log(data);

                    if (!data.success) {
                        // if not successful, bind errors to error variables
                        $scope.errorName = data.errors.name;
                        console.log($scope.errorName);

                    } else {
                        // if successful, bind success message to message
                        $scope.message = data.message;
                    }
                });
        };
        console.log($scope.message);

    });