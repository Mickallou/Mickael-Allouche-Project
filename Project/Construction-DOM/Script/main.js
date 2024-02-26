// Get references to DOM elements
const sendButton = document.getElementById('send');
const theCanvas = document.getElementById('theCanvas');
const elementInput = document.getElementById('theElement');
const widthInput = document.getElementById('theWidth');
const heightInput = document.getElementById('theHeight');
const contentInput = document.getElementById('theContent');
const colorInput = document.getElementById('theColor');
const fontSizeInput = document.getElementById('theFontSize');
const bgColorInput = document.getElementById('theBgColor');

sendButton.addEventListener('click', (event) => {
    event.preventDefault();

    const theElement = elementInput.value;
    const theWidth = widthInput.value;
    const theHeight = heightInput.value;
    const theContent = contentInput.value;
    const theColor = colorInput.value;
    const theFontSize = fontSizeInput.value;
    const theBgColor = bgColorInput.value;

    const newElement = document.createElement(theElement);
    newElement.style.width = `${theWidth}px`;
    newElement.style.height = `${theHeight}px`;
    newElement.style.color = theColor;
    newElement.style.fontSize = `${theFontSize}px`;
    newElement.style.backgroundColor = theBgColor;
    newElement.style.overflowY = 'hidden';
    newElement.style.overflowX = 'hidden';
    newElement.style.padding = '5px';
    newElement.innerHTML = theContent;

    theCanvas.appendChild(newElement);

    theCanvas.appendChild(document.createElement('br'));
});
