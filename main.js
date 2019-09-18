// VARIABLES
const button = document.querySelector('button');
let counter = 0;


// FUNCTIONS

function addSquare() {
    // create div like variable
    const square = document.createElement('div');
    // counter incrementation
    counter++;

    // if statement for every 5 element

    if (counter % 5 == 0) {
        square.classList.add('square-js', 'circle');
    } else {
        square.classList.add('square-js');
    }

    // add content from counter to div
    // square.innerText = counter; // working too
    square.textContent = counter;

    // create div in html
    document.body.appendChild(square);


}

// PROGRAM
button.addEventListener('click', addSquare);