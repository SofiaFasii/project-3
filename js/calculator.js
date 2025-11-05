let operation = '';

const calculatorSetOperation = (value) => operation = value

function calculator() {
    const calculatorFirstInput = Number(document.querySelector('.calculator-first-input').value);
    const calculatorSecondInput = Number(document.querySelector('.calculator-second-input').value);
    let result;

    if(operation === '+') result = calculatorFirstInput + calculatorSecondInput;
    else if(operation === '*') result = calculatorFirstInput * calculatorSecondInput;
    else if(operation === '-') result = calculatorFirstInput - calculatorSecondInput;
    else if(operation === '/'){
        if(calculatorSecondInput === 0) result = 'Помилка';
        else result = calculatorFirstInput / calculatorSecondInput;
    }
    else result = 'Помилка';

    document.querySelector('.calculator-result').textContent = result;
}