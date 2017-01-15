'use strict';

angular.module('cfg', [])
.factory('cfgService', [ function() {

	var service = {
		api_host : 'api.ocbl.ca',
		api_root : '/api/v1',
	};

	service.get = function(key){
		console.log('getting key=' + service[key]);
		return service[key];
	}
	
	service.getApiUrl = function(){
		return 'http://' + service.api_host + service.api_root;
	}
	
	return service;
}]);