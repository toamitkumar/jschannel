/* jslint node: true */
'use strict';


var request = require('superagent'),
		apiKey = '527d91d412e35273245756f546f010',
		endpoint = 'https://api.meetup.com/2/events?',
		_ = require('lodash'),
		qs = require('qs'),
		URL = require('url');

function getParams() {
	return {
		key: apiKey,
		status: 'upcoming',
		group_urlname: '',
		desc: false
	}
}

function getUpcomingEvents(group_name, callback) {
	console.log('group_name', group_name);
	getEvents(group_name, 'upcoming', false, function(err, response) {
		callback(err, response);
	});
}

function getPastEvents(group_name, callback) {
	getEvents(group_name, 'past', true, function(err, response) {
		callback(err, response);
	});
}

function getEvents(group_name, status, desc_order, callback) {
	var queryString = qs.stringify(_.extend(getParams(), {group_urlname: group_name, status: status, desc: desc_order})),
			eventUrl = endpoint+queryString;

	console.log('eventUrl', eventUrl, queryString);

	// generate request
	request
	.get(URL.format(eventUrl))
	.end(function(res) {
		console.log('res', res);
    callback(
      res.error,
      (!Object.keys(res.body).length) ? JSON.parse(res.text) : res.body
	  );
  });
}

module.exports = {
	getUpcomingEvents: getUpcomingEvents,
	getPastEvents: getPastEvents
};
