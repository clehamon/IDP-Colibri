'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:TaskCtrl
 * @description
 * # TaskCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
    .controller('TaskCtrl', function ($scope, TaskService) {

        $scope.newTask = '';

        $scope.createTask = function () {
            if ($scope.newTask == '') {
                return;
            }
            TaskService.NewEventTask.save({}, {
                    event: $scope.event.id
                    , name: $scope.newTask
                }
                , function (data) {
                    console.log(data);
                    $scope.event.tasks.push({
                        completed: 0
                        , id: data.id
                        , name: $scope.newTask
                        , owners: new Array
                    });
                    $scope.newTask = '';
                }
                , function (data) {
                    console.log(data);
                });
        };

        $scope.removeTask = function (ID) {
            TaskService.RemoveEventTask.delete({
                    id: ID
                }, {}
                , function (data) {
                    for (var i = 0; i < $scope.event.tasks.length; i++) {
                        if ($scope.event.tasks[i].id === ID) {
                            $scope.event.tasks.splice(i--, 1);
                        }
                    }
                    $scope.deleteTaskIndex = -1;
                    console.log(data);
                }
                , function (data) {
                    console.log(data);
                });
        };

        $scope.showDeleteTaskField = function (index) {
            return $scope.deleteTaskIndex === index;
        };

        $scope.openTaskRemove = function (index) {
            $scope.deleteTaskIndex = index;
        };

        $scope.closeTaskRemove = function (index) {
            $scope.deleteTaskIndex = -1;
        };

        $scope.addUserToTask = function(){
            console.log('user added');
        }

    });