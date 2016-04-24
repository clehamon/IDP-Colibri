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
    var redirectID = null;
    var redirectLink = null;

    // Public API here
    return {

      login: function(user, callback) {

          var httpConfig = {
            url: 'http://clementhamon.com/IDP/public/auth/login'
          };

          $auth.login(user, httpConfig)
          .then(function(response) {
                // Redirect user here after a successful log in.
                // console.log(response);
                // console.log(response.data);
                currentUser = response.data;
                $cookies.putObject('user',response.data);
                // $window.location.href = '#/overview';
                callback();
          })
          .catch(function(response) {
                // Handle errors here, such as displaying a notification
                // for invalid email and/or password.
                console.log(response);
                lastError = response.data.error;
                callback();
          });
      },
      logout: function() {
            currentUser = null;
            redirectID = null;
            redirectLink = null;
            $cookies.remove('user');
            if ($location.$$path === '/') {
                $route.reload();
            } else {
                $location.path( '/' );
            }
      },
      isLoggedIn: function() {
        return (currentUser !== null && currentUser !== undefined);
      },
      lastError: function() {
        return lastError;
      },
      redirectEvent : function(id, linkID){
        redirectID = id;
        redirectLink = linkID;
      },
      getRedirectID : function(){
        return redirectID;
      },
      getRedirectLink : function(){
        return redirectLink;
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
