'use strict';

/**
 * @ngdoc directive
 * @name eventifyApp.directive:highlightOnClick
 * @description
 * # highlightOnClick
 */
angular.module('eventifyApp')
  .directive('highlightOnClick', ['$window', function ($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.on('click', function () {
          if (!$window.getSelection().toString()) {
            // Required for mobile Safari
            this.setSelectionRange(0, this.value.length)
          }
        });
      }
    };
  }]);
