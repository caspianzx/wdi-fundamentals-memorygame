//array of cards
const cards = ["queen","queen","king","king"];
//empty var
var cardsInPlay =[ ];
// first item in card
var cardOne = (cards[0]);
//add first card to cardsInPlay
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

// third item in card
var cardTwo = (cards[2]);
//add first card to cardsInPlay
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

/*if (cardsInPlay.length === 2) {
 console.log(cardsInPlay);
}*/

console.log(cardsInPlay);

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You've found a match!");
} else { 
	alert("Sorry, try again.");
}
