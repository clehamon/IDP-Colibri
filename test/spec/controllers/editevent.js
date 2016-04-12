'use strict';

describe('Controller: EditeventCtrl', function () {

  // load the controller's module
  beforeEach(module('eventifyApp'));

  var EditeventCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditeventCtrl = $controller('EditeventCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditeventCtrl.awesomeThings.length).toBe(3);
  });
});
