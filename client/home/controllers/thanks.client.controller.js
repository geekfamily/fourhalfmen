'use strict';

// Create the 'home' controller
angular.module('home').controller('ThanksController', ['$scope', '$location', 'Authentication',
    function($scope, $location, Authentication) {
        // Get the user's 'fullName'
        $scope.isLoggedIn = Authentication.user ? true : false;
        $scope.name = Authentication.user ? Authentication.user.fullName : '';

        $scope.home = function() {
            $location.path('home');
        }
    }
]);
