const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

let counter = 0;

function updateCounter() {
    counterElement.textContent = counter;
}

function incrementCounter() {
    counter += 1;
    updateCounter();
}

function decrementCounter() {
    counter -= 1;
    updateCounter();
}

function resetCounter() {
    counter = 0;
    updateCounter();
}

incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
resetBtn.addEventListener('click', resetCounter);

updateCounter();
