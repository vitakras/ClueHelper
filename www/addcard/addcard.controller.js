(function() {
	'use strict';
	
	angular.module('ClueHelper')
		.controller('AddCardController', ['$state', 'ClueService', AddCardController]);
	
	function AddCardController($state, clueService) {
		var vm = this;
		vm.names = clueService.getPlayerNames(); // player names
		vm.selectedName = vm.names[0]; // selected player name
		
		// Select for cardTypes
		vm.cardTypes = [{
			name : "Person",
			cardType : cardTypes.PERSON
		},{
			name : "Weapon",
			cardType : cardTypes.WEAPON
		},{
			name : "Room",
			cardType : cardTypes.ROOM
		}];
		vm.selectedType = vm.cardTypes[0].cardType;
		
		vm.peopleCards = clueService.getCardNamesByType(cardTypes.PERSON);
		vm.weaponCards = clueService.getCardNamesByType(cardTypes.WEAPON);
		vm.roomCards = clueService.getCardNamesByType(cardTypes.ROOM);
		vm.selectedCard = '';
		
		// function
		vm.isActiveCard = isActiveCard;
		vm.addCard = addCard;
		
		function isActiveCard(cardType) {
			if (vm.selectedType == cardType) {
				return true;
			} else {
				false;
			}
		}
		
		function addCard() {
			console.log(vm.selectedName);
			console.log(vm.selectedCard);
			if (vm.selectedCard.length > 0 && vm.selectedName.length > 0) {
				clueService.addCard(vm.selectedName, vm.selectedCard);
				
			} else {
				console.log("card not selected");
			}
		}
	}	
		
})();