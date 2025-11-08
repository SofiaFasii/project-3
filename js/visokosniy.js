function result() {
    const year = parseInt(document.getElementById('year-input').value)
    const result = document.getElementById('result-year')

    if (!year) {
        result.textContent = "Введіть рік народження"
        return;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        result.textContent = "Ви народилися у високосний рік!"
        result.style.color = "green"
    } else {
        result.textContent = "Ви народилися не у високосний рік!"
        result.style.color = "red"
    }
}