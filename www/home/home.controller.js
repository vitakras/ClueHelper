(function(){
	'use strict';
	
	angular.module('ClueHelper')
		.controller('HomeController', ['$state', 'ClueService', HomeController]);
		
	function HomeController($state, clueService) {
		// Variables
		var vm = this;
		vm.names = clueService.getPlayerNames();
		vm.cardNames = clueService.getGameCards();
		vm.selectedName = vm.names[0];
		
		// setup players variable
		vm.players = [];
		for (var i = 0, length = vm.names.length; i < length; i++) {
			vm.players.push({
				name : vm.names[i],
				cluePeople : clueService.getClueCardByType(vm.names[i], cardTypes.PERSON),
				clueWeapons : clueService.getClueCardByType(vm.names[i], cardTypes.WEAPON),
				clueRooms : clueService.getClueCardByType(vm.names[i], cardTypes.ROOM)
			});
		}

		// Functions
		vm.getColor = getColor;
		vm.goToAddCard = goToAddCard;
		vm.goToAddMove = goToAddMove;
		
		function goToAddMove () {
			$state.go('app.addmove');
		};
		
		function goToAddCard () {
			$state.go('app.addcard');
		};
		
			
		function getColor(state) {
			var css = "";
			switch(state) {
				case cardState.ENVELOPE:
					css = "energized-bg energized-border";
					break;
				case cardState.NOT_OWN:
					css = "assertive-bg assertive-border";
					break;
				case cardState.OWN:
					css = "balanced-bg balanced-border";
					break;
				case cardState.UNKNOWN:
					css = "positive-bg positive-border";
					break;
			}
			return css;
		}
	}
})();