//array of cards
const cards = ["queen","queen","king","king"];
//empty var
var cardsInPlay =[ ];


//checking for match function

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
/*
// flip card function with nested check match
function flipCard(cardId) {
	if (cardsInPlay.length === 1) {
		console.log("User flipped " + cards[cardId]);
		cardsInPlay.push(cards[cardId]);
		checkForMatch();
	} else {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
}
}
*/

// flip card function with nested check match
function flipCard(cardId) {
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} else { }
}



 flipCard(0);
 flipCard(1);

 console.log(cardsInPlay.length);

