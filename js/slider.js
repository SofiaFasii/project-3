let current = 0;

const slides = document.querySelectorAll('.slide');
const sliderWrapper = document.querySelector('.sliders');
const points = document.querySelector('.points');

for(let i = 0; i < slides.length; i++){
    let point = document.createElement('span');
    if(i === 0){
        point.classList.add('s-active');
    }
    point.addEventListener('click', () => {
        showSlide(i);
    });
    points.appendChild(point);
}

function showSlide(index){
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`
    points.children[current].classList.remove('s-active');
    points.children[index].classList.add('s-active');
    current = index;
    //children властивість будь-якого HTML-елемента, яка показує всі елементи, які лежать всередині нього прямо
}
document.querySelector('.right-arrow').addEventListener('click', () => {
    let right = current + 1;
    if(right >= slides.length) right = 0;
    showSlide(right);
});
document.querySelector('.left-arrow').addEventListener('click', () => {
    let left = current - 1;
    if(left < 0) left = slides.length - 1;
    showSlide(left);
});