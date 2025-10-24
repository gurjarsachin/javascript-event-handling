// 1. Get a reference to the button element
const colorButton = document.getElementById('colorButton');

// 2. Function to generate a random hex color (e.g., '#A3F5B8')
function generateRandomHexColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + color.padStart(6, '0');
}

// 3. Function to handle the button click event
function changeBackgroundColor() {
    const randomColor = generateRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    console.log(`Background color changed to: ${randomColor}`);
}

// 4. Attach event listener to the button
colorButton.addEventListener('click', changeBackgroundColor);
