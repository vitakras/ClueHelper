/**
 * This Function is responsible for describing each player in the game 
 */
function Person (name) {
	// Variables
	var vm = this;
	vm.name = name; // Name of the player
	vm.cards = new ClueCards;
	
	// Functions
	vm.setCardState = setCardState;
	vm.hasCardInList = hasCardInList;
	
	/**
	 * Sets the state of the card
	 */
	function setCardState(cardName, state) {
		vm.cards[cardName].state = state;
	}
	
	/**
	 * Checks if a player one of the cards from
	 * the list
	 */
	function hasCardInList(cardNames) {
		var hasCard = false;
		
		for(var i = 0, length = cardNames.length; i < length; i++) {
			if (vm.cards[cardNames[i]].state == cardState.OWN) {
				hasCard = true;
			}
		}
		
		return hasCard;
	}
}