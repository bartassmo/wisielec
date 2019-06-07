const game = {
    currentSentence: null,
    currentSentenceLetters: null,
    attempts: 5,
    elemBoardElem: document.querySelector('.game-board'),
    elemSentence: document.querySelector('.game-sentence'),
    elemAttempts: document.querySelector('.game-attempts'),
    elemLetters: document.querySelector('.game-letters'),
    sentences: ['Testowe Hasło', 'Konstantynopolitańczykowianeczka', 'Poranek Kojota', 'Wisielec'],

    generateLetterButtons: function() {
        const alphabet = [
            'a',
            'ą',
            'b',
            'c',
            'ć',
            'd',
            'e',
            'ę',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'ł',
            'm',
            'n',
            'ń',
            'o',
            'ó',
            'p',
            'q',
            'r',
            's',
            'ś',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z',
            'ź',
            'ż'
        ];

        alphabet.forEach(
            function(letter) {
                const button = document.createElement('button');
                button.classList.add('game-letter');
                button.type = 'button';
                button.dataset.letter = letter;
                button.innerText = letter;
                this.elemLetters.appendChild(button);
            }.bind(this)
        );
    },

    bindEvents: function() {
        this.elemLetters.addEventListener(
            'click',
            function(e) {
                if (
                    e.target.nodeName.toUpperCase() === 'BUTTON' &&
                    e.target.classList.contains('game-letter')
                ) {
                    const letter = e.target.dataset.letter;
                    console.log(letter); //narazie wypiszmy literę w konsoli
                    e.target.disabled = true;
                }
            }.bind(this)
        );
    },

    initBoard: function() {
        this.generateLetterButtons();
        this.bindEvents();
    }
};

game.initBoard();
