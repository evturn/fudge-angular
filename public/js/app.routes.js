angular.module('fudgeRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
	$routeProvider

		.when('/', {
			templateUrl	 : 'views/pages/home.html',
			controller	 : 'homeController',
			controllerAs : 'home'
		})
		.when('/about', {
			templateUrl	 : 'views/pages/about.html',
			controller 	 : 'aboutController',
			controllerAs : 'about'
		})
		.when('/contact', {
			templateUrl	 : 'view/pages/contact.html',
			controller 	 : 'contactController',
			controllerAs : 'contact'
		});


		// nice looking urls
		$locationProvider.html5Mode(true);

});