/* jslint node: true */
'use strict';

var async = require('async'),
		MeetupService = require('../services/meetup');

function meetups(req, res) {
	res([
		{name: 'JSChannel Bengaluru', group: 'JSChannel-Bengaluru'},
		{name: 'JSChannel NCR', group: 'JSChannel-NCR'},
		{name: 'JSChannel London', group: 'JSChannel-London'},
		{name: 'JSChannel Mumbai', group: 'JSChannel-Mumbai'}
	]);
}

function all(req, res) {
	async.parallel({
		bengaluru: function(callback) {
			details('JSChannel-Bengaluru', function(err, detail) {
				console.log('blr', detail);
				callback(detail);
			});
		},
		// ncr: function(callback) {
		// 	details('JSChannel-NCR', function(err, detail) {
		// 		console.log('ncr', detail);
		// 		callback(detail)
		// 	});
		// },
		// london: function(callback) {
		// 	details('JSChannel-London', function(err, detail) {
		// 		console.log('lon', detail);
		// 		callback(detail)
		// 	});
		// },
		// mumbai: function(callback) {
		// 	details('JSChannel-Mumbai', function(err, detail) {
		// 		console.log('mum', detail);
		// 		callback(detail)
		// 	});
		// }
	}, function(err, results) {
		res(results);
	});
}

function details(group_name, cb) {
	var details = {};

	async.parallel({
			metadata: function(callback) {
				var meta = {};
				MeetupService.metadata(group_name, function(err, response) {
					if(!err) {
						meta = {
							members: response.results[0].members,
							rating: response.results[0].rating,
							name: response.results[0].name,
							url: response.results[0].link
						}
					}
				});
				callback(null, meta);
			},
			upcoming: function(callback) {
				var upcomingEvents = {};
				MeetupService.getUpcomingEvents(group_name, function(err, response) {
					if(!err) {
						upcomingEvents = {
							url: response.results[0].event_url,
							title: response.results[0].name,
							rsvp: response.results[0].yes_rsvp_count,
							location: response.results[0].venue.name
						};
					}
				});
				callback(null, upcomingEvents)
			},
			past: function(callback) {
				var pastEvents = {};
				MeetupService.getPastEvents(group_name, function(err, response) {
					if(!err) {
						pastEvents = {
							url: response.results[0].event_url,
							title: response.results[0].name,
							rsvp: response.results[0].yes_rsvp_count,
							location: response.results[0].venue.name,
							rating: response.results[0].rating.average
						};
					}
				});
				callback(null, pastEvents)
			}
		}, function(err, results) {
			cb(results);
	});
}

function getDetails(group_name) {
	var details = {};
	// MeetupService.getUpcomingEvents(group_name, function(err, data) {
	// 	if(err) {
	// 		details.upcoming = {};
	// 	} else {
	// 		details.upcoming = 
	// 	}
	// });

	MeetupService.getPastEvents(req.params.meetup_id, function(err, response) {
		if(err) {
			res('No meetup found');
		} else {
			res(response);
		}
	});
}

function getMetaData() {
	MeetupService.metadata(req.params.meetup_id, function(err, response) {
		if(err) {
			res('No meetup found');
		} else {
			res(response);
		}
	});	
}


module.exports = {
	meetups: meetups,
	details: getDetails,
	all: all
}