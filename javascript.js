function createGrid(size){
const container = document.querySelector('#container');
const totalSize = 500;
const rowBorder = 1.2;
const availableSize = totalSize - (size * rowBorder * 2);
const rowSize = availableSize / size;
container.innerHTML = '';
   for (let i = 0; i < size; i++){
        const  column = document.createElement('div');
        column.classList.add('column');
        
        for (let j = 0; j < size; j++){
          const row = document.createElement('div');
          row.classList.add('row');
          row.style.width = `${rowSize}px`;
          row.style.height = `${rowSize}px`;
          row.addEventListener('mouseover', () => {
               row.classList.add('gridHover');
          });
          column.appendChild(row);
        
   } 
   container.appendChild(column);
} 
}


function createNewGrid() {
     let newSize = parseInt(prompt("Enter new grid size from 1-100"));
     if (isNaN(newSize) || newSize < 1 || newSize > 100) {
          alert("Not a valid number, please enter a number from 1-100")
     } else createGrid(newSize);
}

document.querySelector('#resize').addEventListener('click', createNewGrid);

let numberOfRows = 16;

createGrid(numberOfRows);