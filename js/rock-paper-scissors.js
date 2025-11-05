let rpsPlayerSelection = '';
let rpsPlayerScore = 0;  
let rpsCompScore = 0;  

const rpsResult = document.querySelector('.rps-result')

const playerChoice = (choice) => rpsPlayerSelection = choice; 

function playRound(){
    if(!rpsPlayerSelection){
        rpsResult.textContent = 'Спочатку оберіть варіант';
        return;
    }

    const choices = ['камінь', 'ножиці', 'папір'];
    const compSelection = choices[Math.floor(Math.random() * 3)];

    if(rpsPlayerSelection === compSelection){
        rpsResult.textContent = 'Нічія';
    }
    else if(rpsPlayerSelection === 'ножиці' && compSelection === 'папір' || rpsPlayerSelection === 'папір' && compSelection === 'камінь' || rpsPlayerSelection === 'камінь' && compSelection === 'ножиці'){
        rpsResult.textContent = 'Ви виграли раунд!';
        rpsPlayerScore++;
    }
    else{
        rpsResult.textContent = 'Комп’ютер виграв раунд!';
        rpsCompScore++;
    }
    document.querySelector('.rps-score-computer').textContent = `Комп’ютер - ${rpsPlayerScore}`
    document.querySelector('.rps-score-user').textContent = `Ви - ${rpsCompScore}`
}