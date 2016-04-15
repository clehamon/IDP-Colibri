'use strict';

/**
 * @ngdoc service
 * @name eventifyApp.AuthService
 * @description
 * # AuthService
 * Factory in the eventifyApp.
 */
angular.module('eventifyApp')
  .factory('AuthService', function ($auth, $location, $route, $cookies) {

    var currentUser = $cookies.getObject('user');
    var lastError = '';

    // Public API here
    return {

      login: function(user) {

          var httpConfig = {
            url: 'http://clementhamon.com/IDP/public/auth/login'
          };

          $auth.login(user, httpConfig)
          .then(function(response) {
                // Redirect user here after a successful log in.
                // console.log(response);
                currentUser = response.data;
                $cookies.putObject('user',response.data);
                // $window.location.href = '#/overview';
                $location.path( '/overview' );

                return true;
          })
          .catch(function(response) {
                // Handle errors here, such as displaying a notification
                // for invalid email and/or password.
                console.log(response);
                lastError = response.data.error;
                return false;
          });
      },
      logout: function() {
            currentUser = null;
            $cookies.remove('user');
            if ($location.$$path === '/') {
                $route.reload();
            } else {
                $location.path( '/' );
            }
      },
      isLoggedIn: function() {
        return (currentUser !== null);
      },
      lastError: function() {
        return lastError;
      },
      setUser: function(user) { 
        currentUser = user;
        $cookies.putObject('user',user);

        return currentUser; 
      },
      currentUser: function() { 
        return currentUser; 
      }
    };
  });
