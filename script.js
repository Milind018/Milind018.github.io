function scrambledString(element, id, scrambledEmail, positions) {
    let unscrambledEmail = new Array(positions.length);
    for (let i = 0; i < positions.length; i++) {
        unscrambledEmail[positions[i] - 1] = scrambledEmail[i];
    }
    element.innerHTML = unscrambledEmail.join('');
}
