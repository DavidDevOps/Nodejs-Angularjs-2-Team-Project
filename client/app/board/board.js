'use strict';

angular.module('groupApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('board', {
        url: '/board',
        templateUrl: 'app/board/board.html',
        controller: 'BoardCtrl'
      });
  });