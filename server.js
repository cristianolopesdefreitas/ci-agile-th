/**
 * Module express
 */
var express = require('express');

/**
 * Module serve Static
 */
var serveStatic = require('serve-static');

var app = express();

/**
 * Check the environment of running
 */
var client = process.env.NODE_APP_DIRECTORY === 'production' 
? '/client/dist' : '/client';

console.log('client: ', client);
console.log('environment: ', process.env.NODE_APP_DIRECTORY);

/**
 * Check if the environment variable (process.env.PORT) has a value
 */
var port = process.env.PORT || 8081;

app.use(serveStatic(__dirname + client));

app.listen(port,function(){
    console.log('localhost:'+port);
});