const inputTime = document.getElementById('input-time')
const buttonTime = document.getElementById('check-time-btn');
const resultTime = document.getElementById('time-result');


    buttonTime.addEventListener('click', () => {
        const value = inputTime.value.trim() 
        const hours = Math.floor(value / 60)
        const minutes = value % 60
        
        resultTime.textContent = `${hours}:${minutes}`
    })


    


