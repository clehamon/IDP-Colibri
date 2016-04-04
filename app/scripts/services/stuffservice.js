'use strict';

/**
 * @ngdoc service
 * @name eventifyApp.StuffService
 * @description
 * # StuffService
 * Service in the eventifyApp.
 */
angular.module('eventifyApp')
    .service('StuffService', function ($resource) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        this.newStuff = $resource('http://clementhamon.com/IDP/public/stuff/new');
        this.removeStuff = $resource('http://clementhamon.com/IDP/public/stuff/delete/:id');

    });