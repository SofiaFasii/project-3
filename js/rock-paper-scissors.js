let rpsPlayerSelection = '';
let rpsPlayerScore = 0;  
let rpsCompScore = 0;  

const rpsResult = document.querySelector('.rps-result')

const playerChoice = (choice) => rpsPlayerSelection = choice; 

function playRound(){
    rpsResult.classList.remove('draw', 'success', 'failure');
    
    if(!rpsPlayerSelection){
        rpsResult.textContent = 'Спочатку оберіть свій хід!';
        rpsResult.classList.add('failure');
        return;
    }

    const choices = ['камінь', 'ножиці', 'папір'];
    const compSelection = choices[Math.floor(Math.random() * 3)];

    if(rpsPlayerSelection === compSelection){
        rpsResult.textContent = 'Нічія';
        rpsResult.classList.add('draw') ;
    }
    else if(rpsPlayerSelection === 'ножиці' && compSelection === 'папір' || rpsPlayerSelection === 'папір' && compSelection === 'камінь' || rpsPlayerSelection === 'камінь' && compSelection === 'ножиці'){
        rpsResult.textContent = 'Ви виграли раунд!';
        rpsResult.classList.add('success');
        rpsPlayerScore++;
    }
    else{
        rpsResult.textContent = 'Комп’ютер виграв раунд!';
        rpsResult.classList.add('failure');
        rpsCompScore++;
    }
    document.querySelector('.rps-score-computer').textContent = `Комп’ютер - ${rpsCompScore}`
    document.querySelector('.rps-score-user').textContent = `Ви - ${rpsPlayerScore}`

    rpsPlayerSelection = '';
}