//objects with rank, suits, images
const cards = [
{ 
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{ 
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{ 
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{ 
rank: "king",
suit: "queen-of-diamonds" ,
cardImage: "images/king-of-diamonds.png",
}
];
//empty var
var cardsInPlay =[ ];


//checking for match function
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
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
function flipCard() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} else { }
} 
/*
 console.log(cardsInPlay.length);
 */


//create a board function with loop inside
 function createBoard() {
 	for (var i = 0; i < cards.length; i++) {
 		var cardElement = document.createElement('img');
 		cardElement.setAttribute('src', 'images/back.png');
 		cardElement.setAttribute('data-id', i);
 		cardElement.addEventListener('click', flipCard);
 		document.getElementById('game-board').appendChild(cardElement);
 	}
 }
 createBoard();
 

