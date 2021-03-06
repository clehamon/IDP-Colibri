'use strict';

/**
 * @ngdoc service
 * @name eventifyApp.userservice
 * @description
 * # userservice
 * Service in the eventifyApp.
 */
angular.module('eventifyApp')
  .service('UserService', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.UserEvents = $resource('http://clementhamon.com/IDP/public/user/:id/events');

    this.User = $resource('http://clementhamon.com/IDP/public/user/:id');

    this.newUser = $resource('http://clementhamon.com/IDP/public/user/new');



    this.updateUser = $resource('http://clementhamon.com/IDP/public/user/update', null, {
            'update': {
                method: 'PUT'
            }
        });


  });
