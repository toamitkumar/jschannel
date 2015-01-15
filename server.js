/* jslint node: true */
'use strict';

var Hapi = require('hapi'),
	Routes = require('./routes');
    
    
var app = {};
// app.config = Config;

var server = new Hapi.Server();
server.connection({ port: 8000});

server.route(Routes.endpoints);

server.start(function () {
  console.log('Server started ', server.info.uri);
});