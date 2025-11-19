const inputs = [
document.getElementById('num1'),
document.getElementById('num2'),
document.getElementById('num3')
];
const resultEl = document.getElementById('result');

     
function updateMax() {
       
const vals = inputs.map(inp => {
return inp.value === '' ? null : parseFloat(inp.value);
});

         
if (vals.every(v => v === null)) {
resultEl.textContent = 'Найбільше число, яке ви ввели – (число)';
inputs.forEach(i => i.classList.remove('max'));
return;
}

        
const numbers = vals.filter(v => v !== null && !Number.isNaN(v));

if (numbers.length === 0) {
resultEl.textContent = 'Немає коректних чисел';
inputs.forEach(i => i.classList.remove('max'));
return;
}

const max = Math.max(...numbers);

resultEl.textContent = 'Найбільше число, яке ви ввели – ' + max;

         
inputs.forEach((inp, idx) => {
const v = vals[idx];
if (v !== null && !Number.isNaN(v) && v === max) {
inp.classList.add('max');
} else {
inp.classList.remove('max');
}
});
}
inputs.forEach(inp => inp.addEventListener('input', updateMax));

       
updateMax();
