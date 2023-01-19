/*
Завдання 4
Лічильник складається зі спану і кнопок, які по кліку повинні 
збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
 */

const counter = document.getElementById("counter");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let totalValue = document.getElementById("value");
let counterValue = 0;

counter.addEventListener("click", handleButtonClick);
function handleButtonClick(event) {
    if(event.target === decrementBtn){counterValue -= 1}
    else if (event.target === incrementBtn) { counterValue += 1 }
    return totalValue.textContent = counterValue;
}
