// Type of move each player can make
var moveType = {
	PASS : 0,
	SHOW : 1
};

// Describes what move each player makes
function Move (person, moveType) {
	this.person = person;
	this.moveType = moveType;
};

// Describes the Game turn
function GameTurn (person, cardNames) {
	// Variables
	var vm = this;
	vm.person = person;
	vm.cardNames = cardNames;
	vm.moves = [];
	vm.hasShow = false; // used for faster traversing of Game turns
	
	// Functions
	vm.addPlayerMove = addPlayerMove;
	
	// adds a player move the game turn
	function addPlayerMove(move) {
		// Player does not have those cards if he or she passes
		if (move.moveType == moveType.PASS) {
			for (var i = 0, length = vm.cardNames.length; i < length; i++) {
				move.person.cards[vm.cardNames[i]].state = cardState.NOT_OWN;
			}
		} else {
			vm.hasShow = true; 
		}
		
		vm.moves.push(move);
	};
};