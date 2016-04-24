'use strict';

describe('Directive: highlightOnClick', function () {

  // load the directive's module
  beforeEach(module('eventifyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<highlight-on-click></highlight-on-click>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the highlightOnClick directive');
  }));
});
