/*
Завдання 10 (виконувати не обов'язково)
Напиши скрипт створення і очищення колекції елементів. 
Користувач вводить кількість елементів в input і натискає кнопку Створити, 
після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

Створи функцію createBoxes(amount), яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const imputEl = document.querySelector('#controls > input');
const divBox = document.querySelector('#boxes');


function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
  div.style.width = (i * 10 + 30) +`px`;
  div.style.height = (i * 10 + 30) +`px`;
    div.style.backgroundColor = getRandomHexColor();
      divBox.append(div);
  }
}

createBtn.addEventListener('click', calcAmount);
function calcAmount(event) {
  const amount = imputEl.value;
  if (amount > 0) {
    createBoxes(amount);
  }
}

destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes(event) {
  divBox.innerHTML = '';
}