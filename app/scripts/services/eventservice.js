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


    var eventData;

    this.setEventData = function (data) {
      eventData = data;
    };

    this.getEventData = function () {
      return eventData;
    };

    this.Event = $resource('http://clementhamon.com/IDP/public/event/link/:eventId');

    this.EventAttendees = $resource('http://clementhamon.com/IDP/public/event/:id/attendees');

    this.updateEvent = $resource('http://clementhamon.com/IDP/public/event/update', null, {
      'update': {
        method: 'PUT'
      }
    });

    this.updateAttendance = $resource('http://clementhamon.com/IDP/public/event/attendance/update', null, {
      'update': {
        method: 'PUT'
      }
    });

    this.processForm = $resource('http://clementhamon.com/IDP/public/event/new');



  });
