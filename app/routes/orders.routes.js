'use strict';

var orders = require('../../app/controllers/orders.controller');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'users' base routes
	app.route('/orders')
	   .post(orders.create)
	   .get(orders.list);

	// Set up the 'users' parameterized routes
	app.route('/orders/:orderId')
	   .get(orders.read)
	   .put(orders.update)
	   .delete(orders.delete);

    app.route('/order')
        .post(orders.create);

	// Set up the 'userId' parameter middleware
	app.param('orderId', orders.orderByID);
};
