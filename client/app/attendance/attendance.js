'use strict';

angular.module('groupApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('attendance', {
        url: '/attendance',
        templateUrl: 'app/attendance/attendance.html',
        controller: 'AttendanceCtrl'
      });
  });