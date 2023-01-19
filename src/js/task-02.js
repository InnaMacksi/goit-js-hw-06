/*
Завдання 2
HTML містить порожній список ul#ingredients.

<ul id="ingredients"></ul>

JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
// =============1 варіант==============
// ingredients.forEach((ingredient) => {
//   const ingredientsItems = document.createElement('li');
//   ingredientsItems.classList.add('item');
//   ingredientsItems.textContent = ingredient;
//   ingredientsList.append(ingredientsItems);
// });
// =============2 варіант==============
const list = ingredients.map(ingredient => {
  const ingredientsItems = document.createElement('li');
  ingredientsItems.classList.add('item');
  ingredientsItems.textContent = ingredient;
  return ingredientsItems;
});
  ingredientsList.append(...list);
