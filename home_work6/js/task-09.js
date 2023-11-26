// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і 
// виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Цей скрипт:

// Знаходить елементи на сторінці за їх селекторами.
// Додає слухача події на кнопку.
// У відповіді на подію викликає функцію changeBodyColor.
// changeBodyColor генерує випадковий колір і встановлює його як колір фону body.Також оновлює значення span з кольором.
// Цей код використовує функцію getRandomHexColor, яку ви надали, для генерації випадкового кольору.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

// const changeButton = document.querySelector("button.change-color");
// const body = document.querySelector("body");
// const colorValue = document.querySelector("span.color");

// changeButton.addEventListener("click", (e) => {
//   let color = getRandomHexColor();
//   body.style.backgroundColor = color;
//   colorValue.textContent = color;
// });