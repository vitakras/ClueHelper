(function() {
	'use strict';
	
	angular.module('ClueHelper')
		.controller('NewGameController', ['$state', '$ionicHistory','ClueService', NewGameController]);
		
	function NewGameController($state,$ionicHistory, clueService) {
		// variables
		var vm = this;
		vm.players = [];
		vm.player = '';
		
		// Functions
		vm.addPlayer = addPlayer;
		vm.removePlayer = removePlayer;
		vm.createNewGame = createNewGame;
		
		function addPlayer() {
			if (vm.player.length > 0) {
				vm.players.push(vm.player);
				vm.player = '';
			}
		};
		
		function removePlayer(index) {
        	vm.players.splice(index, 1);
      	};
		
		function createNewGame() {
			var pass = clueService.createNewGame(vm.players);
			
			if (pass) {
				vm.players = [];
				
				console.log("game created");
				$ionicHistory.nextViewOptions({
  					disableBack: true
				});
				$state.go('app.home');
			}
		}
	};
})();