'use strict';

angular.module('groupApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('notice', {
        url: '/notice',
        templateUrl: 'app/notice/notice.html',
        controller: 'NoticeCtrl'
      });
  });