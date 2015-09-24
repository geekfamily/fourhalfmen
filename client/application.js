// Invoke 'strict' JavaScript mode
'use strict';

// Set the main application name
var mainApplicationModuleName = 'myapp';

// Create the main application
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ui.router', 'home', 'components', 'users']);
mainApplicationModule.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){

		// For any unmatched url, send to /home
		$urlRouterProvider.otherwise("/home");

		$stateProvider
			.state('home', {
				url: "/home",
				templateUrl: "home/views/home.client.view.html",
				controller: "HomeController"
			})
			.state('order', {
				url: "/order",
				templateUrl: "home/views/order.client.view.html",
				controller: "OrderController"
			})
			.state('thanks', {
				url: "/thanks",
				templateUrl: "home/views/thanks.client.view.html",
				controller: "ThanksController"
			})
	}]);


// Fix Facebook's OAuth bug
//if (window.location.hash === '#_=_') window.location.hash = '#!';

// Manually bootstrap the AngularJS application
//angular.element(document).ready(function() {
//	angular.bootstrap(document, [mainApplicationModuleName]);
//});