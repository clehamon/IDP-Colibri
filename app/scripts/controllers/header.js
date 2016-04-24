'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  
.controller('HeaderCtrl', function($scope, $rootScope, AuthService, EventService, $location, $route) {

      $rootScope.$on('changeView', function(){
         $scope.changeView(1);
      });

      $scope.showLogin = false;
      $scope.showSignup = false;
      $scope.showProfile = false;

      if (AuthService.isLoggedIn()) {
        $scope.currentUser = AuthService.currentUser();
      }

      $scope.changeView = function(ID){

        switch (ID) {
          case 1:
            $scope.showSignup = !$scope.showSignup;
            break;
          case 2:
            $scope.showLogin = !$scope.showLogin;
            break;
          case 3:
            $scope.showProfile = !$scope.showProfile;
            break;
        }
      };

      $scope.loginCallback = function () {
         if (!AuthService.isLoggedIn()) {
            $scope.loginError = AuthService.lastError();
          } else {
              $scope.loginError = '';

              var eventID = AuthService.getRedirectID();
              var user = AuthService.currentUser();
              console.log(eventID);

              if (eventID) {
                  EventService.addAttendee.save({}, {
                    event: eventID,
                    user: user.id
                  }, function (data) {
                      $route.reload();
                      // $location.path( '/event/'+AuthService.getRedirectLink()); 
                  }, function (data) {
                    console.log(data);
                  });
              } else {
                  $location.path( '/overview' );
              }
          }
      };

      $scope.logOut = function (){
        AuthService.logout();
      };
      
      $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
      };

      $scope.updateHeader = function () {
        $scope.currentUser = AuthService.currentUser();
      };

  }
);

