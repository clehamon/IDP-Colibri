'use strict';

describe('Service: StuffService', function () {

  // load the service's module
  beforeEach(module('eventifyApp'));

  // instantiate service
  var StuffService;
  beforeEach(inject(function (_StuffService_) {
    StuffService = _StuffService_;
  }));

  it('should do something', function () {
    expect(!!StuffService).toBe(true);
  });

});
