/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

// start with markup for the basic layout of the UI
//classCard // suit, value
/*----- constants -----*/
const suits = ['d', 'c', 'h', 's'];
const cardFace = ['2','3','4','5','6','7','8','9','10','J','K','Q','A'];

/*----- app's state (variables) -----*/
let deck = [];
let players = [[],[]];
let firstRun = true;
let gameOver = false;
let drawButton = document.querySelector('#btnDraw');
let p1 = document.querySelector('#player .hand');
let p2 = document.querySelector('#player2 .hand');
let s1 = document.querySelector('#player .score');
let s2 = document.querySelector('#player2 .score');

// event listners
drawButton.addEventListener('click', draw);

//functions
//create cards to play
function buildCards(){
  deck = [];
  for(s in suits){
    let suit = suits[s][0].toUpperCase(); //returns value within const suits, 
    //loop through suits
    for(n in cardFace){
     let card = {
      suit: suits[s],
      num: cardFace[n],
      cardValue: parseInt(n) +2, //parseInt parses a string argument and returns an integer
      icon: suit

     } 
     deck.push(card);
    }
    //console.log(deck);
  }
}

//shuffle the deck 
function shuffleArray(array){
  for(let x = array.length -1;x>0;x--){
    let ii = Math.floor(Math.random() * (x+1));
    let temp = array[x];
    array[x] = array[ii];
    array [ii] = temp;
  }
  return array;
}

//dealing cards
function dealCards(array){
  for(let i=0; i<array.length; i++){
   let m = i % 2;
   players[m].push(array[i]);
  }  
  //console.log(players);
}

//drawing cards
function draw(){
  if(firstRun){
    firstRun = false;
    buildCards();
    shuffleArray(deck);
    dealCards(deck);
  }
//console.log('works');
  battle();
}

function battle(){
  if(!gameOver){
    let card1 = players[0].shift();
    let card2 = players[1].shift();
    let pot = [card1,card2];
    //update html
    p1.innerHTML = showCard(card1,0);
    p2.innerHTML = showCard(card2,0);
    //check winners
    checkWinner(card1,card2,pot);
    //update scores
    s1.innerHTML = players[0].length;
    s2.innerHTML = players[1].length;
  }else{
    outputMessage('Game Over');
  }
}

function showCard(c,p){
  let move = p * 40;
  let bgColor = (c.icon == 'H' || c.icon == 'D') ? 'red' : 'black';
  let bCard = c.num + ' & ' + c.suit + ';';
  return bCard;
}

//how to determine the winners
function outputMessage(message){
  console.log(message);
  document.getElementById('message').innerHTML = message;
}

function checkWinner(card1,card2,pot){
  if((players[0].length <= 4) || (players[1].length <= 4)){
    gameOver = true;
    return;
  }
  if(card1.cardValue > card2.cardValue){
    outputMessage('Player 1 wins');
    players[0] = players[0].concat(pot); //concat - merges 2 or more arrays. Does not change the existing arrays, returns a new array
  } else if(card1.cardValue < card2.cardValue){
    outputMessage('Computer wins');
    players[0] = players[0].concat(pot);
  } else {
    goToWar(pot);
    outputMessage('Go to War');
    //console.log('tie'); //enter the war
  }
    //console.log(players);
  }

// what will happen when there is a tie
function goToWar(pot){
  let card1, card2;
  let position = (pot.length/2);
  if((players[0].length <4) || (players[1].length <4)){
    return;
  } else {
    for(let i = 0; i < 4; i++){
      card1 = players[0].shift();
      pot = pot.concat(card1);
      p1.innerHTML += showCard(card1, (position + i));
    }
    for(let i = 0; i < 4; i++){
      card2 = players[1].shift();
      pot = pot.concat(card2);
      p2.innerHTML += showCard(card2, (position + i));
  }
  checkWinner(card1,card2,pot);
  }
}
