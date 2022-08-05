// import functions and grab DOM elements
const playerFormEl = document.getElementById('player-form');
const playerInfoEl = document.getElementById('player-info');
const goblinFormEl = document.getElementById('goblin-form');
const goblinContainerEl = document.getElementById('goblins-array-container');


// let state
let playerHp = 10;
let goblinsArray = [];
let defeatedGoblins = 0;


playerFormEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(playerFormEl);
  const userName = data.get('player-name');

  playerInfoEl.textContent = `Your username is ${userName} and your HP is ${playerHp}`;
});

goblinFormEl.addEventListener('submit', (e) => {
  // this form should take user goblin name input and create new goblin boxes
  // use data.get and store this as a variable ('i.e. newGoblin')
  // create a new goblin object with a name and HP property
  // push this goblin object into the array of goblins
  // call renderGoblin()
  // inside renderGoblin...
  // iterate over the array and render and append new p tags for all the goblins in the array
  // set textContent of each p tag to its corresponding state (i.e. goblinNameEl.textContent = goblin.name, and goblinHpEl.textContent = goblin.hp)
  // append all new goblin elements (goblinNameEl, goblinHpEl) inside of goblinContainerEl
  //return goblinContainerEl
  

  e.preventDefault();

  const data = new FormData(goblinFormEl);
  const newGoblinName = data.get('goblin-name');

  const newGoblin = {
    name: newGoblinName,
    hp: 3
  }

  goblinsArray.push(newGoblin);
  renderGoblin(newGoblin);
  displayGoblin();
  
});

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function displayGoblin()

function renderGoblin(anyGoblin)
// clear DOM
  goblinContainerEl.textContent = '';

// iterate over the array and render and append new p tags for all the goblins in the array
  for (let goblin of goblinsArray) {
    const newGoblinEl = document.createElement('p');
    
    newGoblinEl.textContent = goblin.name;

    console.log()

  }
// set textContent of each p tag to its corresponding state (i.e. goblinNameEl.textContent = goblin.name, and goblinHpEl.textContent = goblin.hp)
// append all new goblin elements (goblinNameEl, goblinHpEl) inside of goblinContainerEl
// return goblinContainerEl

  goblinContainerEl.append(various goblinElements);
  goblinContainerEl.textContent = `${goblinName} 😈 ${goblinHp}`;