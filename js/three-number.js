function checkButton() {
  const inputs = document.querySelectorAll('input');
const output = document.getElementById('max');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const values = Array.from(inputs)
      .map(i => Number(i.value))
      .filter(v => !isNaN(v) && i.value !== '');

    if (values.length === 0) {
      output.textContent = "-";
      return;
    }

    const maxValue = Math.max(...values);
    output.textContent = maxValue;
  });
});
}