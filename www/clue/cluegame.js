function ClueGame(people) {
	// Variables
	var vm = this;
	vm.people = people;
	vm.cards = new ClueCards();
	vm.turns = new Array();
	
	// Functions
	vm.setCardState = setCardState;
	vm.updateCards = updateCards;
	vm.addTurn = addTurn;
	vm.knownCardCount = knownCardCount;
	
	/**
	 * Returns a number of cards owned or in the enveloper
	 */
	function knownCardCount(cardNames) {
		var count = 0;
		
		for (var i = 0, length = cardNames.length; i < length; i++) {
			if ((vm.cards[cardNames[i]].state == cardState.OWN) || 
				(vm.cards[cardNames[i]].state == cardState.ENVELOPE)) {
				count++;
			}
		}
		
		return count;
	}
	
	/**
	 * Adds a turn to the Clue game
	 */
	function addTurn(turn) {
		analyzeTurn(turn);
		
		// Re-analyze all the old turns
		for(var i = 0, length = vm.turns.length; i < length; i++) {
			analyzeTurn(vm.turns[i]);
		}
		
		vm.turns.push(turn);
	}
	
	/**
	 * Sets the state of the card
	 */
	function setCardState(card, state) {
		vm.cards[card].state = state;
	}
	
	/**
	 * Updates the state of the Unknow cards
	 */
	function updateCards() {
		var cardNames = new CardNames();
		
		// Go through each card
		for (var i = 0, length = cardNames.length; i < length; i++) {
			// Update only the cards with the unKnown state
			if (vm.cards[cardNames[i]].state == cardState.UNKNOWN) {
				updateGlobalCardState(cardNames[i], vm.people);
			}
		}
	}
	
	function analyzeTurn(turn) {
		// Check only ones that show a card and player does not own any of those cards
		if (turn.hasShow && !turn.person.hasCardInList(turn.cardNames)) {
			var count = vm.knownCardCount(turn.cardNames);
			
			// We don't care about the turn if we know all the cards
			if (count == 3) {
				turn.hasShow = false;
			} else if (count == 2) { // We know two of the three cards we can guess the third
				var cardNames = turn.cardNames;
				for (var i = 0, length = cardNames.length; i < length; i++) {
					// If the card is unknown state then update the found card for the 
					// player and update cards for other players
					if (vm.cards[cardNames[i]].state == cardState.UNKNOWN){
						turn.person.cards[cardNames[i]].state = cardState.OWN;
						updateGlobalCardState(cardNames[i], vm.people);
					}
				}
			}
		}
	}
	
	/**
	 * Updates the global card state by checking if 
	 * a person ether has a card or it is known that
	 * no one has that card
	 */
	function updateGlobalCardState(cardName, people) {
		// Variables
		var isInEnvelope = true;
		var state = cardState.UNKNOWN;
		
		for(var i = 0, length = people.length; i < length; i++) {
			if (people[i].cards[cardName].state == cardState.OWN) { // if a player has the card 
				isInEnvelope = false;
				state = cardState.OWN;
				break; // no point of looking at other cards
			} else if (people[i].cards[cardName].state == cardState.UNKNOWN) {
				isInEnvelope = false;
			}
		}
		
		if (isInEnvelope) {
			vm.cards[cardName].state = cardState.ENVELOPE; // update state then
		} else if (state == cardState.OWN) {
			vm.cards[cardName].state = state;
			
			// Update other player cards as not owned
			for(var i = 0, length = people.length; i < length; i++) {
				if (people[i].cards[cardName].state != cardState.OWN) { 
					people[i].cards[cardName].state = cardState.NOT_OWN;
				}
			}
		}
	}
}