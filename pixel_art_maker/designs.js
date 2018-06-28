// Select color input
const color = document.querySelector('#colorPicker'); //select an HTML element using document.querySelector('*') used from line 1 to 7
// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const sizePicker = document.querySelector('#sizePicker');
const canvas = document.querySelector('#pixelCanvas');


function clearOldGrid() {
    // this function clean up existing grid first
    canvas.innerHTML = '';
}

function makeGrid() {
    let tr, td;
    //create table: (for loop runs from inside, then outside). create td, append to tr; create tr, tr to table(canvas).
    for (let x = 0; x < height.value; x++) {
        tr = document.createElement('tr');
        canvas.appendChild(tr);
        for (let y = 0; y < width.value; y++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }
    }
}

function changeCellColor() {
    //check which td is clicked, and change its color 
    canvas.addEventListener('click', function(e) {
        e.preventDefault();
        // check using capital letters
        if (e.target.nodeName === 'TD') {
            e.target.style.backgroundColor = color.value;
        }
    })
}

// after summiting height and Width by the user, call makeGrid()
sizePicker.addEventListener('submit', function(e) {
    e.preventDefault();
    clearOldGrid();
    makeGrid();
    changeCellColor();
})