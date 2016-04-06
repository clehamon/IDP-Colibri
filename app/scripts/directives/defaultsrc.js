'use strict';

/**
 * @ngdoc directive
 * @name eventifyApp.directive:defaultSrc
 * @description
 * # defaultSrc
 */
angular.module('eventifyApp')
  .directive('defaultSrc', function () {
    return {
      link: function (scope, element, attrs) {
        element.bind('error', function () {
          if (attrs.src !== attrs.defaultSrc) {
            attrs.$set('src', attrs.defaultSrc);
          }
        });
      }
    };
  });
