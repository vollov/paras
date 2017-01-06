'use strict';

angular.module('page.controllers', ['page.services'])
.controller('PageCtrl', ['$state','$stateParams','PageService',function($state, $stateParams, PageService){
	var vm = this;
	
	var currentState = $state.current.name;
	console.log('PageCtrl currentState=' + currentState);
	//activate();
	
	// initialize objects in view when loading
//	function activate(){
//		console.log('PageCtrl.activate() get page name=' + $stateParams.name);
//		
//		return PageService.get($stateParams.name).then(registerSuccessFn, registerErrorFn);
//
//		function registerSuccessFn(data, status, headers, config) {
//			// parse the block from page object
//			var page = data.data;
//			
//			console.log('get returned data from get(), page=%j', page);
//		}
//
//		function registerErrorFn(data, status, headers, config) {
//			//TODO show 500 page
//			console.error('PageCtrl.activate() get page failure!');
//		}
//		
//	}
}]);