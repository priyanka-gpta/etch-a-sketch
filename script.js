
const container = document.querySelector(".container");
const canvas =
document.createElement("div");
canvas.setAttribute("class", "canvas");
container.appendChild(canvas);

function randomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

//draw grid
let createGrid = (num=16) => {
    for (let i = 0; i< num; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j=0; j< num; j++) {
            const cell = document.createElement("div");
            cell.setAttribute("class","cell");
            row.appendChild(cell);
            cell.addEventListener('mouseenter',() => {
                cell.style.backgroundColor = randomColor();
            })
        }
        canvas.appendChild(row);
    }
}
createGrid();

custom grid size input from user
const gridSelbtn = document.querySelector("#gridSelbtn");
gridSelbtn.addEventListener("click",() => {
    canvas.innerHTML = "";
    userGridInput = prompt("Enter value < 50");
    createGrid(userGridInput);
});

//reset the canvas
document.querySelector('#resetbtn').addEventListener("click", () => {
    canvas.innerHTML = "";
    createGrid();
});