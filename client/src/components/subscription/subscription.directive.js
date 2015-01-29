'use strict';

angular.module('jschannel')
	.directive('subscription', function($q, $http) {
		return {
			restrict: 'AE',
			scope: {},
			templateUrl: 'components/subscription/subscription.html',
			link: function(scope, element) {
				scope.user = {
					email: '',
					submitting: false
				};

				scope.subscribeUser = function() {
				  if(scope.user.email !== undefined) {
				  	var url = '/api/users/subscribe';

						scope.submitting = true;				  	    
				  	$http.post(url, {email: scope.user.email})
				  	.success(function(data) {
				  		scope.submitting = false;
				  		$('#subscribe').children('form').hide();
				  		$('#subscribe').children('h4').html(data.message).removeClass('hidden');
				  	})
				  	.error(function(data) {
				  		scope.submitting = false;
				  		$('#subscribe').children('form').hide();
				  		$('#subscribe').children('h4').html(data.message).removeClass('hidden');
				  	});
				  }
				};
			}
		};
	});