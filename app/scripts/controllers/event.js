'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('EventCtrl', function ($scope, EventService, $routeParams, AuthService, $location, $rootScope) {

    $scope.linkID = $routeParams.linkID;
    $scope.editing = false;

    $scope.Spotify = "";

    $scope.isLogged = AuthService.isLoggedIn();

    $scope.user = AuthService.currentUser();

    $scope.SpotifyURI = "";

    $scope.popClicked = 0;

    $scope.eventStatus = null;

    $scope.clickPop = function (index) {
      if ($scope.popClicked == index) {
        $scope.popClicked = 0;
      } else {
        $scope.popClicked = index;
      }
    };

    //this method initializes the data for the view
    $scope.getEventByID = function () {
      EventService.Event.get({
        eventId: $scope.linkID
      }, function (data) {

        $scope.event = data;

        if ($scope.isLogged) {
          $scope.eventAdmin = ($scope.user.id === $scope.event.admin);
        }
        //checking spotify playlist for ng-show

        //setting bg picture
        if ($scope.event.coverPicture == null) {
          $scope.bgStyle = {
            'background-image': 'url(../../images/pattern.png)'
          };
        } else {
          $scope.bgStyle = {
            'background-image': 'url(' + $scope.event.coverPicture + ')'
          };
        }

        $scope.mapCenter = {
          latitude: data.locationLat,
          longitude: data.locationLong
        };

        $scope.id = data.id;
        $scope.Spotify = data.spotifyPlaylist;


        $scope.checkPlaylist = function () {
          if (data.spotifyPlaylist) {
            return true;
          } else {
            return false;
          }
        };

        $scope.SpotifyURI = 'https://embed.spotify.com/?uri=' + $scope.Spotify;

        $scope.attendees = data.attendee;



        $scope.isAttending = function () {
          var attending = false;
          for (var i = 0; i < $scope.event.attendee.length; i++) {
            if ($scope.event.attendee[i].id === $scope.user.id) {
              attending = true;
            }
          }
          return attending;
        };

        //finally save data to service
        EventService.setEventData(data);

      }, function (data) {
        $scope.showError();
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

    $scope.addUserToEvent = function () {
      if ($scope.user) {
        EventService.addAttendee.save({}, {
          event: $scope.event.id,
          user: $scope.user.id
        }, function (data) {
          $scope.event.attendee.push($scope.user);
        }, function (data) {
          $scope.showError();
        });
      } else {
        AuthService.redirectEvent($scope.event.id, $scope.event.linkId);

        $rootScope.$emit('changeView', {});

      }
    };

    $scope.deleteEvent = function (ID) {
      if ($scope.user) {
        EventService.deleteEvent.delete({
            id: $scope.event.id
          }, {},
          function (data) {
            $location.path('/overview');
          },
          function (data) {
            $scope.showError();
          });
      }
    };

    $scope.showError = function () {
      $scope.eventStatus = 'Error, please reload the page and try again';
      setTimeout(function () {
        $scope.eventStatus = null;
      }, 2000);
    };


  });
