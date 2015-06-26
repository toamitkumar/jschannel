/* jslint node: true */
'use strict';

var Static = require('./static'),
		meetup = require('./lib/controllers/meetup'),
		user = require('./lib/controllers/user'),
		conference = require('./lib/controllers/conference');

// API Server Endpoints
exports.endpoints = [
	{ method: 'GET',  
		path: '/{params*}', 
		config: Static.get 
	},
	{ method: 'GET', 
		path: '/api/meetups', 
		config: {
			handler: meetup.meetups
		}
	},
	{ method: 'GET', 
		path: '/api/meetups/{meetup_id}', 
		config: {
			handler: meetup.details
		}
	},
	{ method: 'GET', 
		path: '/api/meetups/all', 
		config: {
			handler: meetup.all
		}
	},
	{
		method: 'POST',
		path: '/api/users/subscribe',
		config: user.subscribe
	},
	{
		method: 'GET',
		path: '/api/users/unsubscribe',
		config: user.unsubscribe
	},
	{
		method: 'GET',
		path: '/api/conference',
		config: {
			handler: conference.getData
		}
	}
];