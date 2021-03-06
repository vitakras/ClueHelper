(function(){
	'use strict';
	
	angular.module('ClueHelper')
		.service('ClueService', ClueService);
		
	function ClueService() {
		// Variables
		var globalCardsName = "Global Cards";
		var vm = this;
		vm.cards = ClueCards(); // array of game cards
		vm.cardNames = CardNames();
		vm.game = null;
		vm.players = []; // Players from the game
		
		
		// functions
		vm.createNewGame = createNewGame;
		vm.getGameCards = getGameCards;
		vm.getPlayerNames = getPlayerNames;
		vm.gameExists = gameExists;
		vm.getPlayerCards = getPlayerCards; // returns cards of players and global
		vm.getClueCardByType = getClueCardByType;
		vm.getCardNamesByType = getCardNamesByType;
		vm.addCard = addCard;
		vm.addTurn = addTurn;
		vm.getPlayers = getPlayers; // returns a list of players
		
		function getPlayers() {
			return vm.players;
		}
		
		function addTurn(turn) {
			vm.game.addTurn(turn);
			vm.game.updateCards();
		}
		
		function addCard(playerName, cardName) {
			var added = false;
			
			if (playerName == globalCardsName) {
				added = true;
				vm.game.setCardState(cardName, cardState.OWN);
			} else {
				var length = vm.players.length;
				for (var i = 0; i < length; i++){
					if (vm.players[i].name == playerName) {
						added = true;
						vm.players[i].setCardState(cardName, cardState.OWN);
						break;
					}
				}
			}
			
			// recalculates everything if card was added
			if (added) {
				vm.game.updateCards();
			}
			
			return added;
		}
		
		/**
		 * name of the person
		 * type of card
		 */
		function getClueCardByType(name, cardType) {
			var gameCards = [];
			
			if (name == globalCardsName) {
				gameCards = getCardType(vm.game.cards, cardType);
			} else {
				var length = vm.players.length;
				for (var i = 0; i < length; i++){
					if (vm.players[i].name == name) {
						gameCards = getCardType(vm.players[i].cards, cardType);
						break;
					}
				}
			}
			
			return gameCards;
		}
		
		//private function gets cards by type from card list
		function getCardType(cards, cardType) {
			var length = vm.cardNames.length;
			var gameCards = [];
			
			for(var i = 0; i < length; i ++) {
				if (cards[vm.cardNames[i]].type == cardType) {
					gameCards.push({
						name : vm.cardNames[i],
						state : cards[vm.cardNames[i]].state
					});
				}
			}
			
			return gameCards;
		}
		
		// Returns a hash of cards for each player including global cards
		function getPlayerCards() {
			if (!vm.gameExists()) {
				return new Object();
			}
			
			var playerCards = new Object();
			var length = vm.players.length;
			playerCards[globalCardsName] = vm.game.cards;
			
			for(var i = 0; i < length; i++){
				playerCards[vm.players[i].name] = vm.players[i].cards;
			}
			
			return playerCards;
		}
		
		//Checks if game service object exists
		function gameExists() {
			if (typeof vm.game === 'undefined' || vm.game === null) {
				return false;
			} else {
				return true;
			}
		}
		
		function getPlayerNames() {
			var length = vm.players.length;
			var names = new Array();
			
			names.push(globalCardsName); // Adds Global as a player
			
			for(var i = 0; i < length; i++){
				names.push(vm.players[i].name);
			}
			
			return names;
		}
		
		// Creates a new game
		function createNewGame (names) {
			if (names.length < 2) {
				console.log("need atleast 2 players");
				return false;
			} else {
				vm.players = new Array();
				var length = names.length;
				
				// adds players to the game
				for(var i = 0; i < length; i++) {
					var player = new Person(names[i]);
					vm.players.push(player);
				}
				
				vm.game = new ClueGame(vm.players);
				/*
				vm.game.setCardState(cardName.Scarllet,cardState.ENVELOPE);
				vm.game.setCardState(cardName.Game_Room,cardState.OWN);
				vm.game.setCardState(cardName.Kitchen,cardState.NOT_OWN); */
				return true;
			}
		}
		
		// Returns an array of cards in the game
		function getGameCards () {
			return vm.cards;
		}
		
		// Returns a list of card Names based on type
		function getCardNamesByType(cardType) {
			var length = vm.cardNames.length;
			var cards = [];
			
			for (var i = 0; i < length; i++) {
				if(vm.cards[vm.cardNames[i]].type == cardType) {
					cards.push(vm.cardNames[i]);
				}
			}
			
			return cards;
		}
	}	
})();