let currentInput = '';

function appendInput(value) {
    if (value === '%') {
        currentInput = (parseFloat(currentInput) / 100).toString();
    } else {
        currentInput += value;
    }
    document.getElementById('res').value = currentInput;
}


function calculate() {
    try {
        currentInput = eval(currentInput);
        document.getElementById('res').value = currentInput;
    } catch (error) {
        document.getElementById('res').value = 'Error';
    }
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('res').value = '';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('res').value = currentInput;
}

function processKey(event) {
    const key = event.key;

    if (/[0-9+\-*/.]/.test(key)) {
        appendInput(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === '%' || (event.shiftKey && key === '5')) {    
        appendInput('%');
    }
    event.preventDefault();
}

