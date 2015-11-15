(function(){
	'use strict';
	
	angular.module('ClueHelper')
		.service('ClueService', ClueService);
		
	function ClueService() {
		// Variables
		var vm = this;
		vm.cards = ClueCards();
		vm.game = null;
		vm.players = null; // Players from the game
		
		// functions
		vm.createNewGame = createNewGame;
		vm.getGameCards = getGameCards;
		
		function createNewGame (names) {
			if (names.length < 2) {
				console.log("need atleast 2 players");
				return false;
			} else {
				vm.players = new Array(names.length);
				
				// adds players to the game
				for(var i = 0, length = names.length; i < length; i++) {
					var player = new Person(names[i]);
					vm.players.push(player);
				}
				
				vm.game = new ClueGame(vm.players);
				return true;
			}
		}
		
		// Returns an array of cards in the game
		function getGameCards () {
			return vm.cards;
		}
	}	
	
	
	
})();