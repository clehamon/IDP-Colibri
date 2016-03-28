'use strict';

/**
 * @ngdoc service
 * @name eventifyApp.eventService
 * @description
 * # EventService
 * Service in the eventifyApp.
 */
angular.module('eventifyApp')
  .service('EventService', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.Event = $resource('http://clementhamon.com/IDP/public/event/:id');

    this.EventAttendees = $resource('http://clementhamon.com/IDP/public/event/:id/attendees');

    this.User = $resource('http://clementhamon.com/IDP/public/user/:id');

  });
