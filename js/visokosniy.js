function result() {
    const year = parseInt(document.getElementById('year-input').value)
    const result = document.getElementById('result-year')

    if (!year) {
        result.textContent = "Введіть рік народження!"
        result.style.color = "#990000"
        return;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        result.textContent = "Ви народилися у високосний рік!"
        result.style.color = "#039900"
    } else {
        result.textContent = "Ви народилися не у високосний рік!"
        result.style.color = "#990000"
    }
}