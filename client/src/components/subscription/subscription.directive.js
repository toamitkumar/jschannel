'use strict';

angular.module('jschannel')
	.directive('subscription', function($q, $http) {
		return {
			restrict: 'AE',
			scope: {},
			templateUrl: 'components/subscription/subscription.html',
			link: function(scope, element) {
				scope.subscribeUser = function() {
				  // http://localhost:5000/api/users/subscribe
				  console.log('submitted', user.email);
				  console.log('element', element)

				  if(scope.user.email !== undefined) {
				  	var url = 'http://localhost:5000/api/users/subscribe';

						scope.submitting = true;				  	    
				  	$http.post(url, {email: user.email})
				  	.success(function(data, status) {
				  		scope.submitting = false;

				  	})
				  	.error(function(data, status) {
				  		scope.submitting = false;
				  	});
				  }
				};
			}
		};
	});