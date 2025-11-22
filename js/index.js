//modal 
function showModal(element){
  element.style.display = 'block';
  setTimeout(() => element.classList.add('show'), 240);
} 
function hideModal(element){
  element.classList.remove('show');
  setTimeout(() => element.style.display = 'none', 650);
}
function closeAll(){
  hideModal(document.getElementById('modal-greeting'));
  hideModal(document.getElementById('modal-thank'));
  hideModal(document.querySelector('.overlay'));
}
window.onload = () => {
  const overlay = document.querySelector('.overlay');
  const modalGreeting = document.getElementById('modal-greeting');
  showModal(overlay);
  showModal(modalGreeting);
}
document.getElementById('modal-btn').addEventListener('click', () => {
  const input = document.getElementById('modal-username');
  let name = input.value.trim();
  if(!name){
    input.classList.add('error');
    setTimeout(() => {
      input.classList.remove('error');
    }, 500);
    return;
  }
  document.getElementById('username').textContent = name;
  hideModal(document.getElementById('modal-greeting'));
  showModal(document.getElementById('modal-thank'));
  setTimeout(() => {
    closeAll();
  }, 1450);
})

//Інтерактив
const dropdown = document.querySelector('.dropdown');
const dropBtn = document.querySelector('.drop-btn');

dropBtn.onclick = () => dropdown.classList.toggle('active');
document.addEventListener('click', (event) => {
  if (!dropdown.contains(event.target) && dropdown.classList.contains('active')) {
    dropdown.classList.remove('active');
  }
});

document.querySelectorAll('.dropdown-content a').forEach(element => {
  element.addEventListener('click', a => {
    a.preventDefault();
    document.querySelector(element.getAttribute('href')).scrollIntoView({
      behavior: 'smooth', 
      block: 'center' 
    });
  });
});