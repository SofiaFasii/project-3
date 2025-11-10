let randomNumber = Math.floor(Math.random() * 100) + 1;
const input = document.getElementById("guess");
const btn = document.getElementById("check-btn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
    const userGuess = Number(input.value);

    if (!userGuess ||  userGuess < 1 ||  userGuess > 100) {
    message.textContent = "Введіть число від 1 до 100!";
    message.style.color = "red";
} else if (userGuess === randomNumber) {
    message.textContent = `Вітаю, ви вгадали число!(${ randomNumber })`;
    message.style.color = "#1db954";
    btn.textContent = "🔁";
    btn.onclick = () => location.reload();
} else if (userGuess < randomNumber) {
    message.textContent = "Більше!";
    message.style.color = "#333";
} else {
    message.textContent = "Менше!";
    message.style.color = "#333";
}
});