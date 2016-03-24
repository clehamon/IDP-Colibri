'use strict';

describe('Controller: CreateaccountCtrl', function () {

  // load the controller's module
  beforeEach(module('eventifyApp'));

  var CreateaccountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateaccountCtrl = $controller('CreateaccountCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateaccountCtrl.awesomeThings.length).toBe(3);
  });
});
