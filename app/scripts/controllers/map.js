'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
    .controller('MapCtrl', function ($scope, uiGmapGoogleMapApi) {

        uiGmapGoogleMapApi.then(function (maps) {
            console.log(maps);
        });

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
            //change back to places_changed
            places_changed: function (searchBox) {

                var place = searchBox.getPlaces();
                $scope.placeName = "";



                if (!place || place === 'undefined' || place.length === 0) {
                    console.log('no place data :(');
                    return;
                }

                var placeName = place[0].formatted_address;
                console.log("from map " + placeName);
                $scope.event.placeName = placeName;
                console.log("from event " + $scope.event.placeName);


                $scope.lat = place[0].geometry.location.lat();
                $scope.lngt = place[0].geometry.location.lng();

                console.log($scope.lat, "+", $scope.lngt);
                $scope.event.latitudeMap = $scope.lat;
                $scope.event.longitudeMap = $scope.lngt;

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
                        latitude: $scope.lat,
                        longitude: $scope.lngt
                    }
                };

            }
        };

        $scope.searchbox = {
            template: 'searchbox.tpl.html',
            events: events
        };


    });