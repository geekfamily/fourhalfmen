'use strict';

// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
var mongoose = require('./app/config/mongoose'),
    express = require('./app/config/express'),
    passport = require('./app/config/passport');

// Create a new Mongoose connection instance
var db = mongoose();

// Create a new Express application instance
var app = express();

// Configure the Passport middleware
var passport = passport();

// Use the Express application instance to listen to the '3000' port
app.listen(3030);

// Log the server status to the console
console.log('Server running at http://localhost:3030/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;