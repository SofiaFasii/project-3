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
        card.innerHTML = `${element.name} ${element.surname}<br>${element.born}-${element.dead}<br><p class='cs-age'></p>`

        const age = element.dead - element.born;
        const ageP = card.querySelector('.cs-age');
        ageP.textContent = `Вік: ${age}`;

        containerScientist.appendChild(card);
    })
}
render(scientists)

function clearH(){
    document.querySelectorAll('.cs-card').forEach(card => card.classList.remove('highlight'));
}
//1
document.querySelector('.born-in-19th').addEventListener('click', () => {
    clearH()
    scientists.forEach(scientist => {
       if (scientist.born >= 1801 && scientist.born <= 1900) {
            const card = document.getElementById(`scientist-${scientist.id}`)
            card.classList.add('highlight')
        } 
    })
});
//2
document.querySelector('.sort-by-abc').addEventListener('click', () => {
    clearH()
    setTimeout(() => {
        const sortedScientists = [...scientists].sort((a, b) => a.name.localeCompare(b.name));
        render(sortedScientists);
    },200);
});
//3
document.querySelector('.sort-by-age').addEventListener('click', () => {
    clearH()
    setTimeout(() => {
        const sortedScientists = [...scientists].sort((a, b) => {
        const ageA = a.dead - a.born;
        const ageB = b.dead - b.born;
        return ageB - ageA;
        });
        render(sortedScientists);
    },200)
});
//4
document.querySelector('.late-born').addEventListener('click', () => {
    clearH()
    const lateBorn = scientists.reduce((a, b) => {
        return b.born > a.born ? b : a;
    }, scientists[0]);
    const card = document.getElementById(`scientist-${lateBorn.id}`);
    card.classList.add('highlight');
});
//5
document.querySelector('.year-albert').addEventListener('click', () => {
    clearH()
    const card = document.getElementById('scientist-1');
    card.classList.add('highlight');
});
//6
document.querySelector('.surname-c').addEventListener('click', () => {
    clearH()
    scientists.forEach(scientist => {
        if(scientist.surname[0].toUpperCase() === 'C'){
            const card = document.getElementById(`scientist-${scientist.id}`);
            card.classList.add('highlight')
        }
    })
});
//7
document.querySelector('.name-a').addEventListener('click', () => {
    clearH()
    scientists.forEach(scientist => {
        if(scientist.name[0].toUpperCase() === 'A'){
            const card = document.getElementById(`scientist-${scientist.id}`);
            card.classList.add('highlight')
        }
    })
});
//8
document.querySelector('.long-and-short').addEventListener('click', () => {
    clearH()
    const longLive = scientists.reduce((longest, current) => {
        return current.dead - current.born > longest.dead - longest.born ? current : longest;
    });
    const shortLive = scientists.reduce((shortest, current) => {
        return current.dead - current.born < shortest.dead - shortest.born ? current : shortest;
    });

    const cardL = document.getElementById(`scientist-${longLive.id}`);
    const cardS = document.getElementById(`scientist-${shortLive.id}`);
    cardL.classList.add('highlight');
    cardS.classList.add('highlight');
})
//9
document.querySelector('.coincidence').addEventListener('click', () => {
    clearH()
    scientists.forEach(scientist =>{
        if(scientist.name[0].toUpperCase() === scientist.surname[0].toUpperCase()){
            const card = document.getElementById(`scientist-${scientist.id}`);
            card.classList.add('highlight')
        }
    })
})