//UŻYTE NARZĘDZIA

// Losowy strzał co każdą grę - Math.random() - zwraca liczby między 0 a 1, ale bez 1 zaś,
//Math.floor zaokrągla liczbę do liczby całkowitej zawsze w dół.

//funkcja prompt działa jak funkcja alert, różni się tym 
//,że pobiera od użytkownika dane, które można przechowywać w zmiennej.

//.indexOf przegląda tabicę ,poszukując w niej wartości odpowiadającej podanemu argumentowi,
//jeśli znajdzie zwraca jej indeks, jeśli nie zwraca wartość -1

//GRA W STATKI
// Obiekt Widoku
var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute('class', 'hit');

    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute('class', 'miss');
    }
};
// Obiekt Modelu
var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [{
            locations: [0, 0, 0],
            hits: ['', '', '']
        },
        {
            locations: [0, 0, 0],
            hits: ['', '', '']
        },
        {
            locations: [0, 0, 0],
            hits: ['', '', '']
        }
    ],
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== 'hit') {
                return false;
            }
        }
        return true;
    },
    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);

            if (ship.hits[index] === 'hit') {
                view.displayMessage('było...');
                return true;
            } else if (index >= 0) {
                ship.hits[index] = 'hit';
                view.displayHit(guess);
                view.displayMessage('trafiony!');
                if (this.isSunk(ship)) {
                    view.displayMessage('okręt zatopiony!');
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage('Pudło...');
        return false;
    },
    generateShipLocations: function () {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
        console.log("Tablica okrętów: ");
        console.log(this.ships);
    },
    generateShip: function () {
        var direction = Math.floor(Math.random() * 2);
        var row, col;
        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            col = Math.floor(Math.random() * this.boardSize);
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        }
        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },

    collision: function (locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
};
// Obiekt Kontrolera
var controller = {
    guesses: 0,

    processGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage('Zatopiłeś okręty w ' + this.guesses + " strzałach.");
            }
        }
    }
};

function parseGuess(guess) {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    if (guess === null || guess.length !== 2) {
        alert('Proszę podać literę (od a do g) i cyfrę (od 0 do 6).');
    } else {
        var firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert('To nie są współrzędne!');
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert('Pole poza planszą!');
        } else {
            return row + column;
        }
    }
    return null;
};

function handleFireButton() {
    var guessInput = document.getElementById('guessInput');
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = '';
};

function handleKeyPress(e) {
    var fireButton = document.getElementById('fireButton');
    e = e || window.event;
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
};

window.onload = init;

function init() {
    var fireButton = document.getElementById('fireButton');
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById('guessInput');
    guessInput.onkeypress = handleKeyPress;

    model.generateShipLocations();
};