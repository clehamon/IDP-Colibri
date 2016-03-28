'use strict';

describe('Service: eventService', function () {

  // load the service's module
  beforeEach(module('eventifyApp'));

  // instantiate service
  var eventService;
  beforeEach(inject(function (_eventService_) {
    eventService = _eventService_;
  }));

  it('should do something', function () {
    expect(!!eventService).toBe(true);
  });

});
