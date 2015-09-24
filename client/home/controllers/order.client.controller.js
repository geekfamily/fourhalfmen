'use strict';

// Create the 'home' controller
angular.module('home').controller('OrderController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {

		$scope.model = {
            orderId: "",
            email: "",
            name: "",
            products:
                [
                    {
                        'style': 'Mens',
                        'sizes': [
                            {
                                'id': 'tshirt-mens-xlarge',
                                'title': 'X-Large',
                                'qty': '0'
                            },
                            {
                                'id': 'tshirt-mens-large',
                                'title': 'Large',
                                'qty': '0'
                            },
                            {
                                'id': 'tshirt-mens-medium',
                                'title': 'Medium',
                                'qty': '0'
                            },
                            {
                                'id': 'tshirt-mens-small',
                                'title': 'Small',
                                'qty': '0'
                            }
                        ]
                    },
                    {
                        'style': 'Womens',
                        'sizes': [
                            {
                                'id': 'tshirt-womens-xlarge',
                                'title': 'X-Large',
                                'qty': '0'
                            },
                            {
                                'id': 'tshirt-womens-large',
                                'title': 'Large',
                                'qty': '0'
                            },
                            {
                                'id': 'tshirt-womens-xmedium',
                                'title': 'Medium',
                                'qty': '0'
                            },
                            {
                                'id': 'tshirt-womens-small',
                                'title': 'Small',
                                'qty': '0'
                            }
                        ]
                    },
                    {
                        'style': 'Womens V Neck',
                        'sizes': [
                            {
                                'id': 'tshirt-womensv-xlarge',
                                'title': 'X-Large',
                                'qty': '0'
                            },
                            {
                                'id': 'tshirt-womensv-xlarge',
                                'title': 'Large',
                                'qty': '0'
                            },
                            {
                                'id': 'tshirt-womensv-xmedium',
                                'title': 'Medium',
                                'qty': '0'
                            },
                            {
                                'id': 'tshirt-womensv-small',
                                'title': 'Small',
                                'qty': '0'
                            }
                        ]
                    },
                    {
                        'style': 'Youth',
                        'sizes': [
                            {
                                'id': 'tshirt-youth-xlarge',
                                'title': 'X-Large',
                                'qty': '0'
                            },
                            {
                                'id': 'tshirt-youth-xlarge',
                                'title': 'Large',
                                'qty': '0'
                            },
                            {
                                'id': 'tshirt-youth-xmedium',
                                'title': 'Medium',
                                'qty': '0'
                            },
                            {
                                'id': 'tshirt-youth-small',
                                'title': 'Small',
                                'qty': '0'
                            }
                        ]
                    }
        ]}  ;

        $scope.master = {};

		// Get the user's 'fullName'
		$scope.isLoggedIn = Authentication.user ? true : false;
		$scope.name = Authentication.user ? Authentication.user.fullName : '';

		$scope.decrement = function(item){
            if (item.qty>0) {
                item.qty--;
            }
        }

        $scope.increment = function(item){
            if (item.qty<20) {
                item.qty++;
            }
        }

        $scope.submit = function(order) {
            $scope.master = angular.copy(order);
            order.orderId = "FHM-"+Date.now().toString();
            $http.post('/orders', order).
                then(function(response) {
                    $location.path('thanks');
                }, function(response) {
                    response.toString();
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        };

        $scope.reset = function() {
            $scope.model = angular.copy($scope.master);
        };

        $scope.master = $scope.model;
        $scope.reset();

    }
]);
