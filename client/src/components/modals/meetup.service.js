'use strict';

angular.module('jschannel').service('MeetupService', function($q, $http) {	

	function all() {
	  var deferred = $q.defer(),
	      url      = 'http://localhost:5000/api/meetups/all';
	  $http.get(url).then(function (resp) {
	    deferred.resolve(resp.data)
	  }, function (err) {
	    deferred.reject(err);
	  });

	  return deferred.promise;
	}

	function events(params) {
		var deferred = $q.defer(),
		    url      = '/api/meetups/:group_name';

		url = url.replace(':group_name', params.group_name);

		$http.get(url).then(function (resp) {
		  deferred.resolve(resp.data)
		}, function (err) {
		  deferred.reject(err);
		});

		return deferred.promise;	
	}

	return {
		all: all,
		events: events
	}


});