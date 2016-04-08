'use strict';

/**
 * @ngdoc service
 * @name eventifyApp.newService
 * @description
 * # NewService
 * Service in the eventifyApp.
 */
angular.module('eventifyApp')
    .service('NewService', function ($resource) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        this.processForm = $resource('http://clementhamon.com/IDP/public/event/new');





    });