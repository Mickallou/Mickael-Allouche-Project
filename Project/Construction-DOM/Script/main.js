const sendButton = document.getElementById('send');
const theCanvas = document.getElementById('theCanvas');

sendButton.addEventListener('click', (event) => {
    event.preventDefault();

    const theElement = document.getElementById('theElement').value;
    const theWidth = document.getElementById('theWidth').value;
    const theHeight = document.getElementById('theHeight').value;
    const theContent = document.getElementById('theContent').value;
    const theColor = document.getElementById('theColor').value;
    const theFontSize = document.getElementById('theFontSize').value;
    const theBgColor = document.getElementById('theBgColor').value;

    theCanvas.innerHTML += `<${theElement} style="width: ${theWidth}px; height: ${theHeight}px; color: ${theColor}; font-size: ${theFontSize}px; background-color: ${theBgColor}; overflow-y: scroll; overflow-x: hidden; padding: 5px;">${theContent}</${theElement}><br>`;
});
