var currentNumberWrapper = document.getElementById('currentNumber');
var represent = document.getElementById('represent');
var currentNumber = 0;

function increment() {
    // if(currentNumber == 10) {
    //     return
    // }
    represent.innerHTML = "";
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;

    for(let i = 0; i <= currentNumber; i++) {
        represent.innerHTML += `<div style="background-color: green; width: 3rem; heigth: 3rem; border-radius: 3px;">${i}</div>`;
    }
}

function decrement() {
    if(currentNumber == 0) {
        return
    }

    represent.innerHTML = "";
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;

    for(let i = 0; i <= currentNumber; i++) {
        represent.innerHTML += `<div style="background-color: red; width: 3rem; heigth: 3rem; border-radius: 3px;">${i}</div>`;
    }
}