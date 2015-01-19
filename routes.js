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
			// cors: {origin: ['http://localhost:8000']}
		}
	},
	{ method: 'GET', 
		path: '/api/meetups/{meetup_id}', 
		config: {
			handler: meetup.details
		}
	}//,
	// {
	// 	method: 'POST',
	// 	path: '/api/subscribes'
	// }
];