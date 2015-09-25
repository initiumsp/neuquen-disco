'use strict';

describe('Controller: ScanningCtrl', function () {

  // load the controller's module
  beforeEach(module('neuqueninitiumdatacomApp'));

  var ScanningCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScanningCtrl = $controller('ScanningCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
