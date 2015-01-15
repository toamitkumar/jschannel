'use strict';

angular.module('jschannel').directive('navShrink', function ($timeout) {
  return {
  	link: function(scope, element) {

  		scope.initScroll = function($element) {
  			window.addEventListener( 'scroll', function() {
  				if( !$element.didScroll ) {
  					$element.didScroll = true;

  					$timeout(function () {
              scope.scrollPage($element);
            }, 250);
  				}
  			}, false );
  		};

  		scope.scrollPage = function($element) {
  			function scrollY() {
  				return window.pageYOffset || document.documentElement.scrollTop;
  			}

  			var sy = scrollY();
  			if ( sy >= 300 ) {
  				$element.addClass('navbar-shrink');
  				angular.element('#back-top').removeClass('hidden');
  			}
  			else {
  				$element.removeClass('navbar-shrink');
  				angular.element('#back-top').addClass('hidden');
  			}
  			$element.didScroll = false;
  		};

  		scope.initScroll($(element));

  	}
  };
});