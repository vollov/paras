'use strict';

angular.module('ocblApp', ['ui.router', 'auth', 'page'])
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'PageCtrl', function($stateProvider, $urlRouterProvider, $httpProvider, PageCtrl) {
	$stateProvider.state('home', {
		url : '/home',
		templateUrl : 'views/home.html',
		controller : PageCtrl,
		controllerAs: 'vm',
		data:{
			requireLogin: false
		}
		//controller : 'MainCtrl'
	});
//	.state('rules', {
//		url : '/rules',
//		templateUrl : 'views/rules.html',
//		controller : 'PageCtrl',
//		controllerAs: 'vm',
//		data:{
//			requireLogin: false
//		}
//	})
//	.state('terms', {
//		url : '/terms',
//		templateUrl : 'views/terms.html',
//		controller : 'PageCtrl',
//		controllerAs: 'vm',
//		data:{
//			requireLogin: false
//		}
//	})
//	.state('privacy', {
//		url : '/privacy',
//		templateUrl : 'views/privacy.html',
//		controller : 'PageCtrl',
//		controllerAs: 'vm',
//		data:{
//			requireLogin: false
//		}
//	})
//	.state('contacts', {
//		url : '/contacts',
//		templateUrl : 'views/contacts.html',
//		controller : 'PageCtrl',
//		controllerAs: 'vm',
//		data:{
//			requireLogin: false
//		}
//	});
  $urlRouterProvider.otherwise('home');
}])
.run(['$rootScope','$state','$http', 'AuthService',function ($rootScope,$state,$http,AuthService) {
	// Update xsrf $http headers to align with Django's defaults
	$http.defaults.xsrfHeaderName = 'X-CSRFToken';
	$http.defaults.xsrfCookieName = 'csrftoken';
	
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
		var requireLogin = toState.data.requireLogin;
		console.log('state change event, isAuthenticated=%s', AuthService.isAuthenticated());
		// typeof $rootScope.currentUser === 'undefined'
		if (requireLogin && (!AuthService.isAuthenticated())) {
			event.preventDefault();
			// code for unauthorized access
			console.log('state change event -- unauthorized');
			$state.go('login');
		}
	});
}]);
