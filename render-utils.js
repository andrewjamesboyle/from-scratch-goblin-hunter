export function renderGoblin(goblinInfo) {
    const goblinEl = document.createElement('div');
    const emojiEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblinInfo.name;
    hpEl.textContent = goblinInfo.hp < 0 ? 0 : goblinInfo.hp;
    emojiEl.textContent = goblinInfo.hp > 0 ? '😈' : '🔥';
    
    goblinEl.append(nameEl, emojiEl, hpEl);

    return goblinEl;
}