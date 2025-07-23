let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
  if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function chooseOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    compute();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function compute() {
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = curr !== 0 ? prev / curr : 'Error';
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = currentInput || '0';
}