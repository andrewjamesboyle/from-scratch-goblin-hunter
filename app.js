// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const playerFormEl = document.getElementById('player-form');
const playerInfoEl = document.getElementById('player-info');
const goblinFormEl = document.getElementById('goblin-form');
const goblinContainerEl = document.getElementById('goblins-array-container');


// let state
let playerHp = 10;

let goblinsArray = [
    {
        name: 'Becky',
        hp: 7
    },
    {
        name: 'Jeffsey',
        hp: 3
    }
];

let defeatedGoblins = 0;

displayGoblins();


playerFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(playerFormEl);
    const userName = data.get('player-name');

    if (userName === '') {
        playerInfoEl.textContent = `Your username is Username and your HP is ${playerHp}`;
    } else {
        playerInfoEl.textContent = `Your username is ${userName} and your HP is ${playerHp}`;
    }
});

goblinFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(goblinFormEl);
    const newGoblinName = data.get('goblin-name');

    const newGoblin = {
        name: newGoblinName,
        hp: 3
    };

    goblinsArray.push(newGoblin);

    displayGoblins();

    goblinFormEl.reset();  
});


function displayGoblins() {
    goblinContainerEl.textContent = '';

    for (let goblin of goblinsArray) {
        const goblinEl = renderGoblin(goblin);

        if (goblin.hp > 0) {
            goblinEl.addEventListener('click', () => {
                if (Math.random() > 0.5) {
                    goblin.hp--;
                    alert(`Smack! ${goblin.name} oughta feel that one in the morning!`);
                } else {
                    alert(`You missed ${goblin.name}!`);
                }
                if (Math.random() > 0.7) {
                    playerHp--;
                    alert(`You got smacked by ${goblin.name}!`);
                    console.log(playerHp);
                }
                if (goblin.hp === 0) {
                    defeatedGoblins++;
                    console.log(defeatedGoblins);
                }
                displayGoblins();
            });
        }
        goblinContainerEl.append(goblinEl);
      }
      
      
    }

displayGoblins();
// }
// // iterate over the array and render and append new p tags for all the goblins in the array


//   }
// set textContent of each p tag to its corresponding state (i.e. goblinNameEl.textContent = goblin.name, and goblinHpEl.textContent = goblin.hp)
// append all new goblin elements (goblinNameEl, goblinHpEl) inside of goblinContainerEl
// return goblinContainerEl

  // goblinContainerEl.append(various goblinElements);
  // goblinContainerEl.textContent = `${goblinName} 😈 ${goblinHp}`