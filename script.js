// Select the Grid Container
const gridContainer = document.querySelector('.grid-container');

// Function to create Grid
function createGrid (size) {

    const totalSquares = size*size;

    // Clear the container before creating a new grid
    gridContainer.innerHTML = '';

    // Adjust container's CSS for new grid size
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

     // Step 3: Create the squares
     for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
    }
}

// Function to add hover effect
function addHoverEffect() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'; // Change color on hover
        });
    });
}

// Call the hover function after creating the grid
createGrid(12); // Initialize the grid
addHoverEffect(); // Add hover functionality

// Select the clear button
const clearButton = document.querySelector('#clear-btn');

// Function to clear the grid
clearButton.addEventListener('click', () => {
    // Clear all squares
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white'; // Reset color
    });

    // Optional: Ask for a new grid size
    let newSize = parseInt(prompt('Enter new grid size (e.g., 16 for 16x16):'));
    if (newSize && newSize > 0 && newSize <= 100) { // Limit grid size for performance
        createGrid(newSize); // Create new grid
        addHoverEffect(); // Reapply hover effect
    } else {
        alert('Invalid size. Please enter a number between 1 and 100.');
    }
});