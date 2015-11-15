// Describes the different card types
var cardTypes = {
	PERSON : 0,
	WEAPON : 1,
	ROOM   : 2
};

// Describes the diffrent states of the cards
var cardState = {
	UNKNOWN : 0,
	OWN : 1,
	NOT_OWN :2,
	ENVELOPE : 3
}

// Names of each card
var cardName = {
	// People
	Scarllet : "Scarllet",
	Plum : "Plum",
	Peacock : "Peacock",
	Green : "Green",
	Mustard : "Mustard",
	White : "White",
	
	// Weapons
	Candlestick : "Candlestick",
	Dagger : "Dagger",
	Lead_Pipe : "Lead Pipe",
	Revolver : "Revolver",
	Rope : "Rope",
	Wrench : "Wrench",
	
	// Rooms
	Courtyard : "Courtyard",
	Game_Room : "Game Room",
	Study : "Study",
	Dining_Room : "Dining Room",
	Garage : "Garage",
	Living_Room : "Living Room",
	Kitchen : "Kitchen",
	Bedroom : "Bedroom",
	Bathroom : "Bathroom"
}

// List of card Names for iteration 
function CardNames () {
	var names = new Array(21)
	
	// Names
	names[0] = cardName.Scarllet;
	names[1] = cardName.Plum;
	names[2] = cardName.Peacock;
	names[3] = cardName.Green;
	names[4] = cardName.Mustard;
	names[5] = cardName.White;
	
	// Weapons
	names[6] = cardName.Candlestick;
	names[7] = cardName.Dagger;
	names[8] = cardName.Lead_Pipe;
	names[9] = cardName.Revolver;
	names[10] = cardName.Rope;
	names[11] = cardName.Wrench;

	// Rooms
	names[12] = cardName.Courtyard;
	names[13] = cardName.Game_Room;
	names[14] = cardName.Study;
	names[15] = cardName.Dining_Room;
	names[16] = cardName.Garage;
	names[17] = cardName.Living_Room;
	names[18] = cardName.Kitchen;
	names[19] = cardName.Bedroom;
	names[20] = cardName.Bathroom;
	
	return names;
}

/**
 * Function to describe the cars list
 */
function ClueCards () {
	var cards = new Object();
	
	// People
	cards[cardName.Scarllet] = {
		"type" : cardTypes.PERSON,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Plum] = {
		"type" : cardTypes.PERSON,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Peacock] = {
		"type" : cardTypes.PERSON,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Green] = {
		"type" : cardTypes.PERSON,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Mustard] = {
		"type" : cardTypes.PERSON,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.White] = {
		"type" : cardTypes.PERSON,
		"state" : cardState.UNKNOWN
	};
	
	// Weapons
	cards[cardName.Candlestick] = {
		"type" : cardTypes.WEAPON,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Dagger] = {
		"type" : cardTypes.WEAPON,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Lead_Pipe] = {
		"type" : cardTypes.WEAPON,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Revolver] = {
		"type" : cardTypes.WEAPON,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Rope] = {
		"type" : cardTypes.WEAPON,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Wrench] = {
		"type" : cardTypes.WEAPON,
		"state" : cardState.UNKNOWN
	};
	
	// Rooms
	cards[cardName.Courtyard] = {
		"type" : cardTypes.ROOM,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Game_Room] = {
		"type" : cardTypes.ROOM,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Study] = {
		"type" : cardTypes.ROOM,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Dining_Room] = {
		"type" : cardTypes.ROOM,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Garage] = {
		"type" : cardTypes.ROOM,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Living_Room] = {
		"type" : cardTypes.ROOM,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Kitchen] = {
		"type" : cardTypes.ROOM,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Bedroom] = {
		"type" : cardTypes.ROOM,
		"state" : cardState.UNKNOWN
	};
	cards[cardName.Bathroom] = {
		"type" : cardTypes.ROOM,
		"state" : cardState.UNKNOWN
	};
	
	return cards;
}