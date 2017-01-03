'use strict';

angular.module('page.controllers', ['page.services'])
.controller('PageCtrl', ['$state','PageService',function($state, AuthService){
	var vm = this;
	
	vm.isAuthenticated = function(){
		var res = AuthService.isAuthenticated();
		console.log('NavCtrl.isAuthenticated() res =' + res);
		return res;
	}
	
	vm.user = AuthService.getToken('ocbl.user');
	
	vm.logout = function(){
		console.log('NavCtrl.logout()');
		AuthService.logout();
		$state.go('home');
	}
}])