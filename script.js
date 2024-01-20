const container = document.querySelector('.container');

for (i = 0; i < 4; i++) {
    const div = document.createElement('div');
    div.classList.add("row");
    container.appendChild(div);
    for (j = 0; j < 4; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        div.appendChild(square);
    }
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
    square.style.backgroundColor = "black";
    });
});
