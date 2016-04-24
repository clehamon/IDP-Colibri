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
            eventData = angular.copy(data);
            if(eventData.date  != null){
              var dateArr = eventData.date.split('-');
              var date = new Date(dateArr[0], dateArr[1], dateArr[2]);
              console.log(date);
              eventData.date = date;
            }
          
            if(eventData.time != null){
              var time = eventData.time.split(':');
              eventData.time = new Date(dateArr[0], dateArr[1], dateArr[2], time[0], time[1]);
              console.log(new Date(dateArr[0], dateArr[1], dateArr[2], time[0], time[1]));
            }
        };


        this.getEventData = function () {
            return eventData;
        };

        this.Event = $resource('http://clementhamon.com/IDP/public/event/link/:eventId');

        this.EventAttendees = $resource('http://clementhamon.com/IDP/public/event/:id/attendees');

        this.deleteEvent = $resource('http://clementhamon.com/IDP/public/event/delete/:id');

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

        this.addAttendee = $resource('http://clementhamon.com/IDP/public/event/attendance/new');

    });