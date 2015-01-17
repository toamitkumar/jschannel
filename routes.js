/* jslint node: true */
'use strict';

var Static = require('./static'),
		meetup = require('./lib/controllers/meetup')

// API Server Endpoints
exports.endpoints = [
	{ method: 'GET',  
		path: '/{params*}', 
		config: Static.get },
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
	}
];