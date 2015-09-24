// Invoke 'strict' JavaScript mode
'use strict';

var Order = require('mongoose').model('Order');

// Create a new 'create' controller method
exports.create = function(req, res, next) {
	// Create a new instance of the 'User' Mongoose model
	var order = new Order(req.body);

	// Use the 'User' instance's 'save' method to save a new user document
	order.save(function(err) {
		if (err) {
			// Call the next middleware with an error message
			return next(err);
		} else {
			// Use the 'response' object to send a JSON response
			res.json(order);
		}
	});
};

// Create a new 'list' controller method
exports.list = function(req, res, next) {
	// Use the 'User' static 'find' method to retrieve the list of users
	User.find({}, function(err, users) {
		if (err) {
			// Call the next middleware with an error message
			return next(err);
		} else {
			// Use the 'response' object to send a JSON response
			res.json(users);
		}
	});
};

// Create a new 'read' controller method
exports.read = function(req, res) {
	// Use the 'response' object to send a JSON response
	res.json(req.user);
};

// Create a new 'update' controller method
exports.update = function(req, res, next) {
	// Use the 'User' static 'findByIdAndUpdate' method to update a specific user
	User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
		if (err) {
			// Call the next middleware with an error message
			return next(err);
		} else {
			// Use the 'response' object to send a JSON response
			res.json(user);
		}
	})
};

// Create a new 'delete' controller method
exports.delete = function(req, res, next) {
	// Use the 'User' instance's 'remove' method to save a new user document
	req.order.remove(function(err) {
		if (err) {
			// Call the next middleware with an error message
			return next(err);
		} else {
			// Use the 'response' object to send a JSON response
			res.json(req.user);
		}
	})
};

// Create a new 'userByID' controller method
exports.orderByID = function(req, res, next, id) {
	// Use the 'User' static 'findOne' method to retrieve a specific user
	Order.findOne({
		_id: id
	}, function(err, order) {
		if (err) {
			// Call the next middleware with an error message
			return next(err);
		} else {
			// Set the 'req.user' property
			req.order = order;

			// Call the next middleware
			next();
		}
	});
};
