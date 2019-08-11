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
            locations: ['06', '16', '26'],
            hits: ['', '', '']
        },
        {
            locations: ['24', '34', '44'],
            hits: ['', '', '']
        },
        {
            locations: ['10', '11', '12'],
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

function init() {
    var fireButton = document.getElementById('fireButton');
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById('guessInput');
    guessInput.onkeypress = handleKeyPress;
}

function handleFireButton() {
    var guessInput = document.getElementById('guessInput');
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = '';
}

function handleKeyPress(e) {
    var fireButton = document.getElementById('fireButton');
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}
window.onload = init;

// var randomLoc = Math.floor(Math.random() * 5);
// var location1 = randomLoc;
// var location2 = location1 + 1;
// var location3 = location2 + 1;
// var guess;
// var guesses = 0;
// var hits = 0;
// var isSunk = false;
// //Pętla dopóki okręt nie jest zatopiony, gramy dalej
// while (isSunk == false) {
//     //pobranie komórki do sprawdzenia
//     guess = prompt('Gotów, cel, pal! (podaj liczbę z zakresu 0-6)');
//     if (guess < 0 || guess > 6) {
//         alert('Proszę podać liczbę z zakresu 0-6!');
//     } else {
//         guesses = guesses + 1;
//         //jeśli trafiony
//         if (guess == location1 || guess == location2 || guess == location3) {
//             hits = hits + 1;
//             alert('Trafiony!');
//             if (hits == 3) {
//                 isSunk = true;
//                 alert('Zatopiłeś okręt');
//             }
//         } else {
//             alert('Pudło...');
//         }
//     }
// }
// var stats = 'Gratulacje zatopiłeś okręt w ' + guesses + ' strzałach!';
// alert(stats);