'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('ItemCtrl', function ($scope, StuffService) {
    
    $scope.newItem = '';
    
    $scope.createItem = function () {
      if($scope.newItem == ''){
          return;
      }
        
      StuffService.newStuff.save({}, {
          name: $scope.newItem,
          event: $scope.event.id
        },
        function (data) {
          console.log(data);
          $scope.event.stuffs.push({
            event: $scope.event.id,
            id: data.id,
            name: $scope.newItem,
            owner: null
          });
          console.log($scope.event.stuffs);
          $scope.newItem = '';
        },
        function (data) {
          console.log(data);
        });
    };

    $scope.removeItem = function (ID) {
      console.log(ID);
      StuffService.removeStuff.delete({
          id: ID
        }, {},
        function (data) {
          for (var i = 0; i < $scope.event.stuffs.length; i++) {
            if ($scope.event.stuffs[i].id === ID) {
              $scope.event.stuffs.splice(i--, 1);
            }
          }
          $scope.deleteItemIndex = -1;
          console.log(data);
        },
        function (data) {
          console.log(data);
        });
    };
    
    $scope.showDeleteItemField = function (index) {
        return $scope.deleteItemIndex === index;
    };

    $scope.openItemRemove = function (index) {
        $scope.deleteItemIndex = index;
    };

    $scope.closeItemRemove = function (index) {
        $scope.deleteItemIndex = -1;
    };

    $scope.addUserToItem = function(){
        console.log('user added to item');
    }
    
    
  });
