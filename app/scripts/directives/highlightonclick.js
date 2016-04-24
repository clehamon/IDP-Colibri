'use strict';

/**
 * @ngdoc directive
 * @name eventifyApp.directive:highlightOnClick
 * @description
 * # highlightOnClick
 */
angular.module('eventifyApp')
  .directive('highlightOnClick', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the highlightOnClick directive');
      }
    };
  });
