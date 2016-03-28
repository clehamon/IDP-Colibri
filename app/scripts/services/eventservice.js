'use strict';

/**
 * @ngdoc service
 * @name eventifyApp.eventService
 * @description
 * # eventService
 * Service in the eventifyApp.
 */
angular.module('eventifyApp')
  .service('eventService', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.EventAttendees = $resource('http://clementhamon.com/IDP/public/event/:id/attendees');

  });
