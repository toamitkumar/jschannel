/* jslint node: true */
'use strict';


var request = require('superagent'),
		apiKey = '527d91d412e35273245756f546f010',
		eventEndpoint = 'https://api.meetup.com/2/events?',
		groupMetaEndpoint = 'https://api.meetup.com/2/groups?',
		_ = require('lodash'),
		qs = require('qs'),
		URL = require('url');

function getParams() {
	return {
		key: apiKey,
		status: 'upcoming',
		group_urlname: '',
		desc: false,
		page: 1
	}
}

function getUpcomingEvents(group_name, callback) {
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
			eventUrl = eventEndpoint+queryString;

	// generate request
	request
	.get(URL.format(eventUrl))
	.end(function(res) {
    callback(
      res.error,
      (!Object.keys(res.body).length) ? JSON.parse(res.text) : res.body
	  );
  });
}

function metadata(group_name, callback) {
	var queryString = qs.stringify({key: apiKey, group_urlname: group_name}),
			eventUrl = groupMetaEndpoint+queryString;

	// generate request
	request
	.get(URL.format(eventUrl))
	.end(function(res) {
    callback(
      res.error,
      (!Object.keys(res.body).length) ? JSON.parse(res.text) : res.body
	  );
  });
}

module.exports = {
	getUpcomingEvents: getUpcomingEvents,
	getPastEvents: getPastEvents,
	metadata: metadata
};
