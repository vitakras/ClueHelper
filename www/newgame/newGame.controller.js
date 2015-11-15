(function() {
	'use strict';
	
	angular.module('ClueHelper')
		.controller('NewGameController', NewGameController);
		
	function NewGameController() {
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
			console.log("game created");
		}
	};
})();