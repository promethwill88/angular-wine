angular.module('vinoApp', ['ngRoute'])
	.config(config);

// Routes

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/wines/index.html',
			controller: 'winesIndexController',
			controllerAs: 'winesIndexCtrl'
		})
		.when('/wines/:id', {
			templateUrl: 'templates/wines/show.html',
			controller: 'winesShowController',
			controllerAs: 'winesShowCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider
		.html5Mode({
			enabled: true,
			requireBase: false
		});
}