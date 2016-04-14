'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:TaskCtrl
 * @description
 * # TaskCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
    .controller('TaskCtrl', function ($scope, TaskService, AuthService) {

        $scope.newTask = '';

        $scope.createTask = function () {
            if ($scope.newTask === '') {
                return;
            }
            TaskService.NewEventTask.save({}, {
                event: $scope.event.id,
                name: $scope.newTask
            },
            function (data) {
                console.log(data);
                $scope.event.tasks.push({
                    completed: 0,
                    id: data.id,
                    name: $scope.newTask,
                    owners: []
                });
                $scope.newTask = '';
            },
            function (data) {
                console.log(data);
            });
        };

        $scope.removeTask = function (ID) {
            TaskService.RemoveEventTask.delete({
                id: ID
            },
            {},
            function (data) {
                for (var i = 0; i < $scope.event.tasks.length; i++) {
                    if ($scope.event.tasks[i].id === ID) {
                        $scope.event.tasks.splice(i--, 1);
                    }
                }
                $scope.deleteTaskIndex = -1;
                console.log(data);
            },
            function (data) {
                console.log(data);
            });
        };

        $scope.showDeleteTaskField = function (index) {
            return $scope.deleteTaskIndex === index;
        };

        $scope.openTaskRemove = function (index) {
            $scope.deleteTaskIndex = index;
        };

        $scope.closeTaskRemove = function () {
            $scope.deleteTaskIndex = -1;
        };

        $scope.addUserToTask = function(taskID){
            console.log(taskID);
            TaskService.AddTaskOwner.save({},{
                task: taskID,
                owner: AuthService.currentUser().id
            }, function(data){
                console.log(data);
                for (var i = 0; i < $scope.event.tasks.length; i++) {
                    if ($scope.event.tasks[i].id === taskID) {
                        $scope.event.tasks[i].owners.push(AuthService.currentUser());
                    }
                }
            }, function(data){
                console.log(data);
            });
        };
    
        $scope.removeUserFromTask = function(taskID){
            console.log(taskID + ', owner:' + AuthService.currentUser().id);
            TaskService.RemoveTaskOwner.delete({},{
                task: taskID,
                owner: AuthService.currentUser().id
            }, function(data){
                console.log(data);
            }, function(data){
                console.log(data);
            });
        };

    });