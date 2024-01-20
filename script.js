const container = document.querySelector('.container');

let fidelity = 4;

function createSketchBoard(fidelity) {
    for (let i = 0; i < fidelity; i++) {
        const div = document.createElement('div');
        div.classList.add("row");
        container.appendChild(div);
        for (let j = 0; j < fidelity; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            div.appendChild(square);

            square.addEventListener('mouseenter', () => {
                if (isMouseDown) {
                square.style.backgroundColor = "black";
                }
            })
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createSketchBoard(fidelity);

        // Event listener for mousedown to set isMouseDown to true
        container.addEventListener('mousedown', (event) => {
            isMouseDown = true;

            if (event.target.classList.contains('square')) {
                event.target.style.backgroundColor = 'black';
            }
        });
    
        // Event listener for mouseup to set isMouseDown to false
        container.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
});

//Creating option to set sizing

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    userInput = parseInt(prompt('what fidelity would you like? (1-100)'));
    console.log(userInput)
    if (typeof(userInput) != 'number' || userInput > 100 || userInput < 1 ) {
        alert('Please enter a valid number between 1-100!');
    } else if (isNaN(userInput)) {
        return;
    }
    else {
        fidelity = userInput;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createSketchBoard(fidelity);
    }
})

//Creating sketch effect

// const squares = document.querySelectorAll('.square');

// squares.forEach(square => {
//     square.addEventListener('mouseenter', () => {
//     square.style.backgroundColor = "black";
//     });
// });