import { renderGoblin } from './render-utils.js';

const playerFormEl = document.getElementById('player-form');
const playerInfoEl = document.getElementById('player-info');
const playerHpEl = document.getElementById('player-hp');
const goblinFormEl = document.getElementById('goblin-form');
const goblinContainerEl = document.getElementById('goblins-array-container');
const defeatedGoblinsEl = document.getElementById('player-score');

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
        playerInfoEl.textContent = `Your username is Username. How original!`;
    } else {
        playerInfoEl.textContent = `Hello ${userName}.`;
    }

    playerHpEl.textContent = `Your HP is ${playerHp}`;
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

        if (goblin.hp > 0 && playerHp > 0) {
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
                }
                if (goblin.hp === 0) {
                    defeatedGoblins++;
                    alert(`You killed ${goblin.name}!!! Bye Felicia!`);
                }
                playerHpEl.textContent = `Your HP is ${playerHp}`;
                displayGoblins();
            });
        } 
        goblinContainerEl.append(goblinEl);
    }
    
    if (playerHp === 0) {
        alert('You died! Hope it was worth it!! GAME OVER');
    }
    defeatedGoblinsEl.textContent = `You have defeated ${defeatedGoblins} goblin(s)! Keep up the good work!`;
    
}

displayGoblins();