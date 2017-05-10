'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('groupApp'));
  beforeEach(module('socketMock'));

  var MainCtrl,
      scope,
      $httpBackend;
    var test;
    var request = require('request');
    request.get({url: 'http://festi.kr/festi/'},  function(err, response, body){
        test = body;
    });

    // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeThings.length).toBe(4);
  });
});
