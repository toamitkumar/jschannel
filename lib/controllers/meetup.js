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

function getDetails(req, res) {
	MeetupService.getPastEvents(req.params.meetup_id, function(err, response) {
		if(err) {
			res('No meetup found');
		} else {
			res(response);
		}
	});
}


module.exports = {
	meetups: meetups,
	details: getDetails
}