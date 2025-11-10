let rpsPlayerSelection = '';
let rpsPlayerScore = 0;  
let rpsCompScore = 0;  

const rpsResult = document.querySelector('.rps-result')

const playerChoice = (choice) => rpsPlayerSelection = choice; 

function playRound(){
    if(!rpsPlayerSelection){
        rpsResult.textContent = 'Спочатку оберіть свій хід!';
        rpsResult.style.color = '#990000';
        return;
    }

    const choices = ['камінь', 'ножиці', 'папір'];
    const compSelection = choices[Math.floor(Math.random() * 3)];

    if(rpsPlayerSelection === compSelection){
        rpsResult.textContent = 'Нічія';
        rpsResult.style.color = '#727000ff';
    }
    else if(rpsPlayerSelection === 'ножиці' && compSelection === 'папір' || rpsPlayerSelection === 'папір' && compSelection === 'камінь' || rpsPlayerSelection === 'камінь' && compSelection === 'ножиці'){
        rpsResult.textContent = 'Ви виграли раунд!';
        rpsResult.style.color = '#039900';
        rpsPlayerScore++;
    }
    else{
        rpsResult.textContent = 'Комп’ютер виграв раунд!';
        rpsResult.style.color = '#990000';
        rpsCompScore++;
    }
    document.querySelector('.rps-score-computer').textContent = `Комп’ютер - ${rpsCompScore}`
    document.querySelector('.rps-score-user').textContent = `Ви - ${rpsPlayerScore}`

    rpsPlayerSelection = '';
}