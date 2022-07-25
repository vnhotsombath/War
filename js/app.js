/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

// start with markup for the basic layout of the UI
// Listing constants
//classCard // suit, value

/*----- constants -----*/
const suits = ['c', 'd', 'h', 's'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const game = {
    players: [
        {name: 'player', wonDeck:[]},
        {name: 'computer', wonDeck: []}, 
    ], 
    winner: null,
    deck: [],
    
};
const remainingText = document.getElementById('remaining'); //where can I add this into html
const deal = document.getElementById('draw');

// Build a 'master' deck of 'card' objects used to create shuffled decks
const masterDeck = buildMasterDeck();
renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
let scores;
let winner;
let choices;
let shuffledDeck;


/*----- cached element references -----*/
const playerScoreEl= document.querySelector('#playerScore');
const comScoreEl= document.querySelector('#comScore');
const choicesEl= {
    player: {
        borderEl: document.querySelector('#playerScore'),
        imgEl: document.querySelector('#playerScore > img')
    },
   computer: {
        borderEl:document.querySelector('#comScore'),
        imgEl: document.querySelector('#comScore > img')
    }
}
const shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', renderNewShuffledDeck);


/*----- functions -----*/
function getNewShuffledDeck(){
const tempDeck=[...masterDeck];
const newShuffledDeck= [];
while (tempDeck.length) {
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
}
return newShuffledDeck;
}

