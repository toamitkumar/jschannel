'use strict';

angular.module('jschannel')
  .directive('navbar', function($rootScope) {
    return {
      restrict: 'AE',
      scope: {},
      templateUrl: 'components/navbar/navbar.html',
      link: function(scope) {

        scope.hideMenuList = false;

        scope.toggleMenuBar = function () {
          scope.hideMenuList = !scope.hideMenuList;
          return;
        };

        $rootScope.$on('duScrollspy:becameActive', function() {
          scope.hideMenuList = false;
        });
      }
    };
  });
