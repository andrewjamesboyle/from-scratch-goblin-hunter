export function renderGoblin(goblinInfo) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblinInfo.name;
    hpEl.textContent = goblinInfo.hp < 0 ? 0 : goblinInfo.hp;
    faceEl.textContent = goblinInfo.hp > 0 ? '😈' : '🔥';

    if (goblinInfo.hp < 0) {
        goblinEl.classList.add('dead');
    }
    
    goblinEl.append(nameEl, faceEl, hpEl);

    return goblinEl;
}