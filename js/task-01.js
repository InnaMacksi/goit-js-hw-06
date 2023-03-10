/*
Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

// const listEl = document.querySelectorAll('#categories .item');
// console.log(`Number of categories: ${listEl.length}`);

// listEl.forEach(categoryEl => {
//   console.log(`Category: ${categoryEl.querySelector('h2').textContent}`);
//   console.log(`Elements: ${categoryEl.querySelectorAll('li > ul >li').length}`);
// });

// ========================================================

// listEl.forEach(categoryEl => {
//   console.log(`Category: ${categoryEl.firstElementChild.textContent}`);
//   console.log(`Elements: ${categoryEl.lastElementChild.querySelectorAll('li').length}`);
// });
// ========================================
const categories = document.querySelectorAll('.item');
console.log(`Number of categories`, categories.length);
console.log('');
categories.forEach(element => {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Category:', element.lastElementChild.children.length);
  console.log('');
});
