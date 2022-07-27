/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

// start with markup for the basic layout of the UI
//classCard // suit, value

let playerScore = 0
let comScore = 0
const cardsContainer = document.getElementById('cards')
const remainingText= document.getElementById('remaining')
const playerScoreEl = document.getElementById('playerScore')
const comScoreEl= document.getElementById('comScore')
let firstRun= true;
let cards = [];
let drawButton = document.querySelector('#btnDraw');

//event listeners 
drawButton.addEventListener('click', draw);

//functions

//button function
function draw(){
  console.log('works');  
}; 


//create a new card object with corresponding value and suit for deck

class Deck{
  constructor()// this helps to provide custom initialization that must be done before any other methods can be called on an instantiated object. This is a base class, therefore it is empty 
  {
    this.deck = [];
    this.reset();
    this.shuffle();
  }

  //create a reset function that will give players a fresh, random and shuffled set of cards
  reset(){
    this.deck= [];
    const suits = ['c', 'd', 'h', 's'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

//const deck1= new Deck();
//console.log(deck1.deck);

//shuffle the deck
shuffle(){
  const deck = this.deck;
  let m = deck.length, i;

  while(m) {
    i = Math.floor(Math.random() * m--);

    [deck[m], deck[i]= [deck[i], deck [m]]];
  }
  return this;
}
  deal(){
  return this.deck.pop();
}
  }

  const deck1 = new Deck();
  deck1.shuffle()
  console.log(deck1.deck);
  deck1.deal()
  console.log(deck1.deck);

//dealing the cards


