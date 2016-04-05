'use strict';

describe('Directive: defaultSrc', function () {

  // load the directive's module
  beforeEach(module('eventifyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<default-src></default-src>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the defaultSrc directive');
  }));
});
