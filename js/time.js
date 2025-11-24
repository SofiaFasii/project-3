const inputTime = document.getElementById('input-time')
const buttonTime = document.getElementById('check-time-btn');
const resultTime = document.getElementById('time-result');


    buttonTime.addEventListener('click', () => {
        let value = inputTime.value.trim() 
        const days = Math.floor(value / 1440);
        value %= 1440; 
        const hours = Math.floor(value / 60);
        const minutes = value % 60;
        
        resultTime.textContent = `${days} дн. ${hours}:${minutes}`
    })


    


