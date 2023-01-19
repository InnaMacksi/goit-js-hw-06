// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control 
// (подія input) і змінює інлайн - стиль span#text, 
// оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputRange = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputRange.addEventListener("input", handleRangeInput);
function handleRangeInput(event) {
    textEl.style.fontSize = `${event.target.value}px`;
}
