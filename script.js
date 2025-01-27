// Select the Grid Container
const gridContainer = document.querySelector('.grid-container');

// Function to create Grid
function createGrid(size) {
    const totalSquares = size * size;

    // Clear the container before creating a new grid
    gridContainer.innerHTML = '';

    // Adjust container's CSS for new grid size
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Create the squares
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.setAttribute('data-opacity', '0'); // Initialize opacity
        gridContainer.appendChild(square);
    }
}

// Function to add hover effect for progressive darkening
function addDarkenHoverEffect() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            // Get current opacity level
            let currentOpacity = parseFloat(square.getAttribute('data-opacity'));

            // Increment opacity by 0.1 (10%)
            if (currentOpacity < 1) {
                currentOpacity += 0.1;
                square.setAttribute('data-opacity', currentOpacity.toFixed(1));

                // Apply new opacity to the background color
                square.style.backgroundColor = `rgba(255, 0, 0, ${currentOpacity})`; // Red with varying opacity
            }
        });
    });
}

// Select the clear button
const clearButton = document.querySelector('#clear-btn');

// Function to clear the grid
clearButton.addEventListener('click', () => {
    // Clear all squares
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white'; // Reset color
        square.setAttribute('data-opacity', '0'); // Reset opacity
    });

    // Optional: Ask for a new grid size
    let newSize = parseInt(prompt('Enter new grid size (e.g., 16 for 16x16):'));
    if (newSize && newSize > 0 && newSize <= 100) { // Limit grid size for performance
        createGrid(newSize); // Create new grid
        addDarkenHoverEffect(); // Reapply hover effect
    } else {
        alert('Invalid size. Please enter a number between 1 and 100.');
    }
});

// Initialize the grid with default size and hover effect
createGrid(22);
addDarkenHoverEffect();
