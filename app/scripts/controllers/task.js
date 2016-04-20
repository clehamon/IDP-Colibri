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

    $scope.ownsTask = function (taskID) {
      var found = false;
      console.log(taskID)
      for (var i = 0; i < $scope.event.tasks.length; i++) {
        if ($scope.event.tasks[i].id === taskID) {
          for (var j = 0; j < $scope.event.tasks[i].owners.length; j++) {
            if ($scope.event.tasks[i].owners[j].id === AuthService.currentUser().id) {
              found = true;
            }
          }
        }
      }
      return found;
    };

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
        }, {},
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

    $scope.addUserToTask = function (taskID) {
      console.log(taskID);
      TaskService.AddTaskOwner.save({}, {
        task: taskID,
        owner: AuthService.currentUser().id
      }, function (data) {
        console.log(data);
        for (var i = 0; i < $scope.event.tasks.length; i++) {
          if ($scope.event.tasks[i].id === taskID) {
            $scope.event.tasks[i].owners.push(AuthService.currentUser());
          }
        }
      }, function (data) {
        console.log(data);
      });
    };

    $scope.removeUserFromTask = function (taskID) {
      console.log(taskID + ', owner:' + AuthService.currentUser().id);
      TaskService.RemoveTaskOwner.delete({
          taskId: taskID,
          ownerId: AuthService.currentUser().id
        }, {},
        function (data) {
          console.log(data);
          for (var i = 0; i < $scope.event.tasks.length; i++) {
            if ($scope.event.tasks[i].id === taskID) {
              for (var j = 0; j < $scope.event.tasks[i].owners.length; j++) {
                if ($scope.event.tasks[i].owners[j].id === AuthService.currentUser().id) {
                  console.log($scope.event.tasks[i].owners[j].id);
                  $scope.event.tasks[i].owners.splice(j--, 1);
                }
              }
            }
          }
        },
        function (data) {
          console.log(data);
        });
    };

  });
