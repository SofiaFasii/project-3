const scientists = [
    { name: 'Albert', surname: 'Einstein', born: 1879, dead: 1955, id: 1 },
    { name: 'Isaac', surname: 'Newton', born: 1643, dead: 1727, id: 2 },
    { name: 'Galileo', surname: 'Galilei', born: 1564, dead: 1642, id: 3 },
    { name: 'Marie', surname: 'Curie', born: 1867, dead: 1934, id: 4 },
    { name: 'Johannes', surname: 'Kepler', born: 1571, dead: 1630, id: 5 },
    { name: 'Nicolaus', surname: 'Copernicus', born: 1473, dead: 1543, id: 6 },
    { name: 'Max', surname: 'Planck', born: 1858, dead: 1947, id: 7 },
    { name: 'Katherine', surname: 'Blodgett', born: 1898, dead: 1979, id: 8 },
    { name: 'Ada', surname: 'Lovelace', born: 1815, dead: 1852, id: 9 },
    { name: 'Sarah E.', surname: 'Goode', born: 1855, dead: 1905, id: 10 },
    { name: 'Lise', surname: 'Meitner', born: 1878, dead: 1968, id: 11 },
    { name: 'Hanna', surname: 'Hammarström', born: 1829, dead: 1909, id: 12 }
];

const containerScientist = document.querySelector('.scientists');

function render(mas) {
    containerScientist.innerHTML = '';
    mas.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('cs-card');
        card.id = `scientist-${element.id}`;
        card.innerHTML = `${element.name} ${element.surname}<br>${element.born}-${element.dead}`
        containerScientist.appendChild(card);
    })
}
render(scientists)
//1
function bornIn19th() {
    const allCards = document.querySelectorAll('.cs-card');
    allCards.forEach(card => card.classList.remove('highlight'));
    for (let i = 0; i < scientists.length; i++) {
        const scientist = scientists[i];
        if (scientist.born >= 1801 && scientist.born <= 1900) {
            const card = document.getElementById(`scientist-${scientist.id}`)
            if (card) {
                card.classList.add('highlight')
            }
        }
    }
}
//3
function sortByAge(){
    const allCards = document.querySelectorAll('.cs-card');
    allCards.forEach(card => card.classList.remove('highlight'));

    const sortedScientists = [...scientists].sort((a, b) => {
        const ageA = a.dead - a.born;
        const ageB = b.dead - b.born;
        return ageA - ageB;
    });
    render(sortedScientists);
}
//5
function yearAlbert() {
    const allCards = document.querySelectorAll('.cs-card');
    allCards.forEach(card => card.classList.remove('highlight'));
    const albertCard = document.getElementById('scientist-1');
    if (albertCard) {
        albertCard.classList.add('highlight');
    }
}