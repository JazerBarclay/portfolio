const textSpan = document.querySelector("span.typewriter");
const phrases = ["efficient applications!","beautiful websites!","fun projects!"];
let currentPhrase = [];
let phrase = 0;
let charPos = 0;
let isEnd = false;
let isDeleting = false;

function loop() {

    if (phrase < phrases.length) {

        // Add letter when not deleting
        if (!isDeleting && charPos <= phrases[phrase].length) {
            currentPhrase.push(phrases[phrase][charPos]);
            charPos++;
        }

        // Remove letter when deleting
        if (isDeleting && charPos <= phrases[phrase].length) {
            currentPhrase.pop(phrases[phrase][charPos]);
            isEnd = false;
            charPos--;
        }

        // When we reach the end of the word, start deleting
        if (charPos === phrases[phrase].length) {
            isEnd = true;
            isDeleting = true;
        }

        // Once all letters removed, move onto next word and wrap at max array size
        if (isDeleting && charPos === 0) {
            currentPhrase = [];
            isDeleting = false;
            phrase++;
            if (phrase == phrases.length) phrase = 0;
        }

        
        textSpan.innerHTML = currentPhrase.join('');

    }

    const fast = Math.random() * (60 -  40) + 40;
    const norm = Math.random() * (200 - 100) + 100;
    const time = isEnd ? 3000 : isDeleting ? fast : norm;

    setTimeout(loop, time);
}

loop();