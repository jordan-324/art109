/* 
======================================
INTERACTIVE COLOR GRID - JAVASCRIPT
======================================

This script creates an interactive grid experience where:
1. Each square starts with a random color
2. Hovering over a square changes it to a new random color
3. A ripple animation expands from the center on hover
4. Mouse movement creates a glowing trail effect behind the cursor
*/

/* 
===== GENERATE RANDOM COLOR FUNCTION =====
Creates a random hex color code (#RRGGBB)
- Generates 6 random characters from 0-9 and A-F
- Returns a valid hex color string
*/
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/* 
===== CREATE TRAIL EFFECT FUNCTION =====
Creates small glowing particles that follow the cursor
- x, y: cursor position
- color: the color of the glow
- Creates a div with class 'cursor-trail'
- Animates the particle to fade and shrink over 800ms
- Removes the element after animation completes to save memory
*/
function createTrail(x, y, color) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    trail.style.width = Math.random() * 10 + 5 + 'px';
    trail.style.height = Math.random() * 10 + 5 + 'px';
    trail.style.color = color;
    
    document.body.appendChild(trail);
    
    // Remove element after animation completes
    setTimeout(() => trail.remove(), 800);
}

/* 
===== TRACK MOUSE MOVEMENT FOR CURSOR TRAIL =====
Listens for mouse movement across the entire document
- Only creates trail particles 30% of the time (Math.random() > 0.7)
- This prevents too many elements from being created and lagging the page
- Each particle gets a random color
*/
document.addEventListener('mousemove', (e) => {
    // Create trail every few pixels to avoid too many elements
    if (Math.random() > 0.7) {
        const randomColor = getRandomColor();
        createTrail(e.clientX - 5, e.clientY - 5, randomColor);
    }
});

/* 
===== INITIALIZE GRID FUNCTION =====
This function runs when the page loads and creates all the squares
- Gets the grid container element
- Loops 400 times to create a 20x20 grid (20 * 20 = 400)
- For each square:
  * Creates a new div element
  * Sets initial random background color
  * Adds hover listener to change colors and create ripple
*/
function initializeGrid() {
    const grid = document.getElementById('grid');
    
    // Create 400 squares (20x20)
    for (let i = 0; i < 400; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        // Set initial random color
        const initialColor = getRandomColor();
        square.style.backgroundColor = initialColor;
        
        /* 
        ===== HOVER EVENT LISTENER =====
        When mouse enters a square:
        1. Changes the square to a new random color
        2. Removes the 'ripple' class (if it exists)
        3. Forces a browser reflow with offsetWidth (makes CSS restart animation)
        4. Adds 'ripple' class to trigger the ripple animation
        */
        square.addEventListener('mouseenter', function() {
            const newColor = getRandomColor();
            this.style.backgroundColor = newColor;
            
            // Trigger ripple animation
            this.classList.remove('ripple');
            // Trigger reflow to restart animation
            void this.offsetWidth;
            this.classList.add('ripple');
        });
        
        grid.appendChild(square);
    }
}

// 
// ===== RUN ON PAGE LOAD =====
// Waits for the DOM to be fully loaded, then initializes the grid
//
document.addEventListener('DOMContentLoaded', initializeGrid);