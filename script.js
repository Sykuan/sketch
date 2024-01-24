const container = document.querySelector('.container');
let fidelity = 25;
let isRainbowMode = false;
let isMouseDown = false;

function createSketchBoard(fidelity) {
    for (let i = 0; i < fidelity; i++) {
        const div = document.createElement('div');
        div.classList.add("row");
        container.appendChild(div);
        for (let j = 0; j < fidelity; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            div.appendChild(square);

            square.addEventListener('mousedown', () => {
                isMouseDown = true;
                if (isRainbowMode) {
                    square.style.backgroundColor = getRandomColor();
                } else {
                    square.style.backgroundColor = 'black'
                }
            })

            square.addEventListener('mouseenter', () => {
                if (isMouseDown) {
                    if (isRainbowMode) {
                        square.style.backgroundColor = getRandomColor();
                    } else {
                        square.style.backgroundColor = "black";
                    }
                }
            })

            square.addEventListener('mouseup', () => {
                isMouseDown = false;
            })
        }

    }
}

document.addEventListener('DOMContentLoaded', function() {
    createSketchBoard(fidelity);

    // // Event listener for mousedown to set isMouseDown to true
    // container.addEventListener('mousedown', (event) => {
    //     if (isMouseDown) {
    //         if (event.target.classList.contains('square')) {
    //             if (isRainbowMode) {
    //                 event.target.style.backgroundColor = getRandomColor();
    //             } else {
    //             event.target.style.backgroundColor = 'black';
    //             }
    //         }
    //     }
    // });

    // // Event listener for mouseup to set isMouseDown to false
    // container.addEventListener('mouseup', () => {
    //     isMouseDown = false;
    // });
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

//add rainbow sketch ability

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// rainbowBtn = document.querySelector('.rainbowBtn');

const rainbowBtn = document.querySelector('#rainbowBtn');

rainbowBtn.addEventListener('click', () => {
    isRainbowMode = !isRainbowMode;
    rainbowBtn.textContent = isRainbowMode ? "Black Mode" : "Rainbow Mode!";
    rainbowBtn.style.backgroundColor = isRainbowMode ? "black" : "white";
    rainbowBtn.style.color = isRainbowMode ? "white": "black";
});