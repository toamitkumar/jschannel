'use strict';

angular.module('jschannel')
	.controller('MeetupController', function(MeetupService, $scope) {


		function initialize() {
			console.log('Initialized')
			MeetupService.all().then(function(data) {
				console.log('data', data)
				$scope.meetups = data;
			}, function(err) {
				$scope.meetups = [];
			});
		}

		initialize();

	});