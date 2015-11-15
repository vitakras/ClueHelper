(function(){
	'use strict';
	
	angular.module('ClueHelper')
		.controller('HomeController', HomeController);
		
	function HomeController() {
		var vm = this;
		
		vm.cards = CardNames();
	}
})();