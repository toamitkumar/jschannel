'use strict';

angular.module('jschannel')
	.controller('MeetupController', function(MeetupService, $scope) {


		function initialize() {
			console.log('Initialized')
			MeetupService.all().then(function(data) {
				$scope.meetups = data;
			}, function(err) {
				$scope.meetups = [];
			});
		}

		initialize();

	});