'use strict';

describe('Service: TaskService', function () {

  // load the service's module
  beforeEach(module('eventifyApp'));

  // instantiate service
  var TaskService;
  beforeEach(inject(function (_TaskService_) {
    TaskService = _TaskService_;
  }));

  it('should do something', function () {
    expect(!!TaskService).toBe(true);
  });

});
