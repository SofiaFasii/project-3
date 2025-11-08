const dropdown = document.querySelector('.dropdown');
const dropBtn = document.querySelector('.drop-btn');

dropBtn.onclick = () => dropdown.classList.toggle('active');
document.addEventListener('click', (event) => {
  if (!dropdown.contains(event.target) && dropdown.classList.contains('active')) {
    dropdown.classList.remove('active');
  }
});