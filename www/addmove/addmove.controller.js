(function(){
	'use strict';
	
	angular.module('ClueHelper')
		.controller('AddMoveController', ['$state','ClueService', AddMoveController]);
		
	function AddMoveController($state, clueService) {
		var vm = this;
		
		// Player to select for turn
		vm.players = clueService.getPlayers();
		vm.selectedPlayer = vm.players[0];
		
		// Cards to select for turn
		vm.peopleCards = clueService.getCardNamesByType(cardTypes.PERSON);
		vm.selectedPerson = vm.peopleCards[0];
		vm.weaponCards = clueService.getCardNamesByType(cardTypes.WEAPON);
		vm.selectedWeapon = vm.weaponCards[0];
		vm.roomCards = clueService.getCardNamesByType(cardTypes.ROOM);
		vm.selectedRoom = vm.roomCards[0];
		
		vm.movePlayer = vm.players[0];
		vm.moves = [];
		
		// Functions
		vm.addMove = addMove;
		vm.removeMove = removeMove;
		vm.addTurn = addTurn;
		vm.getColor = getColor;
		
		function addMove(isPass) {
			if (vm.movePlayer !== vm.selectedPlayer) {
				var turn = isPass ? moveType.PASS : moveType.SHOW;
				var move = new Move(vm.movePlayer, turn);
				
				// Adds the move to the list
				vm.moves.push(move);
				console.log(vm.moves.length);
			} else {
				console.log("cant add the same player");
			}
		}
		
		function removeMove(index) {
			vm.moves.splice(index, 1);	
		}
		
		function addTurn() {
			if (vm.moves.length > 0) {
				var cards = [];
				
				cards.push(vm.selectedPerson);
				cards.push(vm.selectedWeapon);
				cards.push(vm.selectedRoom);
				
				var turn = new GameTurn(vm.selectedPlayer, cards);
				var length = vm.moves.length; 
				
				for (var i = 0; i < length; i++) {
					turn.addPlayerMove(vm.moves[i]);
				}
				
				clueService.addTurn(turn);
				
				$state.go('app.home'); // go back to home controller
			} else {
				console.log("no moves");
			}
		}
		
		function getColor(move) {
			var css = "";
			switch(move) {
				case moveType.PASS:
					css = "calm-bg calm-border";
					break;
				case moveType.SHOW:
					css = "balanced-bg balanced-border";
					break;
			}
			return css;
		}
		
	}
	
})();