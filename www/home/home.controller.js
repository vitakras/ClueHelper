(function(){
	'use strict';
	
	angular.module('ClueHelper')
		.controller('HomeController', ['ClueService', HomeController]);
		
	function HomeController(clueService) {
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
		
		// return {name,state}
		/*
		vm.cluePeople = clueService.getClueCardByType(vm.names[0], cardTypes.PERSON);
		vm.clueWeapons = clueService.getClueCardByType(vm.names[0], cardTypes.WEAPON);
		vm.clueRooms = clueService.getClueCardByType(vm.names[0], cardTypes.ROOM); */
		vm.getColor = getColor;
		vm.updateSelectedPlayer = updateSelectedPlayer;
		
		function updateSelectedPlayer () {
			console.log(vm.selectedName);
			
			
			//vm.cluePeople = clueService.getClueCardByType(vm.selectedName, cardTypes.PERSON);
			//vm.clueWeapons = clueService.getClueCardByType(vm.selectedName, cardTypes.WEAPON);
			//vm.clueRooms = clueService.getClueCardByType(vm.selectedName, cardTypes.ROOM);
		}
		
		//Functions	
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