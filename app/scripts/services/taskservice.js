'use strict';

/**
 * @ngdoc service
 * @name eventifyApp.TaskService
 * @description
 * # TaskService
 * Service in the eventifyApp.
 */
angular.module('eventifyApp')
    .service('TaskService', function ($resource) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        this.EventTask = $resource('http://clementhamon.com/IDP/public/task/:id');

        this.NewEventTask = $resource('http://clementhamon.com/IDP/public/task/new');

        this.RemoveEventTask = $resource('http://clementhamon.com/IDP/public/task/delete/:id');
    
        this.AddTaskOwner = $resource('http://clementhamon.com/IDP/public/task/addOwner');
    
        this.RemoveTaskOwner = $resource('http://clementhamon.com/IDP/public/task/delOwner/:taskId/:ownerId');
    });