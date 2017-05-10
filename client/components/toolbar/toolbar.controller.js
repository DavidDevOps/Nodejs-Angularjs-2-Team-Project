'use strict';
/*
class ToolbarController {
  //start-non-standard
  menu = [{
    'title': 'GDG',
    'state': 'main'
  }];
*/
  angular.module('groupApp')
    .controller('ToolbarCtrl', function ($mdSidenav, $scope, $location, Auth, $window) {
        $scope.menus = [{
            name: "공지사항",
            move: "notice",
            icon: " "
        }, {
            name: "출석체크",
            move: "attendance",
            icon: ""
        }, {
            name: "프로젝트 소개",
            move: "project",
            icon: ""
        }, {
            name: "일정관리",
            move: "schedule",
            icon: ""
        }, {
            name: "게시판",
            move: "board",
            icon: ""
        }];

      $scope.isLoggedIn = Auth.isLoggedIn;
      $scope.isAdmin = Auth.isAdmin;
      $scope.getCurrentUser = Auth.getCurrentUser;

      $scope.logout = function() {
        Auth.logout();
        $location.path('/login');
      };

      $scope.isActive = function(route) {
        return route === $location.path();
      };

      $scope.toggleLeft = function() {
        $mdSidenav('left').toggle();
      };

      var originatorEv;
      $scope.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
      };
    });
