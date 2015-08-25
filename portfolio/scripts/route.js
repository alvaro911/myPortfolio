angular.module("StaggerApp")
.config(function($routeProvider){
	$routeProvider
	.when('/about-me',{
		templateUrl: '/pages/about-me.html',
		controller: 'aboutMeCtrl'
	})
	.when('/', {
		templateUrl: '/pages/home.html',
		controller: 'staggerCtrl'
	})
	.otherwise({redirectTo:'/'});
});