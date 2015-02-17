'use strict';

angular.module('jschannel')
	.controller('MeetupController', function(MeetupService, $scope, usSpinnerService, $modalInstance, $timeout) {

		function initialize() {
			$timeout(function () {
        usSpinnerService.spin('spinner-1');
      }, 50);
			MeetupService.all().then(function(data) {
				usSpinnerService.stop('spinner-1');
				$scope.meetups = data;
			}, function() {
				usSpinnerService.stop('spinner-1');
				$scope.meetups = [];
			});
		}

		initialize();

		$scope.closeModal = $scope.cancel = function () {
		  $modalInstance.dismiss('cancel');
		};

	});