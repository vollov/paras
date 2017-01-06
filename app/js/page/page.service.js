'use strict';

angular.module('page.services', [])
.constant('api_url_root', 'http://localhost:8000/api/v1')
.factory('PageService', [ '$http', 'api_url_root', function($http, api_url_root) {

	var service = {
			users : [],
			groups : [],
			key: 'user-list',
	};
	
	service.get = function(name) {
		console.log('PageService.get(' + name + ')');
		return $http.get(api_url_root + '/page/' + name);
	};
	
	return service;
}]);